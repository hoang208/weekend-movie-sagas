import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";
import { ImageList} from "@mui/material";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <ImageList cols={4} gap={20}>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
          />
        ))}
      </ImageList>
    </main>
  );
}

export default MovieList;
