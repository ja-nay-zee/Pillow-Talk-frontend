import React from "react";
import "./DreamCard.style.css"

function DreamCard({ dream }){
    // console.log(dream);
    const { name, date, description, image_url, mood, rating } = dream;


    return(
      
        <li className="card">
          <h4>{name}</h4>
          <p>Date: {date}</p>
          <p>Description: {description}</p>
          <p>Mood: {mood}</p>
          <p>Drean Rating: {rating}</p>
          <img id ="dreamImgs" src={image_url} />
        </li>
    )
}


export default DreamCard;

