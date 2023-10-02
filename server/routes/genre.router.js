const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const { default: axios } = require("axios");
const { Co2Sharp } = require("@mui/icons-material");

router.get("/:id", (req, res) => {
  let id = req.params["id"];

  const query = `SELECT "movies"."id","title", JSON_AGG(name) as "genres", "description", "poster"
  FROM "movies_genres"
  JOIN "genres" ON "genres"."id"="movies_genres"."genre_id"
  JOIN "movies" ON "movies"."id"="movies_genres"."movie_id"
  WHERE "movies"."id" = $1
  GROUP BY "movies"."id", "title";`;
  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

router.post("/:id", (req, res) => {
  let movie_id = req.params.id;
  let genre_id = req.body.genre_id;
  let sqlText = `
  INSERT INTO "movies_genres" ("movie_id", "genre_id")
  VALUES  ($1, $2);
  `;

  pool
    .query(sqlText, [movie_id, genre_id])
    .then((result) => {
      console.log("Update in database");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  let idToDelete = req.params.id;
  let genre = req.body.genre;
  console.log("genre before", genre);

  //Convert genre to matching id
  switch (genre) {
    case "Adventure":
      genre = 1;
      break;
    case "Animated":
      genre = 2;
      break;
    case "Biographical":
      genre = 3;
      break;
    case "Comedy":
      genre = 4;
      break;
    case "Disaster":
      genre = 5;
      break;
    case "Drama":
      genre = 6;
      break;
    case "Epic":
      genre = 7;
      break;
    case "Fantasy":
      genre = 8;
      break;
    case "Musical":
      genre = 9;
      break;
    case "Romantic":
      genre = 10;
      break;
    case "Science Fiction":
      genre = 11;
      break;
    case "Space-Opera":
      genre = 12;
      break;
    case "Superhero":
      genre = 13;
      break;
  }

  console.log("idToDelete", idToDelete);
  console.log("genre", genre);

  let sqlText = `DELETE FROM movies_genres WHERE "movie_id" = $1 AND "genre_id" = $2;`;

  console.log("sqlText", sqlText);
  pool
    .query(sqlText, [idToDelete, genre])
    .then((result) => {
      console.log("Deleted from database ");
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
