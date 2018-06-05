import React, { Component } from "react";
import "./Hexagon.css";
import Button from "@material-ui/core/Button";
import MyContext from "../../MyContext";
class Hexagon extends Component {
  state = {
    buttonShow: false
  };
  showButton() {
    this.setState(() => ({ buttonShow: true }));
  }

  hideButton() {
    this.setState(() => ({ buttonShow: false }));
  }

  render() {
    console.log(this.state.buttonShow);
    return (
      <MyContext.Consumer>
        {context => (
          <div
            className={context.state.explore ? "test" : "hexagon"}
            style={
              context.state.explore
                ? { left: "8vh", top: "8vh" }
                : context.state.explore && context.state.index === 100
                  ? { color: "#2e86ab" }
                  : null
            }
            onMouseEnter={() => this.showButton()}
            onMouseLeave={() => this.hideButton()}
            onClick={() => context.changeIndex(100)}
          >
            <div className="content">
              <h1>HAYDEN RAHN</h1>
              <p>Fullstack Web Developer</p>
              {context.state.explore ? null : (
                <Button
                  variant="raised"
                  size="medium"
                  onClick={() => {
                    context.exploreShow(true);
                    context.changeIndex(100);
                  }}
                  style={this.state.buttonShow ? null : { display: "none" }}
                >
                  Explore
                </Button>
              )}
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Hexagon;
