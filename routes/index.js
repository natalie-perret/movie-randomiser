var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.render('home')
})

router.get('/addmovie', function (req, res) {
  res.render('addmovie')
})

router.get('/movie/:id', function (req, res) {
  db.getMovie(req.params.id, req.app.get('connection'))
    .then((result) => res.render('movie', result))
})

module.exports = router
