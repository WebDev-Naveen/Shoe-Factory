import React from "react";
import "./register.css";
import man from "./man.png";
function Register() {
  return (
    <div className="main-reg-container">
      <div className="reg-img">
        <img src={man} alt="Shoe-logo" width="150" height="150" />
      </div>
      <form className="form-container">
        <input type="email" placeholder="Enter your Email-Id" name="email" />
        <input
          type="text"
          placeholder="Enter your Mobile No."
          name="mobileno"
        />
        <input type="text" placeholder="Enter your username" name="username" />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          max="8"
        />
        <input
          type="password"
          placeholder="Re-enter your password"
          name="password"
          max="8"
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
