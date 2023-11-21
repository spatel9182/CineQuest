import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate();
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
    e.preventDefault();
    try {
      const signupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

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

      const data = await response.json();
      console.log("Signup successful:", data);

      // Save the user token in a cookie after successful signup
      setCookie("userToken", data.token);

      // Redirect to the login page upon successful signup
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  // Function to set a cookie
  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}; path=/`;
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
