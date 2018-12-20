import React, { Component } from "react";
import Signup from "./SignUp";
import SignIn from "./SignIn";
import  './Authentification.css';

class Authenticate extends Component {
  render() {
    return (
      <div className="LoginSignup-container">
        <Signup />
        <SignIn />
      </div>
    );
  }
}

export default Authenticate;
