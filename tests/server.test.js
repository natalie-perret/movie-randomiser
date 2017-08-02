var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('Check if homepage loads', (t) => {
  request(t.context.app)
  .get('/')
  .expect(200)
  .end((err, res) => {
    if (!err) t.pass()
  })
})

test('Check if the title is displayed correctly', (t) => {
  request(t.context.app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      t.is($('h1').first().text(), 'The Undecideds')
      if(!err) t.pass()
    })
})

test('Check if we can find a movie by ID', (t) => {
  request(t.context.app)
    .get('/movie/4')
    .expect(200)
    .end((err, res) => {
      t.true(res.text.indexOf('The Dark Knight') > -1)
      if(!err) t.pass()
    })
})

test('Check if user can add their own movies', (t) => {
  request(t.context.app)
    .post('/addmovie')
    .send({name:'The Intouchables', genre: 'drama', id: 21})
    .expect(302)
    .then((res) => {
      return t.context.connection('movies').select()
      t.is(movies.length, 21)
  })
})
