import React from 'react';
import "./Home.style.css";


function Home(){
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
     </div>

//   <div className="buttonCreate">
//     <button onClick={() => console.log("i was clicked!"))}>Create a Dream Entry</button>
// </div>
  );
}

export default Home;