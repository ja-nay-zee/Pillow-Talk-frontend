import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Login.style.css";

function Login({setCurrentUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)

    function togglePasswordVisiblity(){
        setPasswordShown(passwordShown ? false : true);
    };
    
    function handleSubmitSignIn(event){
        event.preventDefault();
        console.log("Signing in...")
        fetch("https://damp-beach-45746.herokuapp.com/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
            res.json().then((user) => {
                setCurrentUser(user);
            });
            } else {
            res.json().then((errors) => {
                console.error(errors);
                alert("Invalid Credentials");
            });
            }
        });
        };

    return(
        <div>
            {/* <img id="logInPic" src="https://image.freepik.com/free-vector/clouds-background-with-stars-text-soace_1017-25499.jpg" alt="logInPic"/> */}
            <form id="loginForm" onSubmit={handleSubmitSignIn}>    
                <input
                    className="username"
                    placeholder="Username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    className="password"
                    placeholder="Password"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <i id="view" onClick={togglePasswordVisiblity}>view 👁️</i>
                <div className="auth__form-container_fields-content_button">
                    <button id="signInButton"type="submit">Sign In</button>
                </div>
            </form>
            <div id="auth__form-container_fields-account">
            <p id="aboveSignUp">Need to create a new account?</p>
            <Link to="/signup"><em id="signUp"> Sign Up </em></Link>
            </div>
        </div>
        
    )
}

export default Login;