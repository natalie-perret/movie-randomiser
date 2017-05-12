exports.seed = function (knex, Promise) {
  return knex('genres').del()
    .then(function () {
      return Promise.all([
        knex('genres').insert({id: 1, name: "Action"}),
        knex('genres').insert({id: 2, name: "Adventure"}),
        knex('genres').insert({id: 3, name: "Comedy"}),
        knex('genres').insert({id: 4, name: "Crime"}),
        knex('genres').insert({id: 5, name: "Drama"}),
        knex('genres').insert({id: 6, name: "Fantasy"}),
        knex('genres').insert({id: 7, name: "Horror"}),
        knex('genres').insert({id: 8, name: "Science fiction"}),
        knex('genres').insert({id: 9, name: "Thriller"}),
        knex('genres').insert({id: 10, name: "Western"}),
        knex('genres').insert({id: 11, name: "Biography"}),
        knex('genres').insert({id: 12, name: "History"}),
        knex('genres').insert({id: 13, name: "Animation"}),
        knex('genres').insert({id: 14, name: "Romance"}),
        knex('genres').insert({id: 15, name: "No genre data"})
      ]);
    });
};
