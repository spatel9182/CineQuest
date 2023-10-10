// Sidebar.jsx
import React from "react";
import "./Sidebar.css";

import { NavLink, Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import genreIcons from "../../../assets/genres";

function Sidebar({ routes }) {
  return (
    <div className="sidebar">
      <Link to="/" className="imageLink">
        <Typography
          style={{
            color: "#FFF",
            fontFamily: "Alpino",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Cine
        </Typography>
        <Typography
          style={{
            color: "#AC1B1B",
            fontFamily: "Alpino",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Quest
        </Typography>
      </Link>

      <List>
        <ListSubheader
          style={{
            backgroundColor: "#100f12",
            color: "#515155",
            position: "static",
          }}
        >
          Pages
        </ListSubheader>
        {console.log(routes)}
        {routes.map(({ text, path }) => (
          <NavLink
            key={text}
            className="links"
            to={path}
            
          >
            <ListItem className="ListItem">
              <ListItemIcon>
                <img
                  src={genreIcons[text.toLowerCase()]}
                  className="genreImages"
                  height={30}
                  background="white"
                />
              </ListItemIcon>
              <ListItemText>
                {text === "About" ? "About Us" : text}
              </ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider
        style={{
          color: "white",
          border: "1px solid #444444",
        }}
      />
      <List>
        <ListSubheader
          style={{
            backgroundColor: "#100f12",
            color: "#515155",
            position: "static",
          }}
        >
          Categories
        </ListSubheader>
      </List>
    </div>
  );
}

export default Sidebar;
