var Videos = Backbone.Collection.extend({

  model: Video,

  parse: function (obj) {
    return obj.items;
  },

  search: function (searchItem) {
    Backbone.ajax ({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: searchItem,
        maxResults: 5,
        part: 'snippet',
        key: 'AIzaSyAHY8iL85Lg9_Q-8keRhxwaIIHQfM0brEA',
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function (data) {
        //reset collection
        //console.log(this);
        this.reset();
        var items = this.parse(data);
        //loop through 'data'
        items.forEach(function(item) {
          //create a new model with each item in data
          //push each model into collection
          this.push(new Video(item));
        }.bind(this));
        if (this.models.length) {
          this.at(0).select();
        }
        Backbone.trigger('changeVideo', new Video(items[0]));
      }.bind(this),

      error: function () {
        console.log('Failed');
      }
    });
  }

});
