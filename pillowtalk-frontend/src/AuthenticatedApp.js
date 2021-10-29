import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import Signup from './Components/Signup/SignUp.js';
import Login from './Components/Login/Login.js';
import Logout from './Components/Logout/Logout.js'; 

function AuthenticatedApp({ currentUser, setCurrentUser, handleLogout }) {

    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/aboutus">
                    <AboutUs />
                </Route>
                <Route exact path= "/logout">
                    <Logout handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path="/home">
                    <Home currentUser={currentUser} />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path= "/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </div>
    );
}

export default AuthenticatedApp;

