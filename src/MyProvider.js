import React from "react";
import MyContext from "./MyContext";

class MyProvider extends React.Component {
  state = {
    explore: false,
    index: null
  };
  render() {
    console.log(this.state);
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          exploreShow: val => {
            console.log("hit");
            this.setState(() => ({ explore: val }));
          },
          changeIndex: i => this.setState(() => ({ index: i }))
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
