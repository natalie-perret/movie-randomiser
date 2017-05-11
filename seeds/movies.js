exports.seed = function (knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return Promise.all([
        knex('movies').insert({id: 1, title: "The Shawshank Redemption", year: 1994, blurb: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."}),
        knex('movies').insert({id: 2, title: "The Godfather", year: 1972, blurb: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."}),
        knex('movies').insert({id: 3, title: "The Godfather: Part II", year: 1974, blurb: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate."}),
        knex('movies').insert({id: 4, title: "The Dark Knight", year: 2008, blurb: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the Dark Knight must come to terms with one of the greatest psychological tests of his ability to fight injustice."}),
        knex('movies').insert({id: 5, title: "Angry Men", year: 1957, blurb: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."}),
        knex('movies').insert({id: 6, title: "Schindler's List", year: 1993, blurb: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."}),
        knex('movies').insert({id: 7, title: "Pulp Fiction", year: 1994, blurb: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."}),
        knex('movies').insert({id: 8, title: "The Lord of the Rings: The Return of the King", year: 2003, blurb: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."}),
        knex('movies').insert({id: 9, title: "The Good, the Bad and the Ugly", year: 1996, blurb: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."}),
        knex('movies').insert({id: 10, title: "Fight Club", year: 1999, blurb: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more."}),
        knex('movies').insert({id: 11, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, blurb: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron."}),
        knex('movies').insert({id: 12, title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, blurb: "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke."}),
        knex('movies').insert({id: 13, title: "Forrest Gump", year: 1994, blurb: "While not intelligent, Forrest Gump has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him."}),
        knex('movies').insert({id: 14, title: "Inception", year: 2010, blurb: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO."}),
        knex('movies').insert({id: 15, title: "Lord of the Rings: The Two Towers", year: 2002, blurb: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."}),
        knex('movies').insert({id: 16, title: "One Flew Over the Cuckoo's Nest", year: 1975, blurb: "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients."}),
        knex('movies').insert({id: 17, title: "Goodfellas", year: 1990, blurb: "The story of Henry Hill and his life through the teen years into the years of mafia, covering his relationship with wife Karen Hill and his Mob partners Jimmy Conway and Tommy DeVitto in the Italian-American crime syndicate."}),
        knex('movies').insert({id: 18, title: "The Matrix", year: 1999, blurb: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."}),
        knex('movies').insert({id: 19, title: "Seven Samurai", year: 1954, blurb: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves."}),
        knex('movies').insert({id: 20, title: "Star Wars: Episode IV - A New Hope", year: 1977, blurb: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader."})
      ]);
    });
};
