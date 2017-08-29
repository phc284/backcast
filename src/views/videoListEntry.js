var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    //set html to template with its attributes (title, description, id)
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

  //event handler
  events: {
    //on click, run handleClick function
    'click': 'handleClick'
  },

  handleClick: function () {
    /*calling select on the model
     in order to select the video for the video player*/
    this.model.select();
  }


});
