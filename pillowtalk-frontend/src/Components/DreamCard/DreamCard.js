import React, { useState } from "react";
import "./DreamCard.style.css"


function DreamCard({ dream, handleOnDelete, setIsEditing, currentUser }){
    const { id, name, date, description, image_url, mood, rating } = dream;

    function handleDeleteClick(){
      console.log(id);
      if (dream.user_id === currentUser.id) {
        fetch(`https://damp-beach-45746.herokuapp.com/dreams/${id}`, {
        method: "DELETE"
      })
      handleOnDelete(id)
      }
      else {
        alert("Permission denied to delete")
      }
    }

    const [editDream, setEditDream]= useState({
      name: "",
      date: "",
      description:"",
      rating: 0,
      mood: "",
      image_url: "",
      user_id: 1
     })

     function handleClick(){
       console.log(dream)
       console.log(currentUser)
      if (dream.user_id === currentUser.id) {
        setIsEditing(true)
      }
      else {
       alert("Permission denied to edit");
      }
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
        <button id="deleteButton" onClick={handleDeleteClick}> Delete </button>
        <button id="editDreamButton" onClick={handleClick} > Edit Dream </button>
      </div>
    )
}

export default DreamCard;