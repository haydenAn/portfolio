import React, { Component } from "react";
import "./Explore.css";
import MyContext from "../../MyContext";
import Hexa_1 from "./Hexa_1/Hexa_1";
import Hexa_2 from "./Hexa_2/Hexa_2";
import Hexa_3 from "./Hexa_3/Hexa_3";

import Space from "./Space/Space";
class Explore extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className={context.state.explore ? "Explore" : null}>
            <Hexa_1 />
            <Hexa_2 />
            {/* <Hexa_3 /> */}
            <Space />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Explore;
