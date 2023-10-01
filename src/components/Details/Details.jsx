import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Details () {
    const dispatch = useDispatch();
    const params = useParams();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres)
    console.log(genres)
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: params.id });
    }, []);

    return(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
      >
        <Container maxWidth="sm">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Any comments you want to leave?
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    )
}