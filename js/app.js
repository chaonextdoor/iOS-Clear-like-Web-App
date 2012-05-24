define([
  'jquery',
  'underscore',
  'backbone',
  'router', 
  'shared'
], function($, _, Backbone, AppRouter, Shared){
var approuter;
var start = function(){
    approuter = new AppRouter();
    Backbone.history.start();  
};

return {
    start: start
};

});