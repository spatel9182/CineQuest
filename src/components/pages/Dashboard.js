import React from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";


const Dashboard = () => {
  return (
    <Container maxWidth="100%">
      <Typography variant="h4" gutterBottom>
        Movie App Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your movie app dashboard.
      </Typography>

      {/* Section: My Playlists */}
      <Paper elevation={3} mt={3} className="paper">
        <Box p={2}>
          <Typography variant="h6">My Playlists</Typography>
          <Box display="flex" flexWrap="wrap">
            {/* Add content for managing playlists */}
            {/* Example movie item */}
            <Box width="25%" p={2}>
              <Typography variant="subtitle1">Movie Title</Typography>
              {/* Movie Poster */}
              <img
                src="https://via.placeholder.com/150"
                alt="Movie Poster"
                style={{ maxWidth: "100%" }}
              />
            </Box>
            {/* End of Example */}
          </Box>
        </Box>
      </Paper>

      {/* Section: Change Password */}
      <Paper elevation={3} mt={3} className="paper">
        <Box p={2}>
          <Typography variant="h6">Change Password</Typography>
          {/* Add content for changing the password */}
        </Box>
      </Paper>

      {/* Section: Edit Profile */}
      <Paper elevation={3} mt={3} className="paper">
        <Box p={2}>
          <Typography variant="h6">Edit Profile</Typography>
          {/* Add content for editing the profile */}
        </Box>
      </Paper>

      {/* Placeholder for profile photo */}
      <Paper elevation={3} mt={3} className="paper">
        <Box p={2}>
          <Typography variant="h6">Profile Photo</Typography>
          
          <img className="ellipse" alt="Ellipse" src="./images/ellipse-1.png" style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }} />
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;
