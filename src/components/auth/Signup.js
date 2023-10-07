import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import AuthService from "../services/AuthService";

const Signup = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("button clicked");
    e.preventDefault();
    try {
      // Replace this example signupData with actual form data
      const signupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      // Send a POST request to your API
      const response = await fetch(
        "https://moviesearch-api.onrender.com/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle the response data as needed (e.g., success message, redirect)
      const data = await response.json();
      console.log("Signup successful:", data);

      // Redirect to the login page upon successful signup
      navigate("/login");
    } catch (error) {
      // Handle signup error (display an error message, etc.)
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
