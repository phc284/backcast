var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.fakeData = window.exampleVideoData ? window.exampleVideoData[0] : window.fakeVideoData[0];
    this.videos = new Videos(window.exampleVideoData);
    this.render(this.fakeData);
  },


  render: function(video) {
    this.$el.html(this.template());
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: new Video(video)
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')


});
