import React from 'react'
import {useHistory} from "react-router-dom";

function Logout({ currentUser, setCurrentUser}){
    let history = useHistory();

    function handleLogout() {
        console.log(currentUser)
        console.log("Logging off...");
        fetch("https://damp-beach-45746.herokuapp.com/logout", {
        method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("logged out", data)
            setCurrentUser(null)
            history.push("/")
        })
    };
    
    return(
        <div>
            <h1>LOGOUT PAGE</h1>
            <button onClick={handleLogout()}>LOG OUT</button>
        </div>
    )
}

export default Logout;