import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter__button decrement" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value reset" onClick={this.reset}>
          {this.state.counter}
        </span>
        <button className="counter__button increment" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
