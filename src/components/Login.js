import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password
      });

      // Handle successful login here (e.g., save token, redirect, etc.)
      setMessage(`Login successful! Welcome ${response.data.email}`);
      // Example: Redirect to another page
      window.location.href = '/Home';
    } catch (error) {
      setMessage('Login failed: ' + error.response.data);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div id="response">{message}</div>
      <p>Don't have an account? Click <a href="SignUp">Register</a></p>
    </div>
  );
};

export default Login;
