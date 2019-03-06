import React, { Component } from "react";
import logo from "./Assets/arlogo.svg";
import { NavLink } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="logo_login" alt="aisle route logo" />
        <div className="green_span" />
        <div className="green_span" />
        <br />
        <br />
        <p className="input_title_login">username</p>
        <input className="input_login" />
        <p className="input_title_login">password</p>
        <input className="input_login" />
        <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
          <button className="login_button">LOGIN</button>
        </NavLink>
        <div className="new_login_container">
          <p className="new_login">new?</p>
          <NavLink to="/register" className="new_login">
            sign up here
          </NavLink>
        </div>
      </div>
    );
  }
}
