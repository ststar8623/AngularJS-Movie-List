angular.module('movie-list')

.component('search', {
  templateUrl: 'client/src/templates/search.html',
  bindings: {
    search: '<',
    searchText: '='
  }
});