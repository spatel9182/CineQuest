// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the use of Routes instead of Switch
import Navbar from "./components/common/Navbar"; // Adjust the import path as needed
import Home from "./components/pages/Home"; // Import other pages as needed
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ChatBot from "./components/pages/ChatBot";

function App() {

  return (

    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes for other pages */}
        </Routes>
        <ChatBot></ChatBot>
      </div>
    </Router>
  );
}

export default App;
