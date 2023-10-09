import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import AuthService from "../services/AuthService";
import "./Login.css";

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
    <div className="login-container">
      <div className="left-side-image"></div>
      <form onSubmit={handleSubmit} className="form-login">
        <h2>Signup</h2>

        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Please enter your username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please enter your email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Please enter your password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Please confirm your password"
            required
          />
        </div>
        <Link to="/login">Already have an account? Click here</Link>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
