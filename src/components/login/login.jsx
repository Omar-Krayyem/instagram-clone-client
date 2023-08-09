import React, { useState } from "react";
import "../login/login.css";

function Login() {
  
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
        alt=""
      />
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
      <button >Log in</button>
    </div>
  );
}

export default Login;