import React, { useState } from "react";
import "../signup/signup.css";
import axios from "axios"

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const submitForm = async(e) => {
    e.preventDefault()

    const postData = {name, email, username, password};

    axios.post("http://127.0.0.1:8000/api/register", postData)
    .then(response => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"))
      window.location.href = '/home';
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="signup">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
        alt=""
      />
      <form onSubmit={submitForm}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          value={name}
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          value={username}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
        <button >Sign up</button>
      </form>
      
    </div>
  );
}

export default Signup;