import React from "react";
import { Grid } from "@mui/material";
import Movie from "../Movie/Movie";
import "./MovieList.css";

function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "auto",
        flexWrap: "wrap",
      }}
    >
      {movies &&
        movies
          .slice(startFrom, numberOfMovies)
          .map((movie, i) => <Movie key={i} movie={movie} i={i} />)}
    </Grid>
  );
}

export default MovieList;
