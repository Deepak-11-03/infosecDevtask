import { useState } from "react";
import "./App.css";
import Login from "./Components/FormComponent/Login";
import Signup from "./Components/FormComponent/Signup";
import Home from "./Components/Home";
import Profile from "./Components/ProfileComponent/Profile";

function App() {
  const [index, setIndex] = useState(1);
  return (
    <div className="App">
      {index === 1 ? (
        <Home />
      ) : index === 2 ? (
        <Login />
      ) : index === 3 ? (
        <Signup />
      ) : (
        <Profile />
      )}
      <div id="index-button"><button disabled={index===1} onClick={()=>setIndex(index-1)}> {"<"}</button>
      {index}
      <button disabled={index===4} onClick={()=>setIndex(index+1)}> {">"}</button>
      </div>
    </div>
  );
}

export default App;
