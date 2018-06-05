import React, { Component } from "react";
import "./Space.css";
import MyContext from "../../../MyContext";
import Button from "@material-ui/core/Button";
import ilgi_home from "./ilgi_home.PNG";
import ilgi_ilgi from "./ilgi_ilgi.PNG";
import nitos from "./nitos.PNG";
class Space extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div
            className="Space"
            style={context.state.index ? null : { display: "none" }}
          >
            {context.state.index === 1 ? (
              <div className="Space_1">
                <h1 className="Space_1-h1">Skills & Learning</h1>
                <h3 className="Space_1-h3">Skills</h3>
                <div className="Space_1-skils">
                  <ul className="Space_1-listLeft">
                    <li>javascript</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>express.js</li>
                  </ul>
                  <ul className="Space_1-listright">
                    <li>PostgresSQL</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SASS</li>
                    <li>C#</li>
                  </ul>
                </div>
                <h3 className="Space_1-h3">Deep in to React</h3>
                <h4 className="Space_1-h4">Context API</h4>
                <a
                  className="link"
                  href="https://github.com/HaydenMik33/context-mini"
                >
                  https://github.com/HaydenMik33/context-mini
                </a>
                <h4 className="Space_1-h4">Refs</h4>
                <p>github link</p>
                <h4 className="Space_1-h4">Higher-Order Components</h4>
                <p>github link</p>
                <h4 className="Space_1-h4">Render Props</h4>
                <p>github link</p>
                <h3 className="Space_1-h3" />
              </div>
            ) : context.state.index === 2 ? (
              <div className="Space_2">
                <h1 className="Space_2-h1">Projects</h1>
                <h3 className="Space_2-h3">Ilgi</h3>
                <div className="projects">
                  <div className="ilgi">
                    <p>personal daily mood tracker</p>
                    <a className="link" href="http://ilgi.space/#/">
                      http://ilgi.space/
                    </a>
                    <p>technologies uses</p>
                    <ul>
                      <li>Auth0 (authentication)</li>
                      <li>chart.js (user mood data visualization)</li>
                      <li>redux (store management) , Amazons3 (storage)</li>
                    </ul>
                    <img width="300px" src={ilgi_ilgi} />
                  </div>
                  <div className="Nito">
                    <h3 className="Space_2-h3">Nito</h3>
                    <p>
                      Custom teacher/student quiz builder with study resources
                      page and learning tools.
                    </p>
                    <a className="link" href="http://nito.fun/#/">
                      http://nito.fun/
                    </a>
                    <p>technologies uses</p>
                    <ul>
                      <li>
                        firebase (authentication , storage, cloud functions )
                      </li>
                      <li>chart.js ( student's data analytics )</li>
                      <li>redux (store management)</li>
                    </ul>
                    <img width="300px" src={nitos} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="Space_main">
                <h1 className="Space_main-h1">Contact</h1>
                <h3 className="Space_main-h3">Email</h3>
                <p>haydenrahn33@gmail.com</p>
                <h3 className="Space_main-h3">Github</h3>
                <a className="link" href="https://github.com/HaydenMik33">
                  https://github.com/HaydenMik33
                </a>
                <h3 className="Space_main-h3">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/hayden-rahn-1811b1163/"
                  className="link"
                >
                  https://www.linkedin.com/in/hayden-rahn-1811b1163/"
                </a>
              </div>
            )}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Space;
