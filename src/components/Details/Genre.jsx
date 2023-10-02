import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Genre() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const movieGenres = useSelector((store) => store.genres);

  //On load, get movide details call to database
  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS", payload: params.id });
  }, []);

  //Data to send
  let [movieToUpdate, setMovieToUpdate] = useState({
    genre_id: 1,
    id: params.id,
  });

  //Event listeners on inputs
  const handleGenreChange = (event) => {
    setMovieToUpdate({ ...movieToUpdate, genre_id: event.target.value });
  };

  const genres = [
    {
      name: "Adventure",
      value: 1,
    },
    {
      name: "Animated",
      value: 2,
    },
    {
      name: "Biographical",
      value: 3,
    },
    {
      name: "Comedy",
      value: 4,
    },
    {
      name: "Disaster",
      value: 5,
    },
    {
      name: "Drama",
      value: 6,
    },
    {
      name: "Epic",
      value: 7,
    },
    {
      name: "Fantasy",
      value: 8,
    },
    {
      name: "Musical",
      value: 9,
    },
    {
      name: "Romantic",
      value: 10,
    },
    {
      name: "Science Fiction",
      value: 11,
    },
    {
      name: "Space-Opera",
      value: 12,
    },
    {
      name: "Superhero",
      value: 13,
    },
  ];

  //Filtered list to avoid duplicate genres
  const genreFiltered = genres.filter((el) => {
    return movieGenres.every((f) => {
      return f !== el.name;
    });
  });

  //Submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_GENRE",
      payload: movieToUpdate,
    });
    history.push(`/details/${params.id}/edit/success`);
  };

  //Cancel button
  const handleBack = () => {
    history.push(`/details/${params.id}`);
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
             <form onSubmit={handleSubmit}>
      <Container maxWidth="sm" sx={{ p: 3 }}>
        <Typography sx={{ m: 2 }} variant="h4" align="center" component="div">
          Edit Genre
        </Typography>
        <TextField
          id="genre-select"
          select
          label="Genre"
          defaultValue="1"
          onChange={handleGenreChange}
        >
          {genreFiltered.map((genre) => (
            <MenuItem key={genre.value} value={genre.value}>
              {genre.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="outlined"
          size="large"
          color="success"
          sx={{ m: 2 }}

        >
          Add
        </Button>
        <Button
          type="submit"
          variant="outlined"
          size="large"
          color="error"
          sx={{ m: 2 }}
          onClick={handleBack}
        >
          Cancel
        </Button>
      </Container>
      </form>
    </Box>
  );
}
