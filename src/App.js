// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/NavBar/NavBar.jsx";
import Sidebar from "./components/common/Sidebar/Sidebar.jsx";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import './App.css';
import AboutUs from "./components/pages/AboutUs";

function App() {

  const routes = [
    { path: "/", text: "Home" },
    { path: "/login", text: "Login" },
    
    { path: "/dashboard", text: "Dashboard" },
    { path: "/about", text: "About" }

    // Add more routes as needed
  ];
  return (
    <Router>
      <div className="App">

        <Sidebar routes={routes} />{/* Include the Sidebar component here */}
        
        <div className="main-content"> {/* Use main-content as the class name */}
        <Navbar className="mb10"/> 
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AboutUs />} />

            {/* Add more routes for other pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
