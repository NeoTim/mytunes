// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div><p></p><audio controls autoplay></div>',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  events: {
    play: function(e){
      console.log("now playing!!");
    }
  },

  render: function(){
    return this.$el                       // <DIV><p></p><audio></div>
      .find('audio')                      // <div><p></p><AUDIO></div>
        .attr('src', this.model ? this.model.get('url') : '')
      .parent().find('p')                 // <div><P></p><audio></div>
        .text(this.model.get('title'));   // <div><p>****</p><audio></div>
  }

});
