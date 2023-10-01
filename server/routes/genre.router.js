const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { default: axios } = require('axios');

router.get('/:id', (req, res) => {
  let id=req.params['id']

  const query = `SELECT "movies"."id","title", JSON_AGG(name) as "movie_genres"
  FROM "movies_genres"
  JOIN "genres" ON "genres"."id"="movies_genres"."genre_id"
  JOIN "movies" ON "movies"."id"="movies_genres"."movie_id"
  WHERE "movies"."id" = $1
  GROUP BY "movies"."id", "title";`;
  pool.query(query, [id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;