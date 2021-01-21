"use strict"; 

let numberOfFilms;
      
function start() {
   numberOfFilms = +prompt('How many movies do you watched?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('How many movies do you watched?', '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actor: {},
   genres: [],
   privat: false,
};

function rememberMyFilms() {
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
}

function detectedPersonalLevel(showLevel) {
   if (showLevel < 10) {
      alert('Too less');
   } else if (showLevel >= 10 && showLevel <= 30) {
      alert('Not bad');
   } else if (showLevel > 30) {
      alert('You are cool');
   } else {
      alert('Error');
   }
}

function showMyDB(hidden) {
   if (!hidden){
      console.log(personalMovieDB.privat);
   }
}

function writeYourGenres(e) {
   for (let i = 1; i < 4; i++) {
      e[i - 1] = prompt(`Your favorite genre at number ${i}`);
   }
}

detectedPersonalLevel(personalMovieDB.count);
writeYourGenres(personalMovieDB.genres);
rememberMyFilms();
showMyDB();

console.log(personalMovieDB);

