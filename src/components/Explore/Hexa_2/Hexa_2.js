import React, { Component } from "react";
import "./Hexa_2.css";
import MyContext from "../../../MyContext";
class Hexa_2 extends Component {
  render() {
    const styles = {
      selected: {
        width: "350px",
        color: "#2e86ab"
      },
      notSelected: {
        width: "300px",
        transition: "width 1s"
      }
    };
    return (
      <MyContext.Consumer>
        {context => (
          <div
            className="Hexa_2"
            style={
              context.state.explore
                ? context.state.index === 2
                  ? styles.selected
                  : styles.notSelected
                : { display: "none" }
            }
            onClick={() => {
              context.changeIndex(2);
            }}
          >
            <div className="Hexa1_content">
              <h1>PROJECTS</h1>
              <ul className="Hexa1_content-ul">
                <li>Ilgi</li>
                <li>Nito</li>
              </ul>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Hexa_2;
