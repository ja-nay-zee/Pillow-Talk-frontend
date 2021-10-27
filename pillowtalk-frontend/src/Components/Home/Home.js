import React, { useEffect, useState } from 'react';
import DreamsList from '../DreamList/DreamsList';
import "./Home.style.css";



function Home(){
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetch('https://damp-beach-45746.herokuapp.com/dreams')
    .then(response => response.json())
    .then(dreamsArray => setDreams(dreamsArray))
  }, []);

  // console.log(dreams);

  function createButton(){
    alert ('I was clicked yay!')
  }

  function viewButton(){
    alert ('I was clicked woohoo!')
  }
  

  return(
    <div>
      <h1>Welcome to PillowTalk!</h1>
      <p>This is the home page and you get to write out your dreams!</p>
      <button id="createButton" onClick={ createButton }>Create a Dream Entry</button>
      <button id="viewButton" onClick={ viewButton }>View Drafts</button>

      <li className="instructions">
          <h2>Instructions </h2>
          <p>Step 1: Something Something Something </p>
          <p>Step 2: Blah Blah Blah </p>
          <p>Step 3: Wam Wam Wam </p>
          <p>Step 4: Done!</p>
          <img id ="instructionsImg" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
      </li>

      <DreamsList dreams={dreams} />
    </div>
  );
}

export default Home;