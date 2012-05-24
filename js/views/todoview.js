define([
	'jquery', 
	'underscore', 
	'backbone',
    'views/BaseView', 
    'shared',
	'text!templates/todo.html'
	], function($, _, Backbone, BaseView, Shared, todoTemplate){
	var TodoView = BaseView.extend({

		// This is a list tag
		tagName: 'li',

		// A mouse event object
        mouse: {
        	startTime: 0,
        	endTime: 0,
        	startX: 0,
        	startY: 0,
            firstMove: true,
            sort: false,
            index: 0,
            timer: null,
            sortStartPos: 0,
            sortEndPos: 0
        },

        category: {
            name: null,
            modelId: 0,
            id: 0,
            allTodos: null,
            todosOfThis: null
        },

		// Cache the template function for a single item
		template: _.template(todoTemplate),

		// The DOM events specific to an item
		events: {
			'dblclick div.todo-content': 'edit',
			'keypress .todo-input': 'updateOnEnter',
			'mousedown .todo div.display': 'dragEvents',
            'mouseup .todo div.display': 'handleEvents'
		},

        initialize: function(options){
            this.category.name = options.category;
            this.category.id = options.id;
            this.categoryCollection = options.categoryCollection;
            this.category.allTodos = options.todos;
            for (var i = 0; i < this.categoryCollection.models.length; i++) {
                if (this.categoryCollection.models[i].attributes.id == this.category.id) {
                    this.category.modelId = i;
                    break;
                }
            }
            var self = this;
            this.category.todosOfThis = _.filter(this.category.allTodos.models, function(model){
                return model.attributes.category == self.category.name;
            });
            _.bindAll(this, 'render', 'close');
        	this.bindTo(this.model, 'change', this.render);
        },

        // Re-render the content of the todo item 
        render: function(){
        	$(this.el).html(this.template(this.model.toJSON()));
            if ($(this.el).children('div.todo').hasClass('done')) {
                $(this.el).addClass('done');
                $(this.el).children('div.todo').removeClass('done');
            }
        	this.setContent();
        	return this;
        },

        // Set the content of the todo item
        setContent: function(){
        	this.input = this.$('.todo-input');
        	this.input.bind('blur', this.close);
        	this.input.val(this.model.get('content'));
        },

        // Switch the view into 'editing' mode, displaying the input field 
        edit: function(){
        	$(this.el).addClass('editing');
        	this.input.focus();
        },

        // Close the 'editing' mode, saving changes to the todo model
        close: function(){
        	this.model.save({content: this.input.val()});
        	$(this.el).removeClass('editing');
        },

        // If you hit 'Enter', we're through entering the item
        updateOnEnter: function(e){
        	if(e.keyCode === 13){
        		this.close();
        	}
        },

        // Remove the view from the DOM
        remove: function(){
        	$(this.el).remove();
        },

        // Remove the item, destroy the model
        clear: function(){
        	this.model.clear();
        },

        // Make the todo item sortable
       	dragEvents: function(e){
            if ($(this.el).closest('div.content').hasClass('t-wrapper')) {
           		e.preventDefault();
           		if(e.button == 2) return true; //right click
           		this.mouse.startX = e.pageX;
           		this.mouse.startY = e.pageY;
           		this.mouse.startTime = e.timeStamp;
           		var startIndex = $(this.el).index(),
                    position = $(this.el).index();
              
                // Ready to sort
                this.mouse.timer = setTimeout(function(){
                    self.mouse.sort = true;
                    $(self.el).css('-moz-transform-style', 'preserve-3d');
                    $(self.el).css('-moz-perspective', '500px');
                    $(self.el).css('z-index',999);
                    self.$('.todo').css('-moz-transform', 'translateZ(10px)');
                },1000);

                var self = this;
           		$(this.el).on('mousemove', function(event){
                    clearTimeout(self.mouse.timer);     
                    if (!$(this.el).hasClass('globalDrag')) {
                        if (self.mouse.firstMove) {
                            self.mouse.firstMove = false;
                            self.mouse.endTime = event.timeStamp;
                            var deltaX = self.mouse.startX - event.pageX,
                                deltaY = self.mouse.startY - event.pageY;
                            // If sorting, create a placeholder
                            if (self.mouse.sort == true) {
                                var placeholder = $('<li class="placeholder"></li>');
                                self.category.sortStartPos = self.model.attributes.order;
                            }
                        }
                        if(self.mouse.endTime - self.mouse.startTime < 1000) {                    
                            var deltaX = self.mouse.startX - event.pageX,
                                deltaY = self.mouse.startY - event.pageY;
                            // Swipe left to delete a todo
                            if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
                                $(self.el).removeClass('swiperight').addClass('swipeleft');
                                $(self.el).css('left', -deltaX);   
                            }
                            // Swipe right to complete a todo
                            else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
                                $(self.el).removeClass('swipeleft').addClass('swiperight');
                                $(self.el).css('right',deltaX);
                            }   
                        }
                        // Sorting action
                        else {
                            if (Math.abs(deltaX) < Math.abs(deltaY) && deltaY < 0) {
                                $(this.el).css('scaleY', 1.05);
                            }
                        }
                    }

                    // Sort items
                    if (self.mouse.sort == true) {
                        var deltaY = event.pageY - self.mouse.startY;
                        $(self.el).css('position','absolute');
                        $(self.el).css('top',startIndex*$(self.el).height() + deltaY);
                        // Start moving, place the placeholder at its initial position
                        if (Math.floor(Math.abs(deltaY)/$(self.el).height()) < 1) {
                            $(self.el).after(placeholder);            
                        }
                        // Change the position of placeholder as mouse moves
                        else {
                            position = startIndex + Math.floor(deltaY/$(self.el).height());
                            var copy = $(self.el).closest('ul').children('li.placeholder').remove();
                            // Dragging down
                            if (deltaY > 0) {
                                $(self.el).closest('ul').children().eq(position).after(copy);
                            }
                            // Dragging up
                            else {
                                $(self.el).closest('ul').children().eq(position + 1).before(copy);
                            }
                        }
                    }
       		   });
            }
        },

    	handleEvents: function(event){
            if ($(this.el).closest('div.content').hasClass('t-wrapper')) {
                $(this.el).unbind('mousemove');
                var deltaY = event.pageY - this.mouse.startY;
                // Handle the sorting action
                clearTimeout(this.mouse.timer);
                if (this.mouse.sort == true) {
                    // Reset relevant parameters
                    this.mouse.sort = false;
                    var index = $(this.el).closest('ul').children('li.placeholder').index();
                    $(this.el).closest('ul').children('li.placeholder').remove();
                    $(this.el).css('position','relative');
                    $(this.el).css('top','0px');
                    $(this.el).css('-moz-transform-style', 'preserve-3d');
                    $(this.el).css('-moz-perspective', '500px');
                    $(this.el).css('z-index',1);
                    this.$('.todo').css('-moz-transform', 'translateZ(0px)');
                    // Place the sorted item in right place
                    if (deltaY > 0) {
                        // Moving down
                        $(this.el).closest('ul').children().eq(index - 1).after($(this.el));
                        // Change the order of corresponding models
                        // order is increasing from list bottom to up, index is increasing from list up to bottom
                        this.category.sortEndPos = $(this.el).closest('ul').children().length - (index - 1);
                        for (var i = this.category.sortStartPos - 1; i >= this.category.sortEndPos; i--) {
                            for (var j = 0; j < this.category.todosOfThis.length; j++) {
                                if (this.category.todosOfThis[j].attributes.order == i) {
                                    this.category.todosOfThis[j].attributes.order++;
                                    this.category.todosOfThis[j].save({order: this.category.todosOfThis[j].attributes.order});
                                    break;
                                }
                            }
                        }
                        this.model.attributes.order = this.category.sortEndPos;
                        this.model.save({order: this.model.attributes.order});
                    }
                    else {
                        // Moving up
                        $(this.el).closest('ul').children().eq(index).before($(this.el));
                        // Change the order of correponding models
                        this.category.sortEndPos = $(this.el).closest('ul').children().length - index;
                        for (var i = this.category.sortStartPos + 1; i<=this.category.sortEndPos; i++) {
                            for (var j = 0; j < this.category.todosOfThis.length; j++) {
                                if (this.category.todosOfThis[j].attributes.order == i) {
                                    this.category.todosOfThis[j].attributes.order--;
                                    this.category.todosOfThis[j].save({order: this.category.todosOfThis[j].attributes.order});
                                    break;
                                }
                            }
                        }
                        this.model.attributes.order = this.category.sortEndPos;
                        this.model.save({order: this.model.attributes.order});
                    }
                } 
                this.mouse.firstMove = true;

                // Handle the left-swiping action 
                var leftoffset = -($(this.el).width() + 
                                    parseInt(this.$('div.todo').css('padding-left')) + 
                                    parseInt(this.$('div.todo').css('padding-right')));
                if ($(this.el).hasClass('swipeleft')){
                    var self = this;
                    this.$('div.todo').animate({left: leftoffset}, 500, function(){
                        self.model.destroy();
                        self.remove();
                        Shared.deleted++;
                    });
                }
                // Handle the right-swiping action
                var topoffset = $(this.el).siblings().length * $(this.el).height();
                if ($(this.el).hasClass('swiperight')) {
                    var self = this;
                    $(self.el).css('z-index', 999);
                    $(this.el).animate({right: 0}, 200)
                              .animate({top: topoffset}, 300, function(){
                               $(self.el).removeClass('swiperight').addClass('done');
                               $(self.el).appendTo($(self.el).closest('ul'));
                               $(self.el).css({'z-index': 1, 'top': 0});
                               });
                    this.model.save({done: true});
                }
            }
        }

  });
	return TodoView;
});