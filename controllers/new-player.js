Stat.NewPlayerController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var player = this.get('model');
      player.save();

      var controller = this;
      player.get('team').then(function(team) {
        team.save();
        controller.transitionToRoute('team', team);
      });
    }
  }
});
