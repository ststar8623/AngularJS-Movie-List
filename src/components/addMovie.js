angular.module('movie-list')

.component('addMovie', {
  templateUrl: 'src/templates/addMovie.html',
  bindings: {
    addMovie: '<'
  }
});