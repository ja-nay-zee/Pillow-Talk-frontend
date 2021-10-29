import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "./Components/Signup/SignUp.js"
import Login from "./Components/Login/Login.js";

function UnauthenticatedApp({ setCurrentUser }) {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path="/signup">
                    <Signup setCurrentUser={setCurrentUser} />
                </Route>
                <Redirect exact to="/" />
            </Switch>
        </div>
    
);
}

export default UnauthenticatedApp;