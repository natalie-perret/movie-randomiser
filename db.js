


function allGenres (connection) 
  return connection('genres').select('name')

}

function getMovie (id, connection) {
  return connection('movies').select()
    .where('id', id)
    .first()
}

function getMovieGenres (movieId, connection) {
  return connection('genres')
    .join('types', 'genre_id', '=', 'genres.id')
    .where('movie_id', movieId)
}

module.exports = {
  allGenres: allGenres,
  getMovie: getMovie,
  getMovieGenres: getMovieGenres
}
