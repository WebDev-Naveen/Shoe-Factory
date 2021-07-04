import React from "react";

function Login() {
  return (
    <div
      style={{
        width: "400px",
        height: "100vh",
      }}
    >
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
