import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button, Stack, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const history = useHistory();

  //click listener to direct to home
  const handleHome = () => {
    history.push("/");
  };

  //click listener to direct to movie list
  const handleMovieList = () => {
    history.push("/movies");
  };

  //click listener to direct to movie form
  const handleAdd = () => {
    history.push("/form");
  };

   //click listener to direct to stats
   const handleStats = () => {
    history.push("/stats");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1 }}
            textAlign={"left"}
            gutterBottom
          >
            The Movies Saga!
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleHome} color="inherit">
              Home
            </Button>
            <Button onClick={handleMovieList} color="inherit">
              Movie Collection
            </Button>
            <Button onClick={handleAdd} color="inherit">
              Add a Movie
            </Button>
            <Button onClick={handleStats} color="inherit">
              Stats
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
