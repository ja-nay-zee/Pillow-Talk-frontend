import React from "react";
import DreamCard from "../DreamCard/DreamCard.js"
import "./DreamList.style.css";

function DreamsList({ dreams, handleOnDelete, setIsEditing, currentUser }){

    

    return (
        <ul id="list">{dreams.map((dream) => {
            return <DreamCard key={dream.id} dream={dream} handleOnDelete={handleOnDelete} setIsEditing={setIsEditing} currentUser={currentUser}/>
        })}
        </ul>
    )
}

export default DreamsList;