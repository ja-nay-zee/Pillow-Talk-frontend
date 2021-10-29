import React from "react";
import "./DreamCard.style.css"

function DreamCard({ dream, handleOnDelete }){
    const { id, name, date, description, image_url, mood, rating } = dream;

    function handleDeleteClick(){
      console.log(id);
      fetch(`https://damp-beach-45746.herokuapp.com/dreams/${id}`, {
        method: "DELETE"
      })
      handleOnDelete(id)
    }

    return(
      <div>
        <li className="card">
          <h4>{name}</h4>
          <p>Date: {date}</p>
          <p>Description: {description}</p>
          <p>Mood: {mood}</p>
          <p>Dream Rating: {rating}</p>
          <img id ="dreamImgs" src={image_url} />
        </li>
        <button onClick={handleDeleteClick}> Delete </button>
      </div>
    )
}

export default DreamCard;