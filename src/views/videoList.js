var VideoListView = Backbone.View.extend({

  initialize: function () {
    //listen when something isi added onto the collection
    this.collection.on('add', function () {
      //render the view
      this.render();
    }, this);
    //for a test. listen for sync and then render
    this.collection.on('sync', this.render);
  },

  render: function() {
    // if there is an el
    if (this.$el) {
      //???
      this.$el.children().detach();
      //replace template
      this.$el.html(this.template());
      //loops through collection and calls renderEntry for each video
      this.collection.forEach(this.renderEntry, this);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html'),

  renderEntry: function(video) {
    //declaring variable for a new ListEntryView with the current video
    var videoEntry = new VideoListEntryView({model: video});
    //find where video-list class is and append the video onto the html
    this.$el.find('.video-list').append(videoEntry.$el);
  }

});
