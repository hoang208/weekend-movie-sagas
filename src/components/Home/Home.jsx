import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const history = useHistory();

  //click listener to direct to movie list
  const handleMovieList = () => {
    history.push("/movies");
  };

  //click listener to direct to movie form
  const handleAdd = () => {
    history.push("/form");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        sx={{ lineHeight: 2 }}
      >
        <Container maxWidth="sm">
          <Card variant="outlined">
            <CardContent>
              <Typography
                variant="h3"
                align="center"
                style={{ wordWrap: "break-word" }}
                component="div"
              >
                Welcome!
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ wordWrap: "break-word" }}
              >
                Make your very own movie collection! Add any movie you want to
                your collection. The collection can be viewed at any time with
                details such as movie descriptions and genres!
              </Typography>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  onClick={handleMovieList}
                >
                  Look at my collection
                </Button>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  color="success"
                  onClick={handleAdd}
                >
                  Add a Movie
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
