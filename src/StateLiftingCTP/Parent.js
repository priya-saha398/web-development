import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
const Parent = () => {
  const todoData = ["todo1", "todo2", "todo3", "todo4"];
  const [data, setData] = useState(todoData);
  const handleNewTodoData = (inputData) => {
    setData([...data, inputData]);
  };
  return (
    <div>
      <NewTodo onNewTodoData={handleNewTodoData} />
      <Todos todoData={data} />
    </div>
  );
};

export default Parent;
