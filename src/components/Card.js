import React from "react";

export default function Card(props) {
  const { titleText, descText } = props;
  return (
    <div>
      <h1>{titleText}</h1>
      <p>{descText}</p>
    </div>
  );
}
