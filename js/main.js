"use strict"; 

document.addEventListener('DOMContentLoaded', () => {
    // const personalMovieDB = {
    //    count: 0,
    //    movies: {},
    //    actor: {},
    //    genres: [],
    //    privat: false,
    //    start: function () {
    //       this.count = +prompt('How many movies do you watched?', '');

    //       while (this.count == '' || this.count == null || isNaN(this.count)) {
    //          this.count = +prompt('How many movies do you watched?', '');
    //       }
    //    },
    //    writeYourGenres: function () {
    //       for (let i = 1; i < 4; i++) {
    //          let genre = prompt(`Your favorite genre at number ${i}`);
    //          if (genre == '' || genre == null) {
    //             console.log('no');
    //             i--;
    //          } else {
    //             personalMovieDB.genres[i - 1] = genre;
    //          }
    //       }
    //       personalMovieDB.genres.forEach((item, i) => {
    //          console.log(`Favorite genre ${i + 1} is ${item}`);
    //       });
    //    },
    //    showMyDB: function (hidden) {
    //       if (!hidden){
    //          console.log(personalMovieDB.privat);
    //       }
    //    },
    //    detectedPersonalLevel: function (showLevel) {
    //       if (showLevel < 10) {
    //          alert('Too less');
    //       } else if (showLevel >= 10 && showLevel <= 30) {
    //          alert('Not bad');
    //       } else if (showLevel > 30) {
    //          alert('You are cool');
    //       } else {
    //          alert('Error');
    //       }
    //    },
    //    rememberMyFilms: function () {
    //       for (let i = 0; i < 2; i++) {
    //          const lastMovies    = prompt('What is last watched movies?', 'Avangers'),
    //                rateMovies    = +prompt('Rate?', '10');

    //          if (lastMovies != null && 
    //             rateMovies  != null && 
    //             lastMovies  != ''   && 
    //             rateMovies  != ''   && 
    //             lastMovies.length < 30) 
    //          {
    //             console.log('done');
    //             personalMovieDB.movies[lastMovies] = rateMovies;
    //          } else {
    //             console.log('err');
    //             i--;
    //          } 
    //       }
    //    },
    //    toggleVisibleMyDB: function () {
    //       if (personalMovieDB.privat) {
    //          personalMovieDB.privat = false;
    //       } else {
    //          personalMovieDB.privat = true;
    //       }
    //    },
    // };

    // personalMovieDB.detectedPersonalLevel(personalMovieDB.count);
    // personalMovieDB.writeYourGenres(personalMovieDB.genres);
    // personalMovieDB.rememberMyFilms();
    // personalMovieDB.showMyDB();

    // console.log(personalMovieDB);

    // =============================================================

    const promoAdv   = document.querySelectorAll('.promo__adv img'),
        poster     = document.querySelector('.promo__bg'),
        genre      = poster.querySelector('.promo__genre'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm    = document.querySelector('form.add'),
        addInput   = addForm.querySelector('.adding__input'),
        checkBox   = addForm.querySelector('[type="checkbox"]');
        
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm    = addInput.value;
        const favorite = checkBox.checked;

        if (favorite) {
            console.log(newFilm);
        }

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, moviesList); 
        }

        e.target.reset();
    });

    const deleteAdv = (arg) => {
        arg.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach( (film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach( (btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent); 
            });
        });
    }

    deleteAdv(promoAdv);
    makeChanges();
    createMovieList(movieDB.movies, moviesList);
});

