//31st oct
import React, { useState } from 'react';
import "../../css/newsletter.css";

const NewsletterForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send email to backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1> Subscribe to our newsletter</h1>
            <br />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button type="submit">Subscribe</button>
        </form>
    );
};

export default NewsletterForm;
