// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function( song ){

    if(song){
      this.add(new SongModel(song));
    }
    this.on('add', function(){
      if(this.length === 1){
        this.remove( song );
        if(this.length){
          this.playFirst();
        }
      }
    });

    this.on("dequeue", function( song ){
      this.remove( song );
    });
    
    this.on("ended", function( song ){
      console.log("ended", song );
      song.dequeue( song );
      if ( this.length ) {
        this.playFirst();
      }
    }.bind( this) );

  },
  playFirst: function(){
    this.at(0).play();    
  }

});
