const numberOfFilms = +prompt('How many movies do you watched?', '5'),
      lastMovies    = prompt('What is last watched movies?', 'Avangers'),
      rateMovies    = +prompt('Rate?', '10'),
      lastMovies1   = prompt('What is last watched movies?', 'Avangers'),
      rateMovies1   = +prompt('Rate?', '10');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actor: {},
   genres: [],
   privat: false,
};

personalMovieDB.movies[lastMovies] = rateMovies;
personalMovieDB.movies[lastMovies1] = rateMovies1;

console.log(personalMovieDB);

