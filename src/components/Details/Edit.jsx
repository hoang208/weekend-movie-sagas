import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Edit() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  //Movie details
  const description = useSelector((store) => store.description);
  const title = useSelector((store) => store.title);

  //On load, get movide details call to database
  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS", payload: params.id });
  }, []);

  //Data to send
  let [movieToUpdate, setMovieToUpdate] = useState({
    title: title,
    description: description,
    id: params.id,
  });

  //Event listeners on inputs
  const handleTitleChange = (event) => {
    setMovieToUpdate({ ...movieToUpdate, title: event.target.value });
  };
  const handleDescriptionChange = (event) => {
    setMovieToUpdate({ ...movieToUpdate, description: event.target.value });
  };

  //Submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_MOVIE",
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
          Edit movie
        </Typography>
        <Grid container spacing={2} sx={{ border: 1, borderRadius: "16px" }}>
          <Grid container item xs={6} direction="column">
            <TextField
              required
              id="outlined-required"
              label="Movie Title"
              variant="filled"
              defaultValue={title}
              onChange={handleTitleChange}
            />
          </Grid>
          <Grid container item xs={6} direction="column">
            <TextField
              required
              id="description"
              label="Movie Description"
              multiline
              rows={4}
              variant="filled"
              defaultValue={description}
              onChange={handleDescriptionChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="outlined"
          size="large"
          color="success"
          sx={{ m: 2 }}
        >
          Update
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
