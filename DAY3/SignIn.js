import React, { Component } from "react";
import { Routes,Router, Route,Link } from "react-router-dom";
import SignInForm from "../Components/SignInForm";
import ReactDOM from "react-dom";

import "../Asserts/Login.css";

  function SignIn(){
    return (
      <div className="container-box">
        <div className="login-App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <Link
                to="/sign-in" className="pageSwitcherItem-active text-reset">
                Sign In
              </Link>
              <Link exact to="/" className="pageSwitcherItem text-reset">
                Sign Up
              </Link>
            </div>

            <div className="formTitle">
              <div className="formTitleLink-active">
                Sign In
              </div>{" "}
              or{" "}
              <div  className="formTitleLink" >
                Sign Up
              </div>
              <br/>
              <br/>
              <br/>
              <SignInForm/>
            </div>
          </div>
        </div>
        </div>
      )
  }

export default SignIn;
