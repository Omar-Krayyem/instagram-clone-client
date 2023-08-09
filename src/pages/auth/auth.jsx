import '../auth/auth.css';
import Login from '../../components/login/login';
import Signup from '../../components/signup/signup';
import React, { useState } from "react";


function Auth() {

    const [active, setActive] = useState("login");

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login");
    };

  return (
    <div className="authenticate">
        <div className="auth__left">
            <img
                src="https://i.imgur.com/P3Vm1Kq.png"
                alt="Instagram Screenshots"
            />
        </div>
        <div className="auth__right">
            {active === "login" ? <Login /> : <Signup />}

            <div className="auth__more">
                <span>
                {active === "login" ? (
                    <>
                    Don't have an account?{" "}
                    <button onClick={handleChange}>Sign Up</button>
                    </>
                ) : (
                    <>
                    Have an account? <button onClick={handleChange}>Log in</button>
                    </>
                )}
                </span>
            </div>
        </div>
  </div>
  );
}

export default Auth;