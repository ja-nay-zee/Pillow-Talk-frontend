import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header/Header.js';



import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from './UnauthenticatedApp';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authCheck, setAuthCheck] = useState(false)

  useEffect(() => {
    fetch("https://damp-beach-45746.herokuapp.com/me", {
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthCheck(true);
        });
      } else {
        setAuthCheck(true);
      }
    });
  }, []);

  if (!authCheck) {
    return <div></div>;
  }

    return(
    <Router>
      <Header />
        {currentUser ? (
          <AuthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        ) : (
          <UnauthenticatedApp setCurrentUser={setCurrentUser}/>
        )}
      </Router>
  );
}

export default App;
