import "./App.css";
import { MdLocalLibrary } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import React from "react";
// import { useState } from "react";
// import header from "./assets/components/header";
// import { useState } from "react";
// const App=()=>{
//   const [password,setPassword]=useState("Abc.@678");
//   const [errorMessage,setErrorMessage]=useState("");
//   function handlePassword(event){
//     let new_pass=event.target.value;
//     setPassword(new_pass);
//     var lowerCase=/[a-z]/g;
//     if(!new_pass.match(lowerCase)){
//       setErrorMessage("password doesn't contain lowercase letter")
//     }
//   }
// }
function App() {
  return (
    <>
      <header>
        <div className="mainHead">
          <div className="home">
            <MdLocalLibrary />
            The Library
          </div>

          <a className="ha" href="">
            Home
          </a>

          <a href="" className="ha">
            Schedule
          </a>
          <a href="" className="ha">
            Facility
          </a>
          <a href="" className="ha">
            More Info..
          </a>
        </div>
      </header>
      <body>
        <div className="mainBody">
          <div className="leftBody"></div>
          <div className="rightBody">
            <form action="">
              <p id="bodyHead">Log in</p>
              <div >
                <p className="userContent" id="pbody">User name Or Email</p>
                <input className="userContent" type="text" />
              </div>
              <div className="passwordContent">
                <p id="pbody">Password</p>
                < input type="text"  value={password} onChange={handlePassword}/>
                <p id="pbody" className="forgot">Forgot Password?</p>
              </div>
              <button className="loginBtn">Log in</button>
              <p className="pbody">Or Log in With</p>
              <div className="btns">
              <button className="btnBottom"><FaTwitter /></button>
              <button className="btnBottom"><FaFacebookSquare /></button>
              <button className="btnBottom"><FaGoogle /></button>
              </div>
              <button className="loginBtn" href="">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
