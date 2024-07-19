import React from 'react';
import './SignUp.css';

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      document.getElementById('response').innerHTML = 'Passwords do not match!';
      return;
    }

    const registrationData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        document.getElementById('response').innerHTML = `Successfully registered as ${email}`;
      } else {
        document.getElementById('response').innerHTML = 'Registration failed. Please try again.';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('response').innerHTML = 'An error occurred. Please try again later.';
    }
  };

  return (
    <div className="sign-in-container">
      <h1>REGISTER HERE</h1>
      <p>You can register here and continue exploring our services.</p>
      <div className="container">
        <h1>Register</h1>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <button type="submit">Register</button>
        </form>
        <div id="response"></div>
        <p>Already have an account<a href = "Login">Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;
