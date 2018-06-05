import React, { Component } from "react";
import "./App.css";
import Hexagon from "./Hexagon/Hexagon";
import Explore from "./Explore/Explore";
import MyProvider from "../MyProvider";
class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <div className="canvas">
            <Hexagon />
            <Explore />
          </div>
        </div>
      </MyProvider>
    );
  }
}

export default App;
