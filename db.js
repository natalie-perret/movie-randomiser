


function allGenres (connection) {
  return connection('genres').select('name')
}

function getMovie (id, connection) {
  return connection('movies').select()
    .where('id', id)
    .first()
}

function getMovieGenres (movieId, connection) {
  return connection('genres')
  .join()
}

module.exports = {
  allGenres: allGenres,
  getMovie: getMovie,
  getMovieGenres: getMovieGenres
}
