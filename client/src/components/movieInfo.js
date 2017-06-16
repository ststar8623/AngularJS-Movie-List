angular.module('movie-list')

.component('movieInfo', {
  templateUrl: 'client/src/templates/movieInfo.html',
  bindings: {
    movie: '<',
    watchToggle: '<'
  }
});