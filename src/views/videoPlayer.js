var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //listens to when video is changed
    Backbone.on('changeVideo', function (video) {
      //setting the model to the passed in video from videos.js
      this.model = video;
      //render the view
      this.render();
    }, this);
  },

  render: function() {
    //if there is a model
    if (this.model) {
      //set html to template with the models attributes (title, description, id)
      this.$el.html(this.template(this.model.attributes));
    }
    //returns the template
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),


});
