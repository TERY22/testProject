"use strict"; 

const personalMovieDB = {
   count: 0,
   movies: {},
   actor: {},
   genres: [],
   privat: false,
   start: function () {
      this.count = +prompt('How many movies do you watched?', '');

      while (this.count == '' || this.count == null || isNaN(this.count)) {
         this.count = +prompt('How many movies do you watched?', '');
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i < 4; i++) {
         let genre = prompt(`Your favorite genre at number ${i}`);
         if (genre == '' || genre == null) {
            console.log('no');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Favorite genre ${i + 1} is ${item}`);
      });
   },
   showMyDB: function (hidden) {
      if (!hidden){
         console.log(personalMovieDB.privat);
      }
   },
   detectedPersonalLevel: function (showLevel) {
      if (showLevel < 10) {
         alert('Too less');
      } else if (showLevel >= 10 && showLevel <= 30) {
         alert('Not bad');
      } else if (showLevel > 30) {
         alert('You are cool');
      } else {
         alert('Error');
      }
   },
   rememberMyFilms: function () {
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
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
};

// personalMovieDB.detectedPersonalLevel(personalMovieDB.count);
// personalMovieDB.writeYourGenres(personalMovieDB.genres);
// personalMovieDB.rememberMyFilms();
// personalMovieDB.showMyDB();

console.log(personalMovieDB);

