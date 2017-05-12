var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.render('home')
})

router.get('/addmovie', function (req, res) {
  // db.allGenres(req.params.id, req.app.get('connection'))
  //   .then((genres) => console.log(genres))
  //   // .then((genres) => res.render('addmovie', genres))
  res.render("addmovie")
})

router.post('/addmovie', (req, res) => {
  if (req.body.random) {
    db.addRandom()
    res.render("addmovie")
  } else if (req.body.search) {
    db.searchMovies(req.body.search)
      .then((page) => {
          page["results"].forEach((movie) => {
          movie["release_date"] = movie["release_date"].slice(0, 4)
        })
        res.render("addmovie", page)
      })
      .catch(console.log)
  } else if (req.body.addtitle) {
    db.addTitle(req.body.addtitle, req.app.get('connection'))
      .then(() => {
        res.render("addmovie")
      })
  }
})

router.get('/movie/:id', function (req, res) {
  db.getMovie(req.params.id, req.app.get('connection'))
    .then((movie) => {
      db.getMovieGenres(req.params.id, req.app.get('connection'))
      .then((genres) => res.render('movie', {movie, genres}))
    })
  })

module.exports = router
