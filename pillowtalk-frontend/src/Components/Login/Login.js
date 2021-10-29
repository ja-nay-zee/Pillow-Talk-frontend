import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
            <form onSubmit={handleSubmitSignIn}>    
                <input
                    placeholder="Username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
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
                <div className="auth__form-container_fields-content_button">
                    <button type="submit">Sign In</button>
                </div>
            </form>
            <div className="auth__form-container_fields-account">
            <p>Need to create a new account?</p>
            <Link to="/signup"><em> Sign Up </em></Link>
            </div>
        </div>
        
    )
}

export default Login;