import React from "react";
import { Container, Typography, Paper, Box, Grid, Button, TextField, Avatar, Divider } from "@mui/material";

import "./Dashboard.css"

const Dashboard = () => {
  return (
    <Container maxWidth="lg" id="DashboardContainer"

    >
      <Typography variant="h4" gutterBottom>
        Movie App Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your movie app dashboard. Here, you can manage your playlists, change your password, edit your profile, and update your profile photo.
      </Typography>

      {/* Section: My Playlists */}
      <Paper elevation={3} mt={3} sx={{ backgroundColor: "#100f12" }}>
        <Box p={2}>
          <Typography variant="h6">My Playlists</Typography>
          <Box display="flex" flexWrap="wrap">
            {/* Add content for managing playlists */}
            <Box width="25%" p={2}>
              <Typography variant="subtitle1">My Awesome Playlist</Typography>
              <Avatar alt="Playlist Icon" src="./images/playlist-icon.png" sx={{ width: 150, height: 150 }} />
            </Box>
            <Box width="25%" p={2}>
              <Typography variant="subtitle1">Movie Night</Typography>
              <Avatar alt="Playlist Icon" src="./images/playlist-icon.png" sx={{ width: 150, height: 150 }} />
            </Box>
            {/* Add more playlists here */}
          </Box>
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
        <Box p={2}>
          <Typography variant="h6">Change Password</Typography>
          <TextField
            label="Current Password"
            type="password"
            fullWidth
            mt={2}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            mt={2}
          />
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
        <Box p={2}>
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
      {/* Section: Profile Photo */}
      <Paper elevation={3} mt={3} sx={{ backgroundColor: "#100f12" }}>
        <Box p={2}>
          <Typography variant="h6">Profile Photo</Typography>
          <Avatar alt="Your Profile Photo" src="./images/your-profile-photo.jpg" sx={{ width: 150, height: 150, mt: 2 }} />
          <input type="file" accept="image/*" id="profile-photo-input" style={{ display: "none" }} />
          <label htmlFor="profile-photo-input">
            <Button variant="outlined" color="primary" component="span" mt={2}>
              Change Profile Photo
            </Button>
          </label>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;
