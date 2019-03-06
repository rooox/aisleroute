import React, { Component } from "react";
import logo from "./Assets/arlogospan.svg";

export default class Recipe extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="logo_dashboard" alt="aisle route logo" />
        <div className="green_span_in" />
        <p className="comp_dashboard">Recipe</p>
      </div>
    );
  }
}
