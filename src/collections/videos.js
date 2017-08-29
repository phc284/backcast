var Videos = Backbone.Collection.extend({

  model: Video,

  search: function () {
    $.ajax ({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: 'surfing',
        maxResults: 5,
        part: 'snippet',
        key: 'AIzaSyAHY8iL85Lg9_Q-8keRhxwaIIHQfM0brEA'
      },
      success: function (data) {
        console.log(data);
      },
      error: function () {
        console.log('Failed');
      }
    });
  }

});
