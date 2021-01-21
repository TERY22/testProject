"use strict"; 

const numberOfFilms = +prompt('How many movies do you watched?', '5');
      
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actor: {},
   genres: [],
   privat: false,
};

if (personalMovieDB.count < 10) {
   alert('Too less');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
   alert('Not bad');
} else if (personalMovieDB.count > 30) {
   alert('You are cool');
} else {
   alert('Error');
}

for (let i = 0; i < 2; i++) {
   const lastMovies    = prompt('What is last watched movies?', 'Avangers'),
         rateMovies    = +prompt('Rate?', '10');

   if (lastMovies != null && 
      rateMovies  != null && 
      lastMovies  != ''   && 
      rateMovies  != ''   && 
      lastMovies.length < 30) 
   {
      console.log('done');
      personalMovieDB.movies[lastMovies] = rateMovies;
   } else {
      console.log('err');
      i--;
   } 
}



console.log(personalMovieDB);

