
exports.up = function (knex, Promise) {
  return knex.schema.createTable('types', function (table) {
    table.integer('movie_id')
    table.integer('genre_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('types')
}
