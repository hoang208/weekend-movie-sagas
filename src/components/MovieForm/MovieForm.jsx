import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieForm() {
  const dispatch = useDispatch();
  const history = useHistory();
 
  //Data to send
  let [movieToAdd, setMovieToAdd] = useState({
    title: "",
    poster: "",
    description: "",
    genre_id: 0,
  });


  //Event listeners on inputs
  const handleTitleChange = (event) => {
    setMovieToAdd({ ...movieToAdd, title: event.target.value });
  };
  const handlePosterChange = (event) => {
    setMovieToAdd({ ...movieToAdd, poster: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setMovieToAdd({ ...movieToAdd, description: event.target.value });
  };

  const handleGenreChange = (event) => {
    setMovieToAdd({ ...movieToAdd, genre_id: event.target.value });
  };


  //Dropdown
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

  //Submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_MOVIE",
      payload: movieToAdd
    });
    history.push('/form/success')
  };

  //Cancel button
  const handleBack = () => {
    history.push('/')
  }

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
        <form onSubmit={handleSubmit}>
      <Container maxWidth="sm" sx={{ p: 3 }}>
        <Typography sx={{ m: 2 }} variant="h4" align="center" component="div">
          Add a movie!
        </Typography>
        <Grid container spacing={2} sx={{ border: 1, borderRadius: "16px" }}>
          <Grid container item xs={6} direction="column">
            <TextField
              required
              id="outlined-required"
              label="Movie Title"
              variant="outlined"
              onChange={handleTitleChange}
              value={movieToAdd.title}
            />
            <TextField
              required
              id="outlined-required"
              label="Movie Poster Link"
              variant="outlined"
              onChange={handlePosterChange}
              value={movieToAdd.poster}
            />
          </Grid>
          <Grid container item xs={6} direction="column">
            <TextField
              required
              id="description"
              label="Movie Description"
              multiline
              rows={4}
              variant="outlined"
              onChange={handleDescriptionChange}
              value={movieToAdd.description}
            />
            <TextField id="genre-select" select label="Genre"   defaultValue= '1' onChange={handleGenreChange}>
              {genres.map((genre) => (
                <MenuItem key={genre.value} value={genre.value} >
                  {genre.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
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
