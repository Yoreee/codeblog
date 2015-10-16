App.Views.PostNew = Backbone.View.extend({
	// url: '/api/v1/posts',
	el: '.new-post',
	initialize: function() {
		this.$titleInput = this.$el.find('.title-input')
		this.$contentInput = this.$el.find('.content-input')
	},

	events: {
		'click .add-new' : 'newPost'
	},

	newPost: function() {
		console.log('hiii')
		var post = new App.Models.Post({
			title: this.$titleInput.val(),
			content: this.$contentInput.val()
		});

		this.$titleInput.val('');
		this.$contentInput.val('');

		post.save();
		this.collection.add(post);
	}
});