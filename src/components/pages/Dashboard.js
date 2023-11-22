import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Button,
  TextField,
  Avatar,
  Divider,
} from "@mui/material";
import MovieList from "../MovieList/MovieList";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

// Dashboard Component
const Dashboard = () => {
  const navigate = useNavigate();

  // Sample data
  const [data, setData] = useState(null); // Initialize the data state

  const apiKey = "9ac88c47d4d586add1154d12a91509f7";
  const tmdbEndpoint = "https://api.themoviedb.org/3/trending/movie/week";

  useEffect(() => {
    // Check if the user is logged in
    const token = getCookie("userToken");

    if (!token) {
      // If the user is not logged in, redirect to the login page
      navigate("/login");
    }

    // Fetch the data inside the useEffect hook if the user is authenticated
    console.log("useEffect");
    fetch(`${tmdbEndpoint}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
        console.error("Error:", error);
      });
  }, [navigate]); // Add navigate to the dependency array

  // Function to get a cookie by name
  const getCookie = (name) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  return (
    <Container maxWidth="lg" id="DashboardContainer">
      <Typography variant="h4" gutterBottom>
        Movie App Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your movie app dashboard. Here, you can manage your
        playlists, change your password, edit your profile, and update your
        profile photo.
      </Typography>

      {/* Section: My Playlists */}
      <Paper elevation={3} mt={3} sx={{ backgroundColor: "#100f12" }}>
        <Box p={2}>
          <Typography variant="h6">My Playlists</Typography>
          <MovieList movies={data} numberOfMovies={5} excludeFirst />
        </Box>
      </Paper>
      <Divider
        style={{
          color: "white",
          border: "1px solid #444444",
        }}
      />
      {/* Section: Change Password */}
      <Paper elevation={3} mt={3} sx={{ backgroundColor: "#100f12" }}>
        <Box p={2} className="DashboardForm">
          <Typography variant="h6">Change Password</Typography>
          <TextField
            label="Current Password"
            type="password"
            fullWidth
            mt={2}
          />
          <TextField label="New Password" type="password" fullWidth mt={2} />
          <TextField
            label="Confirm New Password"
            type="password"
            fullWidth
            mt={2}
          />
          <Button variant="contained" color="primary" fullWidth mt={2}>
            Change Password
          </Button>
        </Box>
      </Paper>
      <Divider
        style={{
          color: "white",
          border: "1px solid #444444",
        }}
      />
      {/* Section: Edit Profile */}
      <Paper elevation={3} mt={3} sx={{ backgroundColor: "#100f12" }}>
        <Box p={2} className="DashboardForm">
          <Typography variant="h6">Edit Profile</Typography>
          <TextField label="Full Name" fullWidth mt={2} />
          <TextField label="Email" fullWidth mt={2} />
          <TextField label="Username" fullWidth mt={2} />
          <Button variant="contained" color="primary" fullWidth mt={2}>
            Save Changes
          </Button>
        </Box>
      </Paper>
      <Divider
        style={{
          color: "white",
          border: "1px solid #444444",
        }}
      />
      {/* Section: User Data */}
      <Paper elevation={3} mt={3} sx={{ backgroundColor: "#100f12" }}>
        <Box p={2} className="DashboardForm">
          <Typography variant="h6">User Data</Typography>
          <Avatar
            alt="Your Profile Photo"
            src="./images/your-profile-photo.jpg"
            sx={{ width: 150, height: 150, mt: 2 }}
          />
          <Typography variant="body1">
            Full Name: {sessionStorage.getItem("fullName") || "N/A"}
          </Typography>
          <Typography variant="body1">
            Email: {sessionStorage.getItem("email") || "N/A"}
          </Typography>
          <Typography variant="body1">
            Username: {sessionStorage.getItem("username") || "N/A"}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;
