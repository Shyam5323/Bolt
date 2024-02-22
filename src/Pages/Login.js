import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

function Login() {
    return (
        <div className="home-section">
          <Navbar />
          <LoginForm />
          <Footer />
        </div>
      );}

export default Login;