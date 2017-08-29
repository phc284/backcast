var Videos = Backbone.Collection.extend({

  model: Video,

  //returns the array of videos from the data received from search
  parse: function (obj) {
    return obj.items;
  },

  //receives search parameter, makes request to youtube, gets results and puts
  //them in collection
  search: function (searchItem) {
    //initialize var to the current collection
    var collection = this;
    Backbone.ajax ({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        //this is search query
        q: searchItem,
        //limits number of results received
        maxResults: 5,
        //
        part: 'snippet',
        //API key to receive from youtube
        key: 'AIzaSyAHY8iL85Lg9_Q-8keRhxwaIIHQfM0brEA',
        //make sure what we receive is a video, not a channel, playlist, etc.
        type: 'video',
        //make sure video can be embedded
        videoEmbeddable: 'true'
      },
      success: function (data) {
        //reset collection
        collection.reset();
        //gets array of video objects
        var items = collection.parse(data);
        //loop through 'items'
        items.forEach(function(item) {
          /*create a new model with each item in data
          push each model into collection*/
          collection.push(new Video(item));
        });
        //setting the first video of the collection to the player
        collection.at(0).select();
        /*triggers the event from videoPlayer, to change video and
        passes in first video in collection*/
        Backbone.trigger('changeVideo', new Video(items[0]));
      },

      error: function () {
        console.log('Failed');
      }
    });
  }

});
