import React, { useState } from "react";


function CreateDream(){
    const [createData, setCreateData] = useState(initialDream)
 
    const initialDream = {
        name: "",
        date: "",
        description:"",
        mood: "",
        rating: 0,
        image_url: "",
        user_id: [currentUser.id]
    }

    const currentUser = {id:1}


    function handleCreateData(e){
        e.preventDefault();
        fetch('https://damp-beach-45746.herokuapp.com/dreams',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createData)
    })
    }

 return(
     <form onSubmit={handleCreateData} >
         {/* <h1 id="submitHeader">Submit A New Flower!</h1>
            <img className="submitImage"src={pictureURL === "" ? "https://i.imgur.com/CBtjmX0.png" : pictureURL } alt="flower" />
        
        
            <div className="input-container"> 
                <label className="nameForm">Name of Flower:</label>
                <input type="text" id="nameBox" name="name" value={formData.name} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="colorForm">Color: </label>
                <input type="text" id="colorBox" name="color" value={formData.color} onChange={handleChange}></input>
            </div> 
        
            <div className="input-container"> 
                <label id="urlForm">Url Image: </label>
                <input type="text" id="image_urlBox" name="image_url" value={formData.image_url} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="seasonForm">Season: </label>
                <input type="text" id="seasonBox" name="season" value={formData.season} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="priceForm">Price: </label>
                <input type="number" id="priceBox" name="price" value={formData.price} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="quantityForm">Quantity: </label>
                <input type="number"id="quantityBox" name="quantity" value={formData.quantity} onChange={handleChange}></input>
            </div>
            <div className="input-container"> 
                <label id="descriptionForm">Description: </label>
                <textarea type="text" id="descriptionBox" name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>
        
            <div class="input-container">
                <input type="submit" value="Add To List" /> */}
     </form>
   
 );
}


export default CreateDream;