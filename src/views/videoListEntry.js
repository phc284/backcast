var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

  events: {
    'click': 'handleClick'
  },

  handleClick: function (e) {
    console.log('hi');
  }


});
