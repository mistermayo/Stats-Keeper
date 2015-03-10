Stat.Router.map(function() {
  this.resource('teams', {path: '/'});
  this.resource('team', {path: ':team_id'},
  function() {
    this.resource('new-player');
    this.resource('player');
    this.resource('shotAttempt');
    this.resource('new-shotAttempt');


  });
  this.resource('new-team');
  this.resource('player', {path: ':player_id'}),
  function() {
  this.resource('new-player');    
  this.resource('shotAttempt');
  this.resource('new-shotAttempt');
};
});
