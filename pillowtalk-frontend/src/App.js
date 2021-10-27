import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import PublicDreams from './Components/PublicDreams/PublicDreams.js';
import LoginLogout from './Components/LogIn_LogOut/LogIn_LogOut.js';


function App() {
    

    return(
    <div className="App"> 
    <Header />
    <Switch>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/publicdreams">
        <PublicDreams />
      </Route>
      <Route path="/loginlogout">
        <LoginLogout />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
