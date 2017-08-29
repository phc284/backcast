var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    //triggering itself for a test
    this.trigger('select', this);
    //setting video player to the video model we selected
    Backbone.trigger('changeVideo', this);
  }

});
