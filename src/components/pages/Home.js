import React, { useEffect, useState } from "react";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import { Box, CircularProgress, useMediaQuery, Typography, Divider } from '@mui/material';
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";





const Home = () => {

  // sample data
  const [data, setData] = useState(null); // Initialize the data state




  const apiKey = '9ac88c47d4d586add1154d12a91509f7';
  const tmdbEndpoint = 'https://api.themoviedb.org/3/trending/movie/week';

  useEffect(() => {
    // Fetch the data inside the useEffect hook
    console.log("useEffect");
    fetch(`${tmdbEndpoint}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((fetchedData) => {
        // Update the data state with the fetched data
        console.log(fetchedData);
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
      <br />
      <br />


      {data ? (
        <>
          <FeaturedMovie movie={data.results[0]} />
          <br />

          <MovieList movies={data} numberOfMovies={17} excludeFirst />
          <Pagination currentPage={1} setPage={1} totalPages={data.total_pages} />
        </>
      ) : (
        <div>Loading...</div>
      )}


    </div>
  );
};

export default Home;
