import React from "react";
import "./Form.css";

function Login() {
  return (
    <div className="form-container">
      <div className="heading">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>
      </div>
      <div className="form">
        <div className="textOnInput">
          <label for="inputText">Email Address</label>
          <input
            type="text"
            placeholder="Enter email address"
          />
        </div>
        <div className="textOnInput">
          <label for="inputText">Password</label>
          <input
            type="text"
            placeholder="Enter password"
          />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
