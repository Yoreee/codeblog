App.Views.PostsIndex = Backbone.View.extend({
	className: 'post-container',
	initialize: function() {
		console.log('post index initialized');
		this.listenTo(this.collection, 'add', this.add);
		this.render();
	},

	render: function() {
		$('#container').empty()
		$('#container').append(this.$el)
	},

	add: function(model) {
		var view = new App.Views.PostShow({model: model})
		view.render();
		this.$el.append(view.$el)
	}
});