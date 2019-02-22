import React, { Component } from "react";
import "./App.css";

//CSS Styling
const divStyle = {
  textAlign: "center",
  marginTop: "30px",
  padding: "40px"
};

const btnDiv = {
  margin: "10px",
  fontSize: "35px",
  fontWeight: "bold",
  paddingRight: "20px",
  paddingLeft: "20px"
};

const counterStyle = {
  fontSize: "265px",
  fontWeight: "bold"
};

const negativeCounterStyle = {
  fontSize: "265px",
  fontWeight: "bold",
  color: "red"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = {
      counter: 0
    };
  }

  //Functions
  increaseCounter() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }

  decreaseCounter() {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  }

  resetCounter() {
    this.setState(prevState => {
      return { counter: 0 };
    });
  }

  render() {
    return (
      <div style={divStyle}>
        <div
          style={this.state.counter >= 0 ? counterStyle : negativeCounterStyle}
        >
          {this.state.counter}
        </div>
        <button
          style={btnDiv}
          className="btn btn-success"
          onClick={this.increaseCounter}
        >
          +
        </button>

        <button
          style={btnDiv}
          className="btn btn-success"
          onClick={this.resetCounter}
        >
          Reset
        </button>
        <button
          style={btnDiv}
          className="btn btn-success"
          onClick={this.decreaseCounter}
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
