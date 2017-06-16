angular.module('movie-list')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    search: '<',
    searchText: '='
  }
});