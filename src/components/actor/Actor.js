// Actor.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  CardMedia,
  Paper,
  Link,
  ListItem,
  ListItemAvatar,
  Avatar,
  Grid,
  ListItemText,
} from "@mui/material";
import { apiClient } from "../../api/api";

const Actor = () => {
  const { artistId } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    apiClient
      .get(`/artist/${artistId}`)
      .then((res) => {
        setActor(res.data);
      })
      .catch((error) => {
        console.log(error);
        // alert(`Error, ${error.message}`);
      });
  }, [artistId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="900px" style={{ marginTop: "20px" }}>
      <Typography variant="h4" style={{ backgroundColor: "#ac1b1b", color: "#ffffff", padding: "10px", marginBottom: "10px", textAlign: "center" }}>
        Actor Overview
      </Typography>

      <Paper style={{ backgroundColor: "#000000", color: "#ffffff", padding: "20px", marginBottom: "20px" }}>
        <Grid container spacing={2} justifyContent="center">

          {/* Actor Photo on top for larger screens */}
          <Grid item xs={12} md={7} lg={5}>
            <CardMedia
              component="img"
              alt={actor.name}
              height="80%"
              image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              style={{ borderRadius: "8px", marginBottom: '10px' }}
            />
          </Grid>


          <Grid item xs={12} sm={3} md={3} lg={3} style={{ display: 'none' }}>
            <CardMedia
              component="img"
              alt={actor.name}
              height="80%"
              image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              style={{ borderRadius: "8px", marginBottom: '10px' }}
            />
          </Grid>

          {/* Actor Details on the right */}
          <Grid item xs={12} sm={8} md={6} lg={6} style={{ padding: '20px', marginLeft: '40px', textAlign: 'left' }}>
            <Typography textAlign="right" variant="h5" component="div" style={{ fontFamily: 'satoshi', fontSize: '24px', fontWeight: 'bold' }}>
              {actor.name}
            </Typography>
            <Typography variant="body2" textAlign="right" style={{ fontFamily: 'satoshi', fontSize: '14px', marginTop: '10px' }}>
              {actor.biography}
            </Typography>
            <Typography textAlign="left" variant="body2" style={{ fontFamily: 'satoshi', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>
              Date of Birth: {actor.birthday}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Increase the size of the Movies Paper */}
      <Paper style={{ marginTop: "20px", padding: "20px" }}>
        <Typography variant="h4" textAlign="center" style={{ fontFamily: 'satoshi', fontSize: '14px', fontWeight: 'bold' }}>
          Movies
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {actor?.cast?.map((c) => (
            <Grid key={c?._id} item xs={12} sm={6} md={4} lg={3}>
              <Link href={`/artist/${c?.tmdbId}`} style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={c?.name}
                      src={`https://image.tmdb.org/t/p/w500/${c?.poster_path}`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={c?.original_title}
                    secondary={c?.character}
                  />
                </ListItem>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Actor;
