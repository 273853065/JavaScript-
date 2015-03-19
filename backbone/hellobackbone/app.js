window.onload = function(){
function($){
	World = Backbone.Model.extend({
		name:null
	});
	Worlds = Backbone.Collections.extend({
		initialize:function(models,options){
			this.bind("add",options.view.addOneWorld);
		}
	});
	AppView = Backbone.View.extend({
		el:$("body"),
		initialize:function(){
			this.worlds = new worlds(null,{view:this})
		},
		events:{
			"click #check":"checkIn"
		},
		checkIn:function(event){
			var world_name = prompt("where are you come from?");
			if(world_name == "") world_name = "unknown";
			var world = new World({name:world_name});
		},
		addOneWorld:function(models){
			$("#world-list").append("<li>here is <b>" + model.get('name') + "</b>,hello world!</li>")
		}
	});
	}
	 var appview = new AppView;
}