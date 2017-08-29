var SearchView = Backbone.View.extend({

  //event handler
  events: {
    //on btn click, call handleSearch function
    'click button': 'handleSearch',
    /*on each key type, call handleEnterSearch.
    change to handleSearch if want live search*/
    'keyup input': 'handleSearch'
  },

  //get the search parameter user enters when btn is clicked
  handleSearch: function() {
    //declares varable for the users input value
    var searchItem = this.$el.find('input').val();
    /*run search function in videos.js on collection
    and passing in the user's search input*/
    this.collection.search(searchItem);
  },

  //get the search parameter user enters when btn is clicked
  handleEnterSearch: function(e) {
    /*if the user presses 'Enter' key*/
    if (e.keyCode === 13) {
      var searchItem = this.$el.find('input').val();
      this.collection.search(searchItem);
    }
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
