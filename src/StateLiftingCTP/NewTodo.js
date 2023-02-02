import React, { useState } from "react";

const NewTodo = (props) => {
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const submitInput = (e) => {
    e.preventDefault();
    props.onNewTodoData(inputData);
  };
  return (
    <div>
      <form onSubmit={submitInput}>
        <label>name: </label>
        <input type='text' name='name' onChange={handleInputChange} />
        <button>add todo data</button>
      </form>
    </div>
  );
};

export default NewTodo;
