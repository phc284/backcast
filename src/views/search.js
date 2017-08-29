var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleSearch',
    'keyup .form-control': 'handleEnterSearch'
  },

  handleSearch: function() {
    var searchItem = this.$el.find('input').val();
    this.collection.search(searchItem);
  },

  handleEnterSearch: function(e) {
    if (e.keyCode === 13 || true) {
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
