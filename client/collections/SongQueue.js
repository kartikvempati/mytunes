
// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
      this.on('add',function (){
        if (this.length ===1){
          this.playFirst();
        }
      });

      this.on('ended', function() {
        this.shift();
        if(this.length > 0) {
          this.playFirst();
        }
      });

      this.on('dequeue', function() {
        //Will not work when dequeuing from song queue
        //Try this.remove(this.model)
        this.shift();
      });

      this.on('enqueue', function() {
        this.add(this.model);
        console.log(this)
      })
  },

  playFirst: function() {
    this.at(0).play();
  }

});