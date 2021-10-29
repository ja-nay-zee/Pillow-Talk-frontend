import React from "react";
import DreamCard from "../DreamCard/DreamCard.js"
import "./DreamList.style.css";

function DreamsList({ dreams, handleOnDelete }){

    return (
        <ul id="list">{dreams.map((dream) => {
            return <DreamCard key={dream.id} dream={dream} handleOnDelete={handleOnDelete} />
        })}
        </ul>
    )
}

export default DreamsList;