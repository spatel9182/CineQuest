// Import the Input component from MUI
import React, { useState } from 'react';
import { Input, Button, Typography, Container } from '@mui/material';
import axios from 'axios';
import '../../css/newsletter.css';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send email to backend
            const response = await axios.post('/api/newsletter', { email });
            setMessage(response.data.message);
            setEmail('');
        } catch (error) {
            console.error('Error submitting email:', error);
            setMessage('Error submitting email. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm" className="newsletter-container">
            <form onSubmit={handleSubmit}>
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', fontFamily: 'satoshi', color: 'white' }}>
                    Subscribe to our newsletter
                </Typography>
                <div style={{ marginTop: '20px' }}></div>
                {/* Use the Input component instead of TextField */}
                <Input
                    fullWidth
                    placeholder="Enter your email"
                    value={email}
                    className="inputEmail"
                    inputProps={{
                        style: { color: 'white' },
                        'aria-label': 'Enter your email',
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    classes={{
                        root: 'custom-input-root',
                    }}
                    // Add the onBlur event to handle styles when the input loses focus
                    onBlur={(e) => e.target.parentElement.classList.remove('focused')}
                    autoFocus={false}
                />

                <div style={{ marginTop: '20px' }}></div>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: '#ac1b1b', color: 'white', marginTop: '30px', marginLeft: 'auto' }}
                >
                    Subscribe
                </Button>

                {message && (
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '30px', color: 'white' }}>
                        {message}
                    </Typography>
                )}
            </form>
        </Container>
    );
};

export default NewsletterForm;
