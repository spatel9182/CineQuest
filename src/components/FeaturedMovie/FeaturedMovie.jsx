import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import "./FeaturedMovie.css"; // Import the CSS file

function FeaturedMovie({ movie }) {
  if (!movie) return null;

  return (
    <div
      component={Link}
      to={`/movie/${movie.id}`}
      className="featuredCardContainer"
      style={{
        
        backgroundColor:"transparent"
      }}
    >
      <Card className="card"
      style={{
        borderRadius: "20px",
        backgroundColor:"transparent"
      }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className="cardMedia"
          
        />
        <Box padding="20px" className="cardContentRoot">
          <CardContent className="cardContent ">
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

export default FeaturedMovie;
