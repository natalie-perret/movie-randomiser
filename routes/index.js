var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.render('home')
})

router.get('/addmovie', function (req, res) {
  db.allGenres(req.params.id, req.app.get('connection'))
    .then((genres) => console.log(genres))
    // .then((genres) => res.render('addmovie', genres))
})

router.get('/movie/:id', function (req, res) {
  db.getMovie(req.params.id, req.app.get('connection'))
    .then((movie) => {
      db.getMovieGenres(req.params.id, req.app.get('connection'))
      .then((genres) => res.render('movie', {movie, genres}))
    })
  })

module.exports = router
