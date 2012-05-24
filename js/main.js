require.config({
	paths: {
		jquery: 'libs/jquery/jquery-1.7.2.min',
        underscore: 'libs/underscore/underscore-min',
    	backbone: 'libs/backbone/backbone-optamd3-min',
    	backboneRelational: 'libs/backbone/backbone-relational',
    	text: 'libs/require/text',
    	templates: 'templates'
	}

});

require(['backbone', 'app', 'backboneRelational'], function(Backbone, App){
	App.start();
});