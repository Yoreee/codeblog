var App = {
	Collections: {},
	Models: {},
	Views: {},
	Routers: {},

	initialize: function() {
		console.log("....initializing....")
		this.posts = new App.Collections.Posts();
		this.router = new App.Routers.Posts({collection: this.posts});
		this.newPostView = new App.Views.PostNew({collection: this.posts})
		Backbone.history.start();
		this.posts.fetch()
	}
}

$(function() {
	App.initialize();
})
