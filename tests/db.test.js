// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.
//
 var test = require('ava')
//
var configureDatabase = require('./helpers/database-config')
configureDatabase(test)
//
var db = require('../db')
//
test('allGenres gets all genres', function (t) {
   var expected = 14
   return db.allGenres(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getMovie returns a single movie', function (t) {
  var expected = 'Pulp Fiction'
  return db.getMovie(7, t.context.connection)
    .then(function (result) {
      var actual = result.title
      t.is(expected, actual)
    })
})

// test('getMovieGenres returns all movies ', function (t) {
//   var expected = ''
//   return db.getUser(, t.context.connection)
//     .then(function (result) {
//       var actual = result[0].name
//       t.is(expected, actual)
//     })
// })
