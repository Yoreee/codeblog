App.Collections.Posts = Backbone.Collection.extend({
	model: App.Models.Post,
	url: '/api/v1/posts'
})