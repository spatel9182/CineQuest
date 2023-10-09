// Sidebar.jsx
import React from 'react';
import "./Sidebar.css"
import { Link } from 'react-router-dom';

function Sidebar({ routes }) {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
