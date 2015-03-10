Stat.ShotAttempt = DS.Model.extend({
score: DS.attr(),
shot: DS.attr(),
player: DS.belongsTo('player', {async: true})

});
