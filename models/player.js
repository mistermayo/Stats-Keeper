Stat.Player = DS.Model.extend({
  name: DS.attr(),
  team: DS.belongsTo('team', {async: true})
  shotAttempts: DS.hasMany('shotAttempts', {async: true})
});
