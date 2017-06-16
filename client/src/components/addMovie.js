angular.module('movie-list')

.component('addMovie', {
  templateUrl: 'client/src/templates/addMovie.html',
  bindings: {
    addMovie: '<'
  }
});