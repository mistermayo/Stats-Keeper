Stat.shotAttempt = DS.Model.extend({
score: null;
shot: null;
player: DS.belongsTo('player', {async: true})

});
