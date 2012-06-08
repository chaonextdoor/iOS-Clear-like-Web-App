define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/category.html'
	], function($, _, Backbone, categoryTemplate){
	var CategoryView = Backbone.View.extend({

		// This is a list tag
		tagName: 'li',

		// Cache the template function for a single item
		template: _.template(categoryTemplate),

		// A mouse event object
		mouse: {
			startTime: 0,
            endTime: 0,
            startX: 0,
			startY: 0,
            firstMove: true,
            sort: false,
            index: 0,
            timer: null
		},

        category: {
            allCategories: null,
            sortStartPos: 0,
            sortEndPos: 0,
            deletedCategory: 0,
            todosData: null
        },

		// The DOM events specific to an item
		events: {
			'dblclick span.category-content': 'edit',
			'keypress .category-input': 'updateOnEnter',
			'mousedown .category div.display': 'dragEvents',
            'mouseup .category div.display': 'handleEvents'
		},

		// The CategoryView listens for changes to its model, re-rendering. 
        initialize: function(options){
            this.category.todosData = JSON.parse(localStorage.getItem('clearApp-todo'));
            this.category.allCategories = options.categories;
            _.bindAll(this, 'render', 'close');
    	    this.model.bind('change', this.render);
        },

        // Re-render the content of the category item 
        render: function(){
    	   $(this.el).html(this.template(this.model.toJSON()));
    	   this.setContent();
    	   return this;
        },

        // Set the content of the category item
        setContent: function(){
    	   this.input = this.$('.category-input');
    	   this.input.bind('blur', this.close);
    	   this.input.val(this.model.get('category'));
        },

        // Switch the view into 'editing' mode, displaying the input field 
        edit: function(){
    	   $(this.el).addClass('editing');
    	   this.input.focus();
        },

        // Close the 'editing' mode, saving changes to the todo model
        close: function(){
    	   this.model.save({category: this.input.val()});
    	   $(this.el).removeClass('editing');
        },

        // If you hit 'Enter', we're through entering the item
        updateOnEnter: function(e){
    	   if(e.keyCode == 13){
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

        // You can delete a category only if there are no todo item in it
        dragEvents: function(e){
            if ($(this.el).closest('div.content').hasClass('c-wrapper')) {
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
                    self.$('.category').css('-moz-transform', 'translateZ(10px)');
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

                        // Category list only has swiping-left action to delete a category
                        if(self.mouse.endTime - self.mouse.startTime < 1000) {                     
                            deltaX = self.mouse.startX - event.pageX;
                            
                            // Swipe left to delete a category
                            var deltaX = self.mouse.startX - event.pageX,
                                deltaY = self.mouse.startY - event.pageY; 
                            if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
                                $(self.el).css('left', -deltaX);
                                $(self.el).addClass('swipeleft');
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
            if ($(this.el).closest('div.content').hasClass('c-wrapper')) {
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
                    this.$('.category').css('-moz-transform', 'translateZ(0px)');
                    // Place the sorted item in right place
                    if (deltaY > 0) {
                        // Moving down
                        $(this.el).closest('ul').children().eq(index - 1).after($(this.el));
                        // Change the order of corresponding models
                        // order is increasing from list bottom to up, index is increasing from list up to bottom
                        this.category.sortEndPos = $(this.el).closest('ul').children().length - (index - 1);
                        for (var i = this.category.sortStartPos - 1; i >= this.category.sortEndPos; i--) {
                            for (var j = 0; j < this.category.allCategories.models.length; j++) {
                                if (this.category.allCategories.models[j].attributes.order == i) {
                                    this.category.allCategories.models[j].attributes.order++;
                                    this.category.allCategories.models[j].save({order: this.category.allCategories.models[j].attributes.order});
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
                        // Change the order of corresponding models
                        this.category.sortEndPos = $(this.el).closest('ul').children().length - index;
                        for (var i = this.category.sortStartPos + 1; i<=this.category.sortEndPos; i++) {
                            for (var j = 0; j < this.category.allCategories.models.length; j++) {
                                if (this.category.allCategories.models[j].attributes.order == i) {
                                    this.category.allCategories.models[j].attributes.order--;
                                    this.category.allCategories.models[j].save({order: this.category.allCategories.models[j].attributes.order});
                                    break;
                                }
                            }
                        }
                        this.model.attributes.order = this.category.sortEndPos;
                        this.model.save({order: this.model.attributes.order});
                    }
                } 
                this.mouse.firstMove = true;

                // Handle the swiping action 
                var leftoffset = -($(this.el).width() + 
                                    parseInt(this.$('div.category').css('padding-left')) + 
                                    parseInt(this.$('div.category').css('padding-right')));
                if ($(this.el).hasClass('swipeleft')) {
                    var self = this;
                    this.$('div.category').animate({left: leftoffset}, 500, function(){
                        // Delete all the todo items under this category
                        self.category.deletedCategory = self.model.attributes.category;
                        if(self.category.todosData) {
                            var i = 1;
                            while(self.category.todosData[i] != null) {i++;}
                            var length = i - 1;
                            if (length !== 0 && self.category.deletedCategory !== null) {
                                for (var j = 1; j <= length; j++) {
                                    if (self.category.todosData[j].category == self.category.deletedCategory) {
                                        delete self.category.todosData[j];
                                        localStorage.setItem('clearApp-todo', JSON.stringify(self.category.todosData));
                                    }
                                }
                            }
                        }
                        // Delete this category
                        self.model.destroy();
                        self.remove();
                    });
                }
            }
        }
			
    });
	return CategoryView;
});