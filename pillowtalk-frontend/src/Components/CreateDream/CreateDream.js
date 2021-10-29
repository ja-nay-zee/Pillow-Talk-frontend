import React, { useState } from "react";


function CreateDream(){
    const currentUser = {id:1}

    const initialDream = ({
        name: "",
        date: "",
        description:"",
        rating: 0,
        mood: "",
        image_url: "",
        user_id: 1
    })

    const [createData, setCreateData] = useState(initialDream)

    function handleCreateData(e){
        e.preventDefault();
        console.log("sending dream");
        fetch("https://damp-beach-45746.herokuapp.com/dreams", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createData)
    })
       .then(r => r.json())
       .then(data => console.log(data))
       .catch(err => console.log("error:", err))

    }

    function handleChange(e){
        setCreateData({ ...createData, [e.target.name]: e.target.value });
      }
    
    

   return( 
         <form onSubmit={handleCreateData}>
             <h1 id="submitHeader">Create a Dream  Entry</h1>
             <input
               type="text"
               name="name"
               placeholder="Name"
               value={createData.name}
               onChange={handleChange}
              />
             <input
               type="date"
               name="date"
               placeholder="Date"
               value={createData.date}
               onChange={handleChange}
              />
              <textarea
               type="text"
               name="description"
               placeholder="Description"
               value={createData.description}
               onChange={handleChange}
              />
              <input
               type="number"
               name="rating"
               placeholder="Rating"
               value={createData.rating}
               onChange= {(e) => setCreateData({...createData, rating: parseInt(e.target.value)})}
              />
              <input
               type="text"
               name="mood"
               placeholder="Mood"
               value={createData.mood}
               onChange={handleChange}
              />
              <input
               type="text"
               name="image_url"
               placeholder="Image Link"
               value={createData.image_url}
               onChange={handleChange}
              />
             <button type="Submit">Create</button>
         </form>
 );
}

export default CreateDream;