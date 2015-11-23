App.Routers.Posts = Backbone.Router.extend({
	initialize: function(options) {
		console.log('router initialized')
		this.collection = options.collection;
	},

	routes: {
		"": "index",
		"show" : "show"
	},

	index: function() {
		console.log('hello index hit')
		this.view = new App.Views.PostsIndex({collection: this.collection})
	},

	show: function() {
		console.log("hii wtf")
	}
})