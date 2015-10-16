App.Routers.Posts = Backbone.Router.extend({
	initialize: function(options) {
		console.log('router initialized')
		this.collection = options.collection;
	},

	routes: {
		"": "index"
	},

	index: function() {
		this.view = new App.Views.PostsIndex({collection: this.collection})
	}
	
})