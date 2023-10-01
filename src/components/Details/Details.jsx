import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  //Movie details
  const description = useSelector((store) => store.description);
  const title = useSelector((store) => store.title);
  const genres = useSelector((store) => store.genres);
  const poster = useSelector((store) => store.poster);

  //On load, get movide details call to database
  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS", payload: params.id });
  }, []);

 // click listener on back to list button that sends to home
 const handleBackToList = () => {
    history.push(`/`)
}


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="left"
      minHeight="100vh"
    >
<Container maxWidth="lg">
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          alt={title}
          image={poster}
          sx={{ width: 151 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Stack direction="row" spacing={1}>
              {genres.map((genre) => (
                <Chip label={genre} variant="outlined" />
              ))}
            </Stack>
            <CardActions>
              <Button size="small" onClick={handleBackToList}>Back to List</Button>
              {/* <Button size="small">Edit</Button> */}
            </CardActions>
          </Box>
        </Box>
      </Card>
    </Container>
    </Box>
  );
}
