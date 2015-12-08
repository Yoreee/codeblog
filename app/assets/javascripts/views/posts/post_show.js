App.Views.PostShow = Backbone.View.extend({
	model: App.Models.Post,
	// urlRoot: '/api/v1/posts',
	className: 'post',

	initialize: function() {
		console.log('postshow initialize')
		this.listenTo(this.model, 'change', this.render)
		this.listenTo(this.model, 'destroy', this.remove)
		this.render();
	},

	events: {
		'click .edit-post': 'edit',
		'click .delete-post': 'delete',
		'click .update-post' : 'update',
		'click .cancel-post' : 'cancel'
	},

	edit: function() {
		this.$('.edit-post').hide();
		this.$('.delete-post').hide();
		this.$('.update-post').show();
		this.$('.cancel-post').show();

		var name = this.$('.post-title').html();
		var content = this.$('.post-content').html();

		this.$('.post-title').html('<input type="text" class="title-update" value="' + name +'">');
		this.$('.post-content').html('<input type="text" class="content-update" value="' + content +'">');
	},

	update: function() {
		this.model.set('title', this.$('.title-update').val());
		this.model.set('content', this.$('.content-update').val());

		this.model.save();
	},

	cancel: function() {
		this.render();
	},

	delete: function() {
		this.model.destroy();
	},

	render: function() {
		var html = JST['posts/post_show'](this.model.attributes);
		this.$el.html(html);
	}
})



