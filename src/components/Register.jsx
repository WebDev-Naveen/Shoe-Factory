import React from "react";

function Register() {
  return (
    <div style={{ width: "400px", height: "100vh" }}>
      <form
        style={{
          width: "300px",
          height: "50vh",
          color: "black",
          margin: "0 auto",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
