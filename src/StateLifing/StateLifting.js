import React from "react";

const StateLifting = (props) => {
  var data = "child data";
  props.onMethodData(data);
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
};

export default StateLifting;
