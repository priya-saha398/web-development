import React, { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  // const handleChangeName = (e) => {
  //   setUser({ name: e.target.value, email, password });
  // };
  // const handleChangeEmail = (e) => {};
  // const handleChangePassword = (e) => {
  //   setUser({ name, email, password: e.target.value });
  // };
  const handleSubmitForm = (e) => {
    console.log("form submitted");

    console.log(user);
    e.preventDefault();
  };
  const handleChange = (e) => {
    // const filledname = e.target.name;

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action='' onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor='name'>name: </label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>password: </label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
}
