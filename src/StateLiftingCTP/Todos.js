import React from "react";
import Todo from "./Todo";
const Todos = (props) => {
  return (
    <div>
      {props.todoData.map((todo, index) => {
        return (
          <div key={index}>
            <Todo todo={todo}></Todo>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
