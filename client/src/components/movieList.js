angular.module('movie-list')

.component('movieList', {
  templateUrl: 'client/src/templates/movieList.html',
  bindings: {
    movies: '<',
    watchToggle: '<',
    searchText: '=',
    watchedMovie: '='
  }
});