



import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const AboutUs = () => {
  return (
    <Container maxWidth="100%">
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      <Paper elevation={3} mt={3}>
        <Box p={2} style={{
          backgroundColor: "#100f12",
          color: "white"
        }}>
          <Typography variant="body1">
            Welcome to our movie app! We are a team of movie enthusiasts who
            love to share our passion for cinema with you.
          </Typography>
          <Typography variant="body1" mt={2}>
            Our mission is to provide you with the latest information about
            movies, help you discover new films, and make your movie-watching
            experience enjoyable.
          </Typography>
          <Typography variant="body1" mt={2}>
            At our core, we believe in the magic of storytelling through film. Whether it's an epic adventure, a heartwarming romance, or a mind-bending thriller, movies have the power to transport us to different worlds and evoke a wide range of emotions.
          </Typography>
          <Typography variant="body1" mt={2}>
            We are dedicated to curating a diverse selection of movies to cater to all tastes and preferences. From classic masterpieces to the latest blockbusters, we aim to be your go-to source for discovering and enjoying great films.
          </Typography>
          <Typography variant="body1" mt={2}>
            If you have any questions,{" "}
            feedback
            , or suggestions, feel free to <Link to="/contactus" style={{ color: "blue", textDecoration: "underline" }}>
              reach out to us.
            </Link> We'd love to hear from you!
          </Typography>

        </Box>
      </Paper>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          alt="banner"
          src="./images/LoginPage.png"
          style={{
            height: "auto",
            width: "70%",
            aspectRatio: "auto",
            margin: "auto",
            borderRadius: "10px",
            border: "solid grey 1px",
          }}
        />
        




        <Link to="/" className="imageLink"

          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              color: "#FFF",
              fontFamily: "Alpino",
              fontSize: "5rem",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Cine
          </Typography>
          <Typography
            style={{
              color: "#AC1B1B",
              fontFamily: "Alpino",
              fontSize: "5rem",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Quest
          </Typography>
        </Link>

      </div>
    </Container>
  );
};

export default AboutUs;
