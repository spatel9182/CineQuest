import React, { useState } from 'react';
import { TextField, Button, Typography, Container, InputLabel } from '@mui/material';
import axios from 'axios'; // Assuming you're using Axios for API requests
import '../../css/newsletter.css';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send email to backend
            const response = await axios.post('/api/newsletter', { email });
            setMessage(response.data.message); // Assuming the backend sends a response message
            setEmail(''); // Clear the email input after submission
        } catch (error) {
            console.error('Error submitting email:', error);
            setMessage('Error submitting email. Please try again.'); // Display an error message
        }
    };

    return (
        <Container maxWidth="sm" className="newsletter-container">
            <Typography variant="h4" gutterBottom>
                Subscribe to our newsletter
            </Typography>
            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="email-input" sx={{ marginBottom: 1 }}>
                    Enter your email
                </InputLabel>
                <TextField
                    fullWidth
                    type="email"
                    id="email-input"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Subscribe
                </Button>
                {message && (
                    <Typography variant="body2" color="textSecondary">
                        {message}
                    </Typography>
                )}
            </form>
        </Container>
    );
};

export default NewsletterForm;
