angular.module('movie-list')

.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function($scope) {
    this.movies = movies;
    this.searchText = this.searchText || '';
    this.watchedMovie = this.watchedMovie || '';
    this.search = input => {
      console.log(input);
    }
    this.watched = () => {
      this.watchedMovie = true;
    }
    this.toWatch = () => {
      this.watchedMovie = false;
    }
    this.clearFilter = () => {
      console.log('clear');
      this.watchedMovie = '';
    }
    this.movieObj = input => {
      return {
        title: input,
        watched: false
      }
    }
    this.addMovie = input => {
      this.movies.push(this.movieObj(input));
    }
    this.watchToggle = (movie) => {
      // toggle class on span tag //
      console.log('click works');
      if (!movie.watched) {
        movie.watched = true;
      } else {
        movie.watched = false;
      }
    }
  }
});
