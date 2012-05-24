define([
	'underscore',
	'backbone',
	'libs/backbone/localStorage', 
	'models/todo'
	], function(_, Backbone, Store, Todo){

	var TodosCollection = Backbone.Collection.extend({
		
		// Save all of the todo items under the `"clearApp"` namespace.
    	localStorage: new Store("clearApp-todo"),

		done: function(){
			return this.filter(function(todo){return todo.get('done');});
		},

		remaining: function(){
			return this.without.apply(this, this.done());
		},

		// This generates the next order number of new items
		nextOrder: function(){
			if(!this.length) return 1;
			return this.last().get('order') + 1;
		},

		// Todos are sorted by their original insertion order
		comparator: function(todo){
			return todo.get('order');
		}

	});
	return TodosCollection;
});