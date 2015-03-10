Stat.NewShotController = Ember.ObjectController.extend({

  actions: {
    save: function() {
      var shot = this.get('model');
      shot.save();

      var controller = this;
      shot.get('player').then(function(player) {
        player.save();
        controller.transitionToRoute('player', player);
      });
    }
  }
});
