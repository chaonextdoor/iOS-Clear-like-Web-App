define([
	'jquery',
	'underscore',
	'backbone',
    'models/todo',
    'views/BaseView',
	'views/categoryview',
	'text!templates/category.html',
	], function($, _, Backbone, TodoModel, BaseView, CategoryView, categoryTemplate){
	var CategoryListView = BaseView.extend({
		
		
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

		// Cache the template function for a single item
		templateCategory: _.template(categoryTemplate),
//
		// The DOM event specific to an item
		events: {
			'mousedown': 'dragEvents',
            'mouseup': 'handleEvents'
		},

        newCategory: null,

    	initialize: function(){
            _.bindAll(this, 'addOne', 'addAll', 'render');
    		this.bindTo(this.collection, 'reset', this.render);
    		this.bindTo(this.collection, 'add', this.addOne);
            //this.collection.bind('all', this.render);
    	},

    	//
    	addAll: function(){
            //this.collection.each(function(model) { model.destroy(); } )
    		this.collection.each(this.addOne);
    	},

    	//
    	addOne: function(categoryItem){
    		var categoryView = new CategoryView({model: categoryItem,
                                                 categories: this.collection
                                                });
    		this.$('ul').prepend(categoryView.render().el);
    	},

    	//
    	render: function(){
            $(this.el).removeClass('t-wrapper').addClass('c-wrapper'); 
            this.$('ul').removeClass('todolist').addClass('categorylist'); 
            this.$('ul').empty();
    		this.addAll();
            return this;
    	},
    	
    	// Generate the attributes for a new Todo item.
        newAttributes: function() {
            return {
                'category': 'Double click to create category',
                'id': this.collection.nextOrder(),
                'order':   this.collection.nextOrder(),
                'count': 0
            };
        },

    	dragEvents: function(e){
            if ($(this.el).hasClass('c-wrapper')) {
                e.preventDefault();
        		if(e.button == 2) return true;
        		this.mouse.startX = e.pageX;
        		this.mouse.startY = e.pageY;
        		this.mouse.startTime = e.timeStamp;
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
                                self.newCategory = self.templateCategory({  category:'Pull to create item',
                                                                            order: 0,
                                                                            id: 0,
                                                                            count: 0                                            
                                                                        });
                                $(self.el).children('div.newItem').removeClass('newTodo').addClass('newCategory').append(self.newCategory);
                            }
                        }
                    }

                    // Global dragging
       				if (self.mouse.endTime - self.mouse.startTime < 1000){					
                        // inner if would not have the updated event.pageY, so I have to cache it here.
                        deltaX = self.mouse.startX - event.pageX,
                        deltaY = self.mouse.startY - event.pageY;
                        // Drag down
        				if(Math.abs(deltaX) < Math.abs(deltaY) && deltaY < 0){
                            
                            self.$('ul').children('li').addClass('globalDrag');

        					// Drag down to create new item
        					//$(self.el).children('div.category').css('top', (-192 + Math.abs(deltaY)));
        					self.mouse.angle = Math.acos(Math.abs(event.pageY - self.mouse.startY)/(self.mouse.liElement + 2*parseInt(self.$('li').css('padding-top'))))*180/Math.PI; 
                            $(self.el).children('div.newItem').height(event.pageY - self.mouse.startY >=0? event.pageY - self.mouse.startY : 0);
                            if (Math.abs(event.pageY - self.mouse.startY) < self.mouse.liElement) {
                                if (self.$('ul').children().length > 0){
                                    $(self.el).children('div.newItem').children('.category').css('-webkit-transform', 'rotateX(' + self.mouse.angle + 'deg)');
                                    $(self.el).children('div.newItem').children('.category').css('-moz-transform', 'rotateX(' + self.mouse.angle + 'deg)');
                                }
                                else {
                                    $(self.el).children('div.newItem').children('.category').css('-webkit-transform', 'rotateX(0)');
                                    $(self.el).children('div.newItem').children('.category').css('-moz-transform', 'rotateX(0)');
                                }
                            }
                            // change the text in new todo item to 'release to create item'
        					else {
                                $(self.el).children('div.newItem').children('.category').css('-webkit-transform', 'rotateX(0)');
                                $(self.el).children('div.newItem').children('.category').css('-moz-transform', 'rotateX(0)');
        						$(self.el).children('div.newItem').find('span.category-content').text('Release to create item');
        					}						
        				}	
       				}
        		});
            }
        },
    	
        handleEvents: function(event) {
            if ($(this.el).hasClass('c-wrapper')) {
                $(this.el).unbind('mousemove');
                $(this.el).find('li').removeClass('globalDrag');
                
                // Reset this.mouse
                this.mouse.firstMove = true;
                this.mouse.angle = 0;

                var deltaX = this.mouse.startX - event.pageX,
                    deltaY = this.mouse.startY - event.pageY;
                    // Drag down
                if (this.mouse.endTime - this.mouse.startTime < 1000 &&
                    Math.abs(deltaX) < Math.abs(deltaY) && deltaY < 0) {

                    $(this.el).children('div.newItem').html('');
                    $(this.el).children('div.newItem').height(0);
                    this.mouse.startX = 0;
                    this.mouse.startY = 0;
                    this.mouse.endTime = 0;
                    this.mouse.startTime = 0;

                    // Create new item
                    if(Math.abs(deltaY) >= this.mouse.liElement){
                        var newTodo = new TodoModel(this.newAttributes());
                        this.collection.create(newTodo);
                    }
                }
            }
        }

	});
	return CategoryListView;
});