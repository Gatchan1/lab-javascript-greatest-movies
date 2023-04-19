// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    return moviesArray.map((elem) => {
        return elem.director;
    })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    let moviesSteven = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg';
    });
    let moviesStevenDrama = moviesSteven.filter((movie) => {
        return movie.genre.includes("Drama");
    })
    // console.log(moviesStevenDrama.length)
    return moviesStevenDrama.length;
  }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let moviesScores = moviesArray.map((movie) => {
        return movie.score;
    });

    let moviesScoresFiltered = moviesScores.filter((score) => {
      return score;
    })
  
    let sumScore = moviesScoresFiltered.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }) 

    let averageScore = sumScore / moviesArray.length;
    //We saw with Mariona that here ^^^^^^^ we have to put moviesArray instead of moviesScoresFiltered in order for Jasmine to be happy.

/*     console.log(Math.round(averageScores * 100) /100) */
    return Math.round(averageScore * 100) /100;
    // return Number(averageScore.toFixed(2))
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama"); 
    })
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let orderedMovies = moviesArray.map((movie) => {
        return movie;
    })
  
    orderedMovies.sort((a, b) => {
        if (a.title < b.title) return -1; 
        if (a.title > b.title) return 1; 
        if (a.title === 0) return 0;
    });
  
    orderedMovies.sort((a, b) => {
        return a.year - b.year;
    });
  
    return orderedMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedMovies = moviesArray.map((movie) => {
        return movie.title;
    });
    orderedMovies.sort();
    if (orderedMovies.length > 20) orderedMovies.splice(20);
    return orderedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    let moviesMinutes = JSON.parse(JSON.stringify(moviesArray));
    moviesMinutes.forEach((movie)=>{
      let movieDuration = movie.duration;
      if (movieDuration.length == 2) {
        movieDuration = movieDuration.slice(0, 1);
        movieDuration = Number(movieDuration) * 60;
      } else if (movieDuration.length == 7) {
        movieDuration = Number(movieDuration.slice(0,1)) * 60 + Number(movieDuration.slice(3,4));
      } else if (movieDuration.length == 8) {
        movieDuration = Number(movieDuration.slice(0,1)) * 60 + Number(movieDuration.slice(3,5));
      }
      movie.duration = movieDuration;
    })
    return moviesMinutes;
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
