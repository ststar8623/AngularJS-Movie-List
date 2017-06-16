angular.module('movie-list')

.component('movieList', {
  templateUrl: 'src/templates/movieList.html',
  bindings: {
    movies: '<',
    watchToggle: '<',
    searchText: '=',
    watchedMovie: '='
  }
});