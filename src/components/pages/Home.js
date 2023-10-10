import React, { useEffect, useState } from "react";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";





const Home = () => {

  // sample data
  const [data, setData] = useState(null); // Initialize the data state

  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 17 : 19;


  const apiKey = '9ac88c47d4d586add1154d12a91509f7';
  const tmdbEndpoint = 'https://api.themoviedb.org/3/trending/movie/week';

  useEffect(() => {
    // Fetch the data inside the useEffect hook
    fetch(`${tmdbEndpoint}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((fetchedData) => {
        // Update the data state with the fetched data
        setData(fetchedData);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  }, []); // Empty dependency array to fetch data on component mount
  return (
    <div className="home-container">
      <h2>Welcome to CineQuest!</h2>
      <p>Discover and explore the world of movies.</p>
      {/* Add your homepage content here */}

      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination currentPage={1} setPage={1} totalPages={data.total_pages} />
    </div>
  );
};

export default Home;
