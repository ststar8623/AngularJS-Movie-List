angular.module('movie-list')

.component('listEntry', {
  templateUrl: 'client/src/templates/listEntry.html',
  bindings: {
    movie: '<',
    watchToggle: '<'
  }
});