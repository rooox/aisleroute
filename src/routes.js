import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Lists from "./Components/Lists";
import List from "./Components/List";
import Login from "./Components/Login";
import Items from "./Components/Items";
import Recipes from "./Components/Recipes";
import Register from "./Components/Register";
import "./styles/main.scss";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/lists" component={Lists} />
    <Route path="/list" component={List} />
    <Route path="/items" component={Items} />
    <Route path="/recipes" component={Recipes} />
    <Route path="/register" component={Register} />
  </Switch>
);
