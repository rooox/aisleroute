import React, { Component } from "react";
import logo from "./Assets/arlogospan.svg";
import mag from "./Assets/mag.svg";

export default class Recipes extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="logo_dashboard" alt="aisle route logo" />
        <div className="green_span_in" />
        <p className="comp_dashboard">Recipes</p>
        <div className="search_container">
          <input className="search_input" />
          <img src={mag} alt="magnifying glass icon" className="mag" />
        </div>
        <div className="list_container" />
        <button className="add_button">+</button>
      </div>
    );
  }
}
