var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderEntry, this);
    return this.$el.html();
  },

  template: templateURL('src/templates/videoList.html'),

  renderEntry: function(video) {
    var videoEntry = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(videoEntry.$el);
  }

});
