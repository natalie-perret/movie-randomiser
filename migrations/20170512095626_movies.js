
exports.up = function (knex, Promise) {
  return knex.schema.createTable('movies', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('year')
    table.text('blurb')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('movies')
}
