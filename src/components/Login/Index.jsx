import React from "react";
// import man from "/images/Profile";
import "./login.css";
function Login() {
  return (
    <div className="main-log-container">
      <form>
        <div class="profile_container">
          <img
            src="/images/Profile.png"
            alt="ProfilePicture"
            width="150"
            height="150"
          />
        </div>
        <input type="text" placeholder="Enter your username" name="username" />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          max="8"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
