angular.module('movie-list')

.component('app', {
  templateUrl: 'client/src/templates/app.html',

  controller: function($scope, $http) {
    this.movies = [];
    this.searchText = this.searchText || '';
    this.watchedMovie = this.watchedMovie || '';
    this.search = (input) => {
      console.log(input);
    }
    this.watched = () => {
      this.watchedMovie = true;
    }
    this.toWatch = () => {
      this.watchedMovie = false;
    }
    this.movieObj = movie => {
      return {
        title: movie.show_title,
        description: {
          year: movie.release_year,
          minutes: movie.runtime,
          imdbRating: movie.rating,
          image: movie.poster
        },
        watched: false
      }
    }
    this.addMovie = input => {
      $http.get('http://netflixroulette.net/api/api.php?title=' + input).then((response) => {
        this.movies.push(this.movieObj(response.data));
      });
    }
    this.watchToggle = (movie) => {
      // toggle class on span tag //
      console.log('watched Toggle: ', movie);
      if (!movie.watched) {
        movie.watched = true;
      } else {
        movie.watched = false;
      }
    }
  }
});
