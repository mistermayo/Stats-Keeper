Stat.NewShotAttemptController = Ember.ObjectController.extend({

  actions: {
    save: function() {
      var shotAttempt = this.get('model');
      shotAttempt.save();

      var controller = this;
      shotAttempt.get('player').then(function(player) {
        player.save();
        controller.transitionToRoute('player', player);
      });
    }
  }
});
