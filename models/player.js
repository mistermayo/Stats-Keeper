Stat.Player = DS.Model.extend({
  name: DS.attr(),
  shot: null,
  shot: function() {
  return this.get('player') + '; shot: ' + this.get('shot');
  }.property('player', 'shot');
  team: DS.belongsTo('team', {async: true})
  shotAttempts: DS.hasMany('shotAttempts', {async: true})
});
