var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.allGenres(req.app.get('connection'))
    .then((genres) => res.render('home', {genres}))
})

router.get('/addmovie', function (req, res) {
  db.allGenres(req.app.get('connection'))
    .then((genres) => res.render('addmovie', {genres}))

})

router.get('/movie/:id', function (req, res) {
  db.getMovie(req.params.id, req.app.get('connection'))
    .then((movie) => {
      db.getMovieGenres(req.params.id, req.app.get('connection'))
      .then((genres) => {
        res.render('movie', {movie, genres})
      })

    })
})


router.post('/random', function (req, res){
  var genre = req.body.genre
  db.genreId(genre, req.app.get('connection'))
    .then((id) => {
    console.log(id)
     db.allMovies(req.app.get('connection'))
      .then((movies) => {
        if(genre != 'All genres'){

        }
      })
    })

  console.log(genre);
})

module.exports = router
