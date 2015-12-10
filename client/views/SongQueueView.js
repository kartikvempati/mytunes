// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    // console.log(this.collection);
    if(this.collection !== undefined){
      this.$el.html('<th>Queue Library</th>').append(
          this.collection.map(function(song) {
            return new SongQueueEntryView({model: song}).render();
          })
      );
    } else {
      this.$el.html('<th>Queue Library</th>')
    }
  }

});