Stat.shotAttempt = DS.Model.extend({
score: null;
shot: null;

shotAttempt: function() {
  return this.get('player') + '; shot: ' + this.get('shot');
}.property('player', 'shot');
player: DS.belongsTo('player', {async: true})

});
