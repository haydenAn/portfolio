import React, { Component } from "react";
import "./Hexa_1.css";
import MyContext from "../../../MyContext";
import Button from "@material-ui/core/Button";

class Hexa_1 extends Component {
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
            className="Hexa_1"
            style={
              context.state.explore
                ? context.state.index === 1
                  ? styles.selected
                  : styles.notSelected
                : { display: "none" }
            }
            onClick={() => {
              context.changeIndex(1);
            }}
          >
            <div className="Hexa1_content">
              <h1 className="Hexa1_h1">SKILLS</h1>
              <div className="icon-bundle">
                <i className="devicon-javascript-plain jsIcon mycon" />
                <i className="devicon-react-original reactIcon mycon" />
                <i className="devicon-postgresql-plain sqlIcon mycon" />
                <br />
                <i className="devicon-csharp-line mycon" />
                <i className="devicon-git-plain mycon" />
              </div>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Hexa_1;
