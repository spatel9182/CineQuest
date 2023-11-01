import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

function Movie({ movie, i }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center", // Center content horizontally
      }}
    >
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link
          style={{
            alignItems: "center",
            fontWeight: "bolder",
            textDecoration: "none",
            display: "flex", // Center content horizontally
            flexDirection: "column", // Center content vertically
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          to={`/movie/${movie.id}`}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://powderalloy.com/wp-content/uploads/2015/11/sidebar-placeholder.png"
            }
            alt={movie.title}
            style={{
              borderRadius: "20px",
              height: "300px",
              marginBottom: "10px",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
          <Typography
            style={{
              color: "white",
              textOverflow: "ellipsis",
              width: "230px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              marginTop: "10px",
              marginBottom: 0,
            }}
            variant="h5"
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
