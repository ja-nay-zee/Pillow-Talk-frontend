import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.style.css";

function Navbar(){
  return(
    <nav id="navBar">
     <NavLink className="homeNav" exact to="/">Home</NavLink>
     <NavLink className="aboutUsNav" to="/aboutus">About Us</NavLink>
     <NavLink className="publicDreamsNav" to="/publicdreams">Public Dreams</NavLink>
     <NavLink className="signInNav" to="/loginlogout">SignIn</NavLink>
    </nav>
  );
}

export default Navbar;