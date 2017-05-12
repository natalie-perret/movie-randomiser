
var movieDb = require('moviedb')('5d6500fd40637e64552fe0ce86c7e9ca')

function allGenres (connection) {
  return connection('genres').select(name)
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


function addRandom(connection) {
  getLatestMovie()
    .then(findById)
    .then((result) => {
      connection('movies')
        .insert({
          title: result.original_title,
          year: result.release_date.slice(0,4) || "No release date data",
          blurb: result.overview || "No description data"
        })
        .then((movieid) => {
          connection('types')
            .insert({
              movie_id: movieid,
              genre_id: 15
            })
        })
        .then((result) => {
          console.log(result)
        })
    })
    .catch(console.log)
}

function allGenres(connection) {
  return connection('genres').select('name')
}

function getLatestMovie() {
  return new Promise((resolve, reject) => {
    movieDb.miscLatestMovies((err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}


function findById(result) {
  let randId = Math.floor(Math.random() * result.id) + 1
  return new Promise((resolve, reject) => {
    movieDb.movieInfo({id: randId}, (err, res) => {
      if (err) {
        if (err.response.body.status_code != 34) { reject(err) }
        resolve(findById(result))
      }
      resolve(res)
    })
  })
}

function getMovieGenres (movieId, connection) {
  return connection('genres')
    .join('types', 'genre_id', '=', 'genres.id')
    .where('movie_id', movieId)
}

function searchMovies(keyword) {
  return new Promise((resolve, reject) => {
    movieDb.searchMovie({query: keyword}, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(result)
      }
  })
})
}

function addTitle(movie_id, connection) {
  return new Promise((resolve, reject) => {
    movieDb.movieInfo({id: movie_id}, (err, res) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      connection('movies')
        .insert({
          title: res.original_title,
          year: res.release_date.slice(0,4) || "No release date data",
          blurb: res.overview || "No description data"
        })
        .then((movieid) => {
          return connection('types')
            .insert({
              movie_id: movieid,
              genre_id: 15
            })
        })
        .then((result) => {
          resolve(res)
        })
    })
  })
}

module.exports = {
  searchMovies,
  addRandom,
  addTitle,
  allGenres,
  getMovie,
  getMovieGenres
}
