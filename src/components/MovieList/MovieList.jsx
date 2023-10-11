import React from "react";
import { Grid } from "@mui/material";


import Movie from "../Movie/Movie";

function MovieList({ movies, numberOfMovies, excludeFirst }) {
 
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "space-between",
        overflow: "auto",
        flexWrap: "wrap",
      }}
    >
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
