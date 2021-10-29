import React, { useState } from "react";


function CreateDream({ currentUser, handleCreateDream, dreamData, setDreamData}){
    function handleChange(e){
        setDreamData({ ...dreamData, [e.target.name]: e.target.value });
    }

    return(
        <form className="createDreamForm" onSubmit={handleCreateDream} >
            <h1 id="submitHeader">Create a Dream  Entry</h1>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={dreamData.name}
                onChange={handleChange}
            />
            <input
                type="date"
                name="date"
                placeholder="Date"
                value={dreamData.date}
                onChange={handleChange}
            />
            <textarea
                type="text"
                name="description"
                placeholder="Description"
                value={dreamData.description}
                onChange={handleChange}
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={dreamData.rating}
                min="0"
                max="10"
                onChange= {(e) => setDreamData({...dreamData, rating: parseInt(e.target.value)})}
            />
            <input
                type="text"
                name="mood"
                placeholder="Mood"
                value={dreamData.mood}
                onChange={handleChange}
            />
            <input
                type="text"
                name="image_url"
                placeholder="Image Link"
                value={dreamData.image_url}
                onChange={handleChange}
            />
            <button type="Submit">Create</button>
        </form>
    );
}


export default CreateDream;