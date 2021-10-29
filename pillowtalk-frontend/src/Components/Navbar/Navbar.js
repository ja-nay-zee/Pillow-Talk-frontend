import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.style.css";

function Navbar({handleLogout, currentUser, setCurrentUser}){
  return(
    <nav id="navBar">
      <NavLink className="signInNav" exact to="/">Sign in</NavLink>
      <NavLink className="homeNav" exact to="/home">Dashboard</NavLink>
      <NavLink className="aboutUsNav" to="/aboutus">About Us</NavLink>
      <NavLink className="logoutNav" to="/logout">Logout</NavLink>
    </nav>
  );
}

export default Navbar;