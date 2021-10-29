import React, { useState } from "react";

function EditDreams({ setIsEditing, currentUser, dreams }){
//  console.log(dreams.id)
 
    const [editDream, setEditDream]= useState({
             name: "",
             date: "",
             description:"",
             rating: 0,
             mood: "",
             image_url: "",
             user_id: 1
            })

    const { id, name, date, description, image_url, mood, rating } = editDream;

    function handleOnSubmit(e) {
      e.preventDefault();
      console.log("Button clicked!")
      fetch(`https://damp-beach-45746.herokuapp.com/dreams/${id}`,{
       method: 'PATCH',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(editDream)
  })
        setEditDream({
            name: "",
             date: "",
            description:"",
            rating: 0,
            mood: "",
            image_url: "",
          })
    }

    function handleChange(e){
         const key = e.target.name
         setEditDream({...editDream, [key]: e.target.value})
     }


    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className="updateDream">
                     <h1 id="submitHeader">Update This Dream Entry</h1>
                     <input
                        type="text"
                        name="name"
                        placeholder="Edit Name"
                        value={name}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="date"
                        placeholder="Edit Date"
                        value={date}
                        onChange={handleChange}
                    />
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Edit Description"
                        value={description}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="rating"
                        placeholder="Edit Rating"
                        value={rating}
                        onChange= {(e) => setEditDream({...editDream, rating: parseInt(e.target.value)})}
                    />
                    <input
                        type="text"
                        name="mood"
                        placeholder="Edit Mood"
                        value={mood}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="image_url"
                        placeholder="Edit Image Link"
                        value={image_url}
                        onChange={handleChange}
                    />
                </div>
               <button type="Submit">Submit Changes</button>
            </form>
            <button key={dreams.id} type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
    );
}
export default EditDreams;


