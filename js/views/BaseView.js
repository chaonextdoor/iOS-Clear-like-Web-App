define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone){
	var BaseView = function (options) {

    this.bindings = [];
    Backbone.View.apply(this, [options]);
	};

	_.extend(BaseView.prototype, Backbone.View.prototype, {

    	bindTo: function (model, ev, callback) {

        	model.bind(ev, callback, this);
        	this.bindings.push({ model: model, ev: ev, callback: callback });
    	},

	    unbindFromAll: function () {
	        _.each(this.bindings, function (binding) {
	            binding.model.unbind(binding.ev, binding.callback);
	        });
	        this.bindings = [];
	    },

	    dispose: function () {
	        this.unbindFromAll(); // this will unbind all events that this view has bound to 
	        this.unbind(); // this will unbind all listeners to events from this view. This is probably not necessary because this view will be garbage collected.
	        //this.remove(); // uses the default Backbone.View.remove() method which removes this.el from the DOM and removes DOM events.
	    }
    });
    BaseView.extend = Backbone.View.extend;	

	return BaseView;
});