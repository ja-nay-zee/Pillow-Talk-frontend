import React from "react";
import DreamCard from "../DreamCard/DreamCard.js"
import "./DreamList.style.css";

function DreamsList({ dreams }){
    return (
        <ul id="list">{dreams.map((dream) => {
            return <DreamCard key={dream.id} dream={dream} />
        })}
        </ul>
    )
}

export default DreamsList;