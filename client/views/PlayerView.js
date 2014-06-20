// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div class="col-md-8"><blockquote id="player"><p><i class="fa fa-music fa-2x"></i> <strong id="current"></strong></p><audio id="player" controls autoplay style="width:100%;"></blockquote></div>',

  initialize: function() {
      var self = this;
    $(this.$el).find("#player").on('ended', function(){
      self.model.ended();      
    });
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
      .parent().find('#current')                 // <div><P></p><audio></div>
        .text(this.model.get('title'));   // <div><p>****</p><audio></div>
  }

});
