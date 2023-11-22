// Actor.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const Actor = () => {
    const { id } = useParams();
    const [actor, setActor] = useState(null);

    useEffect(() => {
        const fetchActorData = async () => {
            try {
                const response = await axios.get(`https://moviesearch-api.onrender.com/artist/52fe4708c3a368484e0b179d'`, {
                    params: {
                        api_key: 'YOUR_TMDB_API_KEY',
                    },
                });
                setActor(response.data);
            } catch (error) {
                console.error('Error fetching actor data:', error);
            }
        };

        fetchActorData();
    }, [id]);

    if (!actor) {
        return <div>Loading...</div>;
    }

    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <Card style={{ backgroundColor: '#000000', color: '#ffffff' }}>
                <CardMedia
                    component="img"
                    alt={actor.name}
                    height="400"
                    image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                />
                <CardContent>
                    <Typography variant="h5" component="div" style={{ color: '#ac1b1b' }}>
                        {actor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {actor.biography}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Actor;
