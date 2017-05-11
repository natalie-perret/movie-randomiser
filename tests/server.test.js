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
    })

})

// test('GET /', (t) => {
//   return request(t.context.app)
//
// })
