import React, { useEffect, useState } from 'react';
import DreamsList from '../DreamList/DreamsList.js';
import CreateDream from '../CreateDream/CreateDream.js';
import "./Home.style.css";
import EditDream from '../EditDream/EditDream.js';


function Home({currentUser}){
  const initialDream = ({
    name: "",
    date: "",
    description:"",
    rating: 0,
    mood: "",
    image_url: "",
    user_id: currentUser.id
})

  const [dreamData, setDreamData] = useState(initialDream)
  const [dreams, setDreams] = useState([]);
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetch('https://damp-beach-45746.herokuapp.com/dreams')
    .then(response => response.json())
    .then(dreamsArray => setDreams(dreamsArray))
  }, []);

  function handleCreateDream(e){
    e.preventDefault();
    console.log("sending dream");
    fetch("https://damp-beach-45746.herokuapp.com/dreams", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dreamData)
})
        .then(r => r.json())
        .then(newDream => {
          console.log(newDream)
          setDreams([...dreams, newDream])
        })
        .catch(err => console.log("error:", err))
    setDreamData(initialDream)
}

  function handleOnDelete(id){
    const updatedDreamsArray = dreams.filter(dream => dream.id !== id);
    setDreams(updatedDreamsArray)
  }  


  return(
    <div>
      <CreateDream currentUser={currentUser} handleCreateDream={handleCreateDream} dreamData={dreamData} setDreamData={setDreamData} />
      {isEditing ? ( 
        <EditDream setIsEditing={setIsEditing} dreams={dreams} currentUser={currentUser} />
        ): (
        <DreamsList dreams={dreams} handleOnDelete={handleOnDelete} setIsEditing={setIsEditing} currentUser={currentUser}/>
        )}
    </div>
  );
}

export default Home;