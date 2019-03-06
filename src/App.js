import React, { Component } from "react";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div>{routes}</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
