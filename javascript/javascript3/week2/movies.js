const fetchMovies = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
);

fetchMovies
  .then((response) => response.json())
  .then((movies) => {
    //console.log(movies);

    const badMovies = movies.filter((movies) => movies.rating < 7);
    const badMoviesSince2000 = movies.filter(
      (movies) => movies.rating < 7 && movies.year >= 2000
    );

    //console.log(badMovies);
    //console.log(badMoviesSince2000);
  });
