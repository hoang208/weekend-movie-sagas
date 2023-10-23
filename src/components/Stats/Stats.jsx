import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Stats() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);
  const genres = count.map((movie) => movie.name);
  const countPerGenres = count.map((movie) => parseInt(movie.count));
  console.log("genres", genres);

  useEffect(() => {
    dispatch({ type: "FETCH_COUNT" });
  }, []);

  const data = {
    labels: genres,
    datasets: [
      {
        label: "Count",
        data: countPerGenres,
        backgroundColor: [
          "rgba(255, 0, 0, 0.6)",
          "rgba(0, 0, 255, 0.6)",
          "rgba(0, 255, 0, 0.6)",
          "rgba(255, 255, 0, 0.6)",
          "rgba(0, 255, 255, 0.6)",
          "rgba(255, 0, 255, 0.6)",
          "rgba(255, 127, 255, 0.6)",
          "rgba(122, 0, 255, 0.6)",
          "rgba(0, 122, 0, 0.6)",
          "rgba(0, 0, 122, 0.6)",
          "rgba(122, 0, 0, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log("data", data);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <Container>
        <Typography sx={{ m: 2 }} variant="h4" align="center" component="div">
          Genre Count
        </Typography>
        <Bar
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Genre Count",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </Container>
    </Box>
  );
}
