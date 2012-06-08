require.config({
	paths: {
		jquery: 'libs/jquery/jquery-1.7.2.min',
        underscore: 'libs/underscore/underscore-min',
    	backbone: 'libs/backbone/backbone-optamd3-min',
    	text: 'libs/require/text',
    	templates: 'templates'
	}

});

require(['backbone', 'app'], function(Backbone, App){
	App.start();
});