import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
const Data = [
  {
    id: uuidv4(),
    title: "good mother",
    desc: "this is desc3",
  },
  {
    id: uuidv4(),
    title: "very good father",
    desc: "this is desc676",
  },
  {
    id: uuidv4(),
    title: "call brother",
    desc: "this is desc3",
  },
];

export default function UniqueId() {
  return (
    <Fragment>
      {Data.map((item) => {
        const { id, title, desc } = item;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        );
      })}
    </Fragment>
  );
}
