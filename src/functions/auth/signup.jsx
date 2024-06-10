import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const API_URL = 'https://glittering-kitten-e37565.netlify.app/.netlify/functions/api/auth/signup/';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('username', data.username); 
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        const errorData = await response.json();
        console.error('Signup failed', errorData);
        alert('Signup failed: ' + errorData.message);
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again later.');
    }
  };

  return (
    <div className='signup'>
      <div className='signupForm'>
        <div className='signupHead'>
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;