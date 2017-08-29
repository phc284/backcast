var Videos = Backbone.Collection.extend({

  model: Video,

  search: function (searchItem) {
    $.ajax ({
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
        //loop through 'data'
        data.items.forEach(function(item) {
          //create a new model with each item in data
          //push each model into collection
          this.push(new Video(item));
        }.bind(this));
        Backbone.trigger('changeVideo', new Video(data.items[0]));
      }.bind(this),

      error: function () {
        console.log('Failed');
      }
    });
  }

});
