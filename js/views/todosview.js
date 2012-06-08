define([
	'jquery',
	'underscore',
	'backbone',
    'models/todo',
	'views/todoview',
    'shared',
	'text!templates/todo.html',
	'text!templates/category.html'
	], function($, _, Backbone, TodoModel, TodoView, Shared, todoTemplate, categoryTemplate){
	var TodoListView = Backbone.View.extend({
				
		el: $('div.content'),

		// A mouse event object
		mouse: {
			startTime: 0,
    		endTime: 0,
    		startX: 0,
    		startY: 0,
    		angle: 0,
    		firstMove: true,
    		liElement: 49
		},

        category: {
            name: null, // this category's name
            modelId: 0, // this category's id in the category list
            id: 0,
            numOfTodo: 0, // number of todoitems in this category
            modelOrder: 0 // todoitem order inside this category
        },


		// Cache the template function for a single item
		templateTodo: _.template(todoTemplate),
		templateCategory: _.template(categoryTemplate),

		// The DOM event specific to an item
		events: {
			'mousedown': 'dragEvents',
            'mouseup': 'handleEvents'
		},

        newCategory: null,
        newTodo: null,

    	initialize: function(options){      
            Shared.deleted = 0;
            this.category.numOfTodo = 0;
            this.categoryCollection = options.categoryCollection;
            this.category.name = options.category;
            this.category.id = options.id;         
            _.bindAll(this, 'addOne', 'addAll', 'render');
    		this.collection.bind('reset', this.render);
    		this.collection.bind('add', this.addOne);
            var self = this;
            for (var i = 0; i < this.categoryCollection.models.length; i++) {
                if (this.categoryCollection.models[i].attributes.id == this.category.id) {
                    this.category.modelId = i;
                    break;
                }
            }
            this.todos = _.filter(this.collection.models, function(item){
                return item.attributes.category == self.category;
            });
    	},

    	//
    	addAll: function(){
            var self = this;
    		this.collection.each(function(model){
                if (model.attributes.category == self.category.name) {
                    self.addOne(model);
                    model.save({order: ++self.category.modelOrder});
                    self.category.numOfTodo++;
                }
            });
    	},

    	//
    	addOne: function(todoItem){
    		var todoView = new TodoView({model: todoItem,
                                         categoryCollection: this.categoryCollection,
                                         category: this.category.name,
                                         id: this.category.id,
                                         todos: this.collection
                                        });
    		this.$('ul').prepend(todoView.render().el);
    	},

    	//
    	render: function(){
            $(this.el).removeClass('c-wrapper').addClass('t-wrapper'); 
            this.$('ul').removeClass('categorylist').addClass('todolist'); 
            this.$('ul').empty();
    		this.addAll();
            this.category.modelOrder = 0;
            return this;
    	},

        clearCompleted: function(){
            var self = this;
            this.$('ul').children('li.done').remove();
            _.each(self.collection.done(), function(todo){ 
                todo.destroy();
            });
            return false;
        },

    	// Generate the attributes for a new Todo item.
    	newAttributes: function() {
     		return {
                'category': this.category.name,
        		'content': 'Double click to create todo',
                'id':   this.collection.nextOrder(),
        		'order':   this.collection.nextOrder(),
        		'done':    false
      		};
    	},

    	//
    	dragEvents: function(e){
            if ($(this.el).hasClass('t-wrapper')) {
        		e.preventDefault();
        		if(e.button == 2) return true;
        		this.mouse.startX = e.pageX;
        		this.mouse.startY = e.pageY;
        		this.mouse.startTime = e.timeStamp;
                var gobackTop = parseInt($(this.el).children('.goback').css('top'));
        		var self = this;
        		$(this.el).bind('mousemove', function(event){
                    // Record the starting time of the first mousemove event
                    if (self.mouse.firstMove) {
                        self.mouse.firstMove = false;
                        self.mouse.endTime = event.timeStamp;
                        var deltaX = self.mouse.startX - event.pageX,
                            deltaY = self.mouse.startY - event.pageY;
                        if (self.mouse.endTime - self.mouse.startTime < 1000){
                            // If it's global dragging and dragging down, create new item
                            if(Math.abs(deltaX) < Math.abs(deltaY) && deltaY < 0){
                                if (Shared.deleted != 0) {
                                    self.category.numOfTodo = self.category.numOfTodo - Shared.deleted;
                                    self.categoryCollection.models[self.category.modelId].save({count: self.category.numOfTodo});
                                }
                                self.newCategory = self.templateCategory({  category: self.category.name,
                                                                            count: self.category.numOfTodo,
                                                                            order: 0,
                                                                            id: 0,
                                                                            todoList: []                                           
                                                                        });

                                self.newTodo = self.templateTodo({  content: 'Pull to create item',
                                                                    order: 0,
                                                                    done: false
                                                                });
                                $(self.el).children('div.newItem').removeClass('newCategory').addClass('newTodo').append(self.newTodo);
                                $(self.el).children('div.goback').append(self.newCategory);
                            }
                        }
                    }

                    // Global dragging
                    if (self.mouse.endTime - self.mouse.startTime < 1000){                  
                        // inner if would not have the updated event.pageY, so I have to cache it here.
                        var deltaX = self.mouse.startX - event.pageX,
                            deltaY = self.mouse.startY - event.pageY;
                        // Drag down to create new item
                        if(Math.abs(deltaX) < Math.abs(deltaY) && deltaY < 0) {                       
                            self.$('ul').children('li').addClass('globalDrag');
                            $(self.el).children('.goback').css('top', (gobackTop - deltaY));
                            self.mouse.angle = Math.acos(Math.abs(event.pageY - self.mouse.startY)/(self.mouse.liElement + 2*parseInt(self.$('li').css('padding-top'))))*180/Math.PI; 
                            
                            $(self.el).children('div.newItem').height(deltaY < 0? -deltaY: 0);
                            // Goback item hasn't show up yet
                            if (Math.abs(event.pageY - self.mouse.startY) <= 3*self.mouse.liElement) {
                                $(self.el).children('div.newItem').css('visibility', 'visible');
                                if (Math.abs(event.pageY - self.mouse.startY) < self.mouse.liElement) {
                                    if (self.$('ul').children().length > 0) {
                                        $(self.el).children('div.newItem').children('.todo').css('-webkit-transform', 'rotateX(' + self.mouse.angle + 'deg)');
                                        $(self.el).children('div.newItem').children('.todo').css('-moz-transform', 'rotateX(' + self.mouse.angle + 'deg)');
                                    }
                                    else {
                                        $(self.el).children('div.newItem').children('.todo').css('-webkit-transform', 'rotateX(0)');
                                        $(self.el).children('div.newItem').children('.todo').css('-moz-transform', 'rotateX(0)'); 
                                    }
                                }
                            // change the text in new todo item to 'release to create item'
                                else {
                                    $(self.el).children('div.newItem').children('.todo').css('-webkit-transform', 'rotateX(0)');
                                    $(self.el).children('div.newItem').children('.todo').css('-moz-transform', 'rotateX(0)');
                                    $(self.el).children('div.newItem').find('.todo-content').text('Release to create item');
                                } 
                            }
                            // Goback item shows up
                            else {
                                $(self.el).children('div.newItem').css('visibility', 'hidden');  
                            }
                        }

                        // Drag up to clear completed todo
                        else if (Math.abs(deltaX) < Math.abs(deltaY) && deltaY > 0) {
                            $(self.el).find('li').addClass('globalDrag');
                            self.$('ul').css('top', -deltaY);
                        }   
                    }
        		});
            }
        },
    	
        handleEvents: function(event){
            if ($(this.el).hasClass('t-wrapper')) {
                $(this.el).unbind('mousemove');
                $(this.el).find('li').removeClass('globalDrag');
                // Reset this.mouse
                this.mouse.firstMove = true;
                this.mouse.angle = 0;
                var deltaX = this.mouse.startX - event.pageX,
                    deltaY = this.mouse.startY - event.pageY,
                    li = this.$('ul li:first-child');
                    
                if (this.mouse.endTime - this.mouse.startTime < 1000) {
                    // Drag down
                    if (Math.abs(deltaX) < Math.abs(deltaY) && deltaY < 0) {
                        $(this.el).children('div.newItem').html('');
                        $(this.el).children('div.newItem').height(0);
                        $(this.el).children('div.goback').html('');
                        $(this.el).children('div.goback').css('top',-196);
                        this.mouse.startX = 0;
                        this.mouse.startY = 0;
                        this.mouse.endTime = 0;
                        this.mouse.startTime = 0;

                        // Create new item
                        if(Math.abs(deltaY) >= this.mouse.liElement && Math.abs(deltaY) <= 3*this.mouse.liElement){ 
                            var newTodo = new TodoModel(this.newAttributes());
                            this.category.numOfTodo++;
                            this.collection.create(newTodo);
                        }

                        // Go back to category list
                        else if(Math.abs(deltaY) >= 4*this.mouse.liElement) {
                            this.categoryCollection.models[this.category.modelId].save({count: this.category.numOfTodo});
                            this.category.name = null;
                            this.category.id = 0;
                            this.category.numOfTodo = 0;
                            Backbone.history.navigate('', {trigger: true});
                        }
                    }
                    // Drag up
                    else if (Math.abs(deltaX) < Math.abs(deltaY) && deltaY > 0) {
                        var self = this;
                        var contentHeight = $(self.el).height();
                        var undone = $(self.el).children('ul').children().length -
                                     $(self.el).children('ul').children('li.done').length;
                        this.category.numOfTodo -= $(self.el).children('ul').children('li.done').length;
                        this.categoryCollection.models[this.category.modelId].save({count: this.category.numOfTodo});
                        this.$('ul').animate({top: 0}, 200, function(){
                            self.$('ul').children('li.done').animate({top: contentHeight - undone*self.mouse.liElement}, 300, function(){
                                self.clearCompleted();
                            });
                        });
                    }
                }
            }
        }
	});
	return TodoListView;
});