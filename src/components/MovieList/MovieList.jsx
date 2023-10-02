import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "./MovieItem";
import { ImageList, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const [searchText, setSearchText] = useState("");

  let searchHandler = (event) => {
    //convert search text to lower case
    const lowerCase = event.target.value.toLowerCase();
    setSearchText(lowerCase);
  };

  const filteredMovies = movies.filter((movie) => {
    //if no search then return the original
    if (searchText === '') {
        return movie;
    }
    //return item which contains search
    else {
        return movie && movie.title && movie.title.toLowerCase().includes(searchText)
    }
})


  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <TextField
        fullWidth
        label="Search"
        type="search"
        variant="filled"
        sx={{m:2}}
        onChange={searchHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <ImageList cols={5} gap={20}>
        {filteredMovies.slice(0, 10).map((movie) => (
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
