import React, {useState} from 'react';
import "./Login_Logout.style.css"

function LoginLogout(){
  const initialState = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
    };
  
  const [needAccount, setNeedAccount] = useState(true)
  const [passwordShown, setPasswordShown] = useState(false)
  const [confPasswordShown, setConfPasswordShown] = useState(false)
  const [form, setForm] = useState(initialState)
  const [currentUser, setCurrentUser] = useState({})   

  function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmitSignUp(e){
    e.preventDefault()
    console.log("Creating account...");
    fetch("https://damp-beach-45746.herokuapp.com/signup", {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(form)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => console.log('Error:', error))
  }

  function handleSubmitSignIn(e){
    e.preventDefault()
    console.log("Signing In...");
    fetch("https://damp-beach-45746.herokuapp.com/login", {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(form)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('Success:', data)
        setCurrentUser(data)
      })
      .catch(error => console.log('Error:', error))
  }

  function togglePasswordVisiblity(){
    setPasswordShown(passwordShown ? false : true);
  };

  function toggleConfPasswordVisiblity(){
    setConfPasswordShown(confPasswordShown ? false : true);
  };

  function switchMode(){
    setNeedAccount(!needAccount);
  };

  return(
    <div>
      <h2>Welcome to PillowTalk</h2>
        {needAccount ? (
          <form onSubmit={handleSubmitSignUp}>
            <label htmlFor="first_name">First Name:</label>
            <input
              name="first_name"
              type="text"
              value={form.first_name}
              onChange={handleChange}
              required
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
              name="last_name"
              type="text"
              value={form.last_name}
              onChange={handleChange}
              required
            />
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type={passwordShown ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              required
            />
            <i onClick={togglePasswordVisiblity}>view</i>
            <label htmlFor="password_confirmation">Please confirm your password:</label>
            <input
              name="password_confirmation"
              type={confPasswordShown ? "text" : "password"}
              value={form.password_confirmation}
              onChange={handleChange}
              required
            />
            <i onClick={toggleConfPasswordVisiblity}>view</i>
            <div className="auth__form-container_fields-content_button">
              <button>Sign Up</button>
            </div>
          </form>
          ) : (
          <form onSubmit={handleSubmitSignIn}>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              type="username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password:</label>
              <input
                name="password"
                type={passwordShown ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                required
              />
              <i onClick={togglePasswordVisiblity}>view</i>
              <div className="auth__form-container_fields-content_button">
                <button>Sign In</button>
              </div>
            </form>
          )}
          <div className="auth__form-container_fields-account">
            <p>
              {needAccount
                ? "Already have an account?"
                : "Create an account"}
              <em onClick={switchMode}>{needAccount ? " Sign In " : " Sign Up "}</em>
            </p>
          </div>
    </div>
  );
}

export default LoginLogout;