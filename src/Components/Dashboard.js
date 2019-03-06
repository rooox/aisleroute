import React, { Component } from "react";
import logo from "./Assets/arlogospan.svg";
import { NavLink } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard_container">
        <img src={logo} className="logo_dashboard" alt="aisle route logo" />
        <div className="green_span_in" />
        <p className="welcome_dashboard">Welcome!</p>
        <div className="nav_container_dash">
          <NavLink to="/lists">
            <button className="nav_button_dash"> My Lists</button>
          </NavLink>
          <NavLink to="/items">
            <button className="nav_button_dash"> My Items</button>
          </NavLink>
          <NavLink to="/recipes">
            <button className="nav_button_dash"> My Recipes</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
