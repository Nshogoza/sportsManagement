import React, { useState } from 'react';

function Todo() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [submit, submitted] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    setForm({
      username: data.username,
      email: data.email,
      password: data.password
    });
    submitted(true);
  };

  const updateField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const themeStyles = {
    input: {
      border: "2px solid black",
      height: "20px",
      width: "100px"
    }
  };

  return (
    <div>
       
      <form onSubmit={printValues}>
      <h1>Login Form</h1>
        <label>
          Username:
          <input
            value={data.username}
            name="username"
            onChange={updateField}
            style={themeStyles.input}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            value={data.email}
            name="email"
            onChange={updateField}
            style={themeStyles.input}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={data.password}
            name="password"
            onChange={updateField}
            style={themeStyles.input} type='password'
          />
        </label>
        <br />
        <button>Submit</button>
        <a href="#">Don/t have an account</a>
      </form>
      {submit && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Username: {form.username}</p>
          <p>Email: {form.email}</p>
          <p>Password: {form.password}</p>
        </div>
      )}
    </div>
  );
}

export default Todo;
