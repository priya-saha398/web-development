import React, { Component } from "react";

export default class Event_handler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedOn: "",
    };
  }
  //   EVENT HANDLER BINDING USE FOR NORMAL FUNCTION. WHEN ES6 FUNCTION ARE USED THAT TIME BINDING ARE NOT MANDATORY.
  handlerOnChange = (e) => {
    this.setState(
      {
        changedOn: e.target.value,
      },
      () => {
        console.log(this.state.changedOn);
      }
    );
  };
  render() {
    return (
      <div>
        <h1>Registration form</h1>
        <input type='text' onChange={this.handlerOnChange} />
        <p>{this.state.changedOn}</p>
      </div>
    );
  }
}
