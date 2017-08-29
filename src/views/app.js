var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.fakeData = new Video(window.exampleVideoData ? window.exampleVideoData[0] : window.fakeVideoData[0]);
    //creating new collection of videos
    this.videos = new Videos();
    //listen to when collection is updated and select first video
    this.listenTo(this.videos, 'sync', this.selectFirst);
    //initializing the default search parameter
    this.videos.search('Beautiful Nature');
    //update the view to the user
    this.render();
  },

  selectFirst: function () {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },


  render: function() {
    //setting html to template value, which refers to app.html
    this.$el.html(this.template());

    //rendering video list container to user
    new VideoListView({
      //setting element reference to where videoListView will be rendered
      el: this.$('.list'),
      //passing through the collection
      collection: this.videos
    }).render();

    //rendering the the video player to user
    new VideoPlayerView({
      //setting the element reference to where VideoPlayerView will be rendered
      el: this.$('.player'),
      collection: this.videos
    }).render();

    //rendering the search bar to user
    new SearchView ({
      //setting the element reference to where searchView will be rendered
      el: this.$('.search'),
      //passing through the collection
      collection: this.videos
    }).render();

    //returns the rendered elements to the app view
    return this;
  },

  template: templateURL('src/templates/app.html')


});
