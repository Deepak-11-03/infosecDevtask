import React from "react";
import "./Home.css";

function Home() {
  return (
      <div className="container">
          <div className="home-heading">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="buttons">
            <button id="button1">Create Account</button>
            <button id="button2">Already Registered? Login</button>
          </div>
      </div>
  );
}

export default Home;
