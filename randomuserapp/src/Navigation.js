import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  display: "inline-block",
  margin: "0",
  width: "200px",
  padding: "0",
  background: "white",
  textDecoration: "none",
  outline: "solid",
  color: "black",
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
        to="/about"
        style={style}
      >
        About
      </NavLink>
    </div>
  );
}

export default Navigation