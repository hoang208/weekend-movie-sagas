const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {

    const query = `SELECT "genres"."name", count(*)
    FROM "movies_genres"
    JOIN "genres" ON "genres"."id"="movies_genres"."genre_id"
    JOIN "movies" ON "movies"."id"="movies_genres"."movie_id"
    GROUP BY "genres"."name";`;
    pool
      .query(query)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: Get all movies", err);
        res.sendStatus(500);
      });
  });

  module.exports = router;