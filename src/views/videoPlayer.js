var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    Backbone.on('changeVideo', function (video) {
      this.model = video;
      this.render();
    }, this);
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),


});
