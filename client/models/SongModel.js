// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function( song ){
    //this.play();
    // this.set('song', song);
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
