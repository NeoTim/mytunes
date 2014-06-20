// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function( song ){
    //this.play();
    // this.set('song', song);
    this.playCount = 0;
    this.upVotes = 0;
    this.downVotes = 0;
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this );

  },
  enqueue: function( song ){
    this.trigger( 'enqueue', this );
    this.set('playCount', this.get('playCount')+1);
  },
  dequeue: function( song ){
    this.trigger( 'dequeue', this );
  },
  ended: function( song ){
    this.trigger( 'ended', this );
  }

});
