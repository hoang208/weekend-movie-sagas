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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#E0C1B3" }}>
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
              Movie List
            </Button>
            <Button onClick={handleAdd} color="inherit">
              Add a Movie
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
