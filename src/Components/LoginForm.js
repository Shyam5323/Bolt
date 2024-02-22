import React from "react";
import "../Styles/loginform.css"; // Make sure the path to your CSS file is correct
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="loginForm">
      <div className="login-container">
        <h2>Login</h2>
        <button className="google-btn">Login with Google</button>
        <form action="#" method="POST">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="create-account">
          <span>Don't have an account?</span>
          <Link to="/signup">Create Account</Link>
          {/* Assuming "/signup" is the route for your signup page */}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
