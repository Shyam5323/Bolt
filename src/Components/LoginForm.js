import React from "react";
import "../Styles/loginform.css"; // Make sure the path to your CSS file is correct
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import { GoogleLogin } from '@react-oauth/google';
import text from "../Assets/text.png";
import doctor1 from "../Assets/doctor1.png";
import doctor2 from "../Assets/doctor2.png";

function LoginForm() {
  return (
    <div className="loginForm">
      <div className="head">
        <img src={Logo} alt="logo" className="logo"></img>
      </div>
      <div className="login-body">
        <div className="login-container">

          <h1>Login Now</h1>
          <p>Hi, Welcome Back</p>
          {/* <button className="google-btn">Login with Google</button> */}
          <GoogleLogin className="google-btn"
    onSuccess={credentialResponse => {
    console.log(credentialResponse);
    }}
     onError={() => {
     console.log('Login Failed');
     }}
    />
          <pre> ------------- or Login with Email  -------------</pre>
          <form action="#" method="POST">
            <h3>Email</h3>
            <input type="email" placeholder="Enter your email id" required />
            <h3>Password</h3>
            <input type="password" placeholder="Enter your password" required />
            <input type="checkbox" />
            <span>Remember me</span>
            <button type="submit">Login</button>
            <div className="create-account">
              <span>Don't have an account?</span>
              <Link to="/signup">Create Account</Link>
              {/* Assuming "/signup" is the route for your signup page */}
            </div>
          </form>


        </div>
        <div className="login-container2">
          <div className="tex">
            <img src={text} alt="text" ></img>
          </div>
          <div className="doc1">
            <img src={doctor1} alt="doctor" ></img>
          </div>
          <div  className="doc2">
            <img src={doctor2} alt="doctor2"></img>
          </div>
        </div>
      </div>
      </div>
      );
  }


      export default LoginForm;