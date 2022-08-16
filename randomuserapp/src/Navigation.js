import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "10px",
  background: "grey",
  textDecoration: "none",
  color: "white",
};

function Navigation() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        exact
        style={linkStyles}
      >
        Users
      </NavLink>
      <NavLink
        to="/usergenerator"
        exact
        style={linkStyles}
      >
        User Generator
      </NavLink>
      <NavLink
        to="/newuserform"
        exact
        style={linkStyles}
      >
        New User
      </NavLink>
    </div>
  );
}

export default Navigation