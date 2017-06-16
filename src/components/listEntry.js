angular.module('movie-list')

.component('listEntry', {
  templateUrl: 'src/templates/listEntry.html',
  bindings: {
    movie: '<',
    watchToggle: '<'
  }
});