define([
	'jquery',
	'underscore',
	'backbone',
	'libs/backbone/localStorage',
	'collections/categories',
	'collections/todos',
	'views/todosview',
	'views/categoriesview'
	], function($, _, Backbone, Store, CategoriesCollection, TodosCollection, TodosView, CategoriesView){
	var AppRouter = Backbone.Router.extend({
		
		_data: null,
		_categorylength: 0,
		_todolength: 0,
		_index: null,
		_subtodolist: null,
		_categories: null,
		_todos: null,
		_category: null,


		routes: {
			"": "index",
			"category/:id": "hashcategory"  
		},

		index: function(){
			$('.instruction1').toggle();
			$('.instruction2').toggle();
			if (this._subtodolist) {
				this._subtodolist.dispose();
				this._subtodolist.undelegateEvents();
			}
			this._categories = new CategoriesCollection();
            this._index = new CategoriesView({collection: this._categories});
			this._categories.fetch();
		},

		hashcategory: function(id){
			$('.instruction1').toggle();
			$('.instruction2').toggle();
			this._data = this._categories.localStorage.data[id];

			var categoryModel = _.filter(this._categories.models, function(model){
				return model.attributes.id == id;
			})[0];
			this._category = categoryModel.attributes.category;
			this._todos = new TodosCollection();
            this._subtodolist = new TodosView({	collection: this._todos, 
            									id: id,
												categoryCollection: this._categories,
												category: this._category
											 });
            if (this._index) {
            	this._index.dispose();
            	this._index.undelegateEvents();
            }
            this._todos.fetch();
		}
	});

	return AppRouter;
});