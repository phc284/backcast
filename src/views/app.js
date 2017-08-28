var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.fakeData = new Video(window.exampleVideoData ? window.exampleVideoData[0] : window.fakeVideoData[0]);
    this.videos = new Videos(window.exampleVideoData);
    this.render(this.fakeData);
    Backbone.on('changeVideo', function (video) {
      this.render(video);
    }, this);
  },


  render: function(video) {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: video
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')


});
