import React, { useState } from "react";
import "../login/login.css";
import axios from "axios"

function Login() {
  
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const submitForm = async(e) => {
    e.preventDefault()

    const postData = { username, password};

    axios.post("http://127.0.0.1:8000/api/login", postData)
    .then(response => {
      console.log(response.data);
      let token = response.data.authorisation.token 
      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"))
      window.location.href = '/home';
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
        alt=""
      />
      <form onSubmit={submitForm}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Phone number, username, or email"
          value={username}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
        <button  >Log in</button>
      </form>
      
    </div>
  );
}

export default Login;