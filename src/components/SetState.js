import React, { Component } from "react";

export default class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>count: {count}</h1>
        <button onClick={this.increment} disabled={count === 10 ? true : false}>
          +
        </button>
        <button onClick={this.decrement} disabled={count === 0 ? true : false}>
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}
