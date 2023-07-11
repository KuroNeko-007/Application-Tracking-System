import React from "react";
import { Routes,Router, Route,Link } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import ReactDOM from "react-dom";

import "../Asserts/Login.css";

  function SignUp(){
    return (
      <div className="container-box">
        <div className="login-App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <Link
                to="/sign-in" className="pageSwitcherItem text-reset">
                Sign In
              </Link>
              <Link exact to="/" className="pageSwitcherItem-active text-reset">
                Sign Up
              </Link>
            </div>

            <div className="formTitle">
              <div className="formTitleLink">
                Sign In
              </div>{" "}
              or{" "}
              <div className="formTitleLink-active" >
                Sign Up
              </div>
              <SignUpForm/>
            </div>
          </div>
        </div>
        </div>
      )
  }

export default SignUp;
