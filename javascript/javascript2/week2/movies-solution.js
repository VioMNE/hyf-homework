console.log(movies);
// movies with a short title

const shortMovieTitle = movies.filter((movie) => movie.title.length <= 3);
console.log(shortMovieTitle); /// output 59

//  long movie titles

const longMoviesTitle = movies.filter((movie) => movie.title.length > 10);
console.log(longMoviesTitle); /// output 4395

// number of movies made between, and 1980-1989
const yearOfTheMovie = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(yearOfTheMovie); /// output 638

//extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const movieTag = movies.map((movie) => {
  if (movie.rating >= 7) {
    return " rating: Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    return " rating: Average";
  } else {
    return " rating: Bad";
  }
  return movie;
});

console.log(movieTag);

// Using chaining filter rating over 6, and map only ratings of movies

const moviesRatedOverSix = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(moviesRatedOverSix); // output 4904

/// keywords: Surfer, Alien or Benjami

const moviesWithKeyWords = movies.filter(
  (movie) =>
    movie.title.toLowerCase().includes("sufer") ||
    movie.title.toLowerCase().includes("alien") ||
    movie.title.toLowerCase().includes("benjami")
).length;
console.log(moviesWithKeyWords); // output 17

/// movies where a word in the title is duplicated

const duplicateWords = movies.filter((movie) => {
    let titleWords = movie.title.toLowerCase().split(' ');
    for (let i = 0, count = 1; i < titleWords.length; i++) {
      for (let j = i + 1; j < titleWords.length; j++) {
        if (titleWords[i] === titleWords[j]) {
          count++;
          titleWords[j] = '0';
        }
      }
      if (count > 1 && titleWords[i] != '0') return movie;
    }
  });
  console.log(duplicateWords); //output 204