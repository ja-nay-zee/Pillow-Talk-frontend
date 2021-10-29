import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Signup.style.css"

function Signup(){  
  const [passwordShown, setPasswordShown] = useState(false)
  const [confPasswordShown, setConfPasswordShown] = useState(false)
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPassword_Confirmation] = useState("")
  const [currentUser, setCurrentUser] = useState({})

  function handleSubmitSignUp(e){
    e.preventDefault()
    console.log("Creating account...");
    fetch("https://damp-beach-45746.herokuapp.com/signup", {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({first_name, last_name, username, email, password, password_confirmation})
    })
      .then(resp => resp.json())
      .then(user => {
        console.log('Success:', user)
        setCurrentUser(user)
      })
      .catch(error => console.log('Error:', error))
  }

  function togglePasswordVisiblity(){
    setPasswordShown(passwordShown ? false : true);
  };

  function toggleConfPasswordVisiblity(){
    setConfPasswordShown(confPasswordShown ? false : true);
  };

  return(
    <div>
      <h2>Welcome to PillowTalk</h2>
          <form onSubmit={handleSubmitSignUp}>
            <input
              placeholder="First Name"
              name="first_name"
              type="text"
              value={first_name}
              onChange={e => setFirst_name(e.target.value)}
              required
            />
            <input
              placeholder="Last Name"
              name="last_name"
              type="text"
              value={last_name}
              onChange={e => setLast_name(e.target.value)}
              required
            />
            <input
              placeholder="Username"
              name="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              name="password"
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <i onClick={togglePasswordVisiblity}>view</i>
            <input
              placeholder="Password Confirmation"
              name="password_confirmation"
              type={confPasswordShown ? "text" : "password"}
              value={password_confirmation}
              onChange={e => setPassword_Confirmation(e.target.value)}
              required
            />
            <i onClick={toggleConfPasswordVisiblity}>view</i>
            <div className="auth__form-container_fields-content_button">
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>Already have an account?</p>
            <Link to="/"><em> Log In </em></Link>
          </div>
    </div>
  );
}

export default Signup;