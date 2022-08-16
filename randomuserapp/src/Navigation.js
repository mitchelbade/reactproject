import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  display: "inline-block",
  margin: "5px",
  width: "200px",
  padding: "10px",
  background: "grey",
  textDecoration: "none",
  color: "white"
};

function Navigation() {
  return (
    <div>
      <NavLink
        to="/"
        style={style}
      >
        Home
      </NavLink>
      <NavLink
        to="/friendslist"
        style={style}
      >
        Friends List
      </NavLink>
      <NavLink
        to="/friendfinder"
        style={style}
      >
        Find Friends!
      </NavLink>
      <NavLink
        to="/about"
        style={style}
      >
        About
      </NavLink>
    </div>
  );
}

export default Navigation