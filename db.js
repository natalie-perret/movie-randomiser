


function allGenres (connection) {
  return connection('genres')
  .select('name')
}

function allMovies (connection) {
  return connection('movies')
}

function getMovie (id, connection) {
  return connection('movies').select()
    .where('id', id)
    .first()
}

function genreId (name, connection) {
  return connection('genres').select('id')
    .where('name', name)
    .first()
}

function getMovieGenres (movieId, connection) {
  return connection('genres')
    .join('types', 'genre_id', '=', 'genres.id')
    .where('movie_id', movieId)
}

function getGenreMovies (genreId, connection) {
  return connection('movies')
    .join('types', 'movie_id', '=', 'movies.id')
    .where('genre_id', genreId)
}

module.exports = {
  allGenres: allGenres,
  allMovies: allMovies,
  getMovie: getMovie,
  genreId: genreId,
  getMovieGenres: getMovieGenres,
  getGenreMovies: getGenreMovies
}
