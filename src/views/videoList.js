var VideoListView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('add', function () {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderEntry, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html'),

  renderEntry: function(video) {
    var videoEntry = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(videoEntry.$el);
  }

});
