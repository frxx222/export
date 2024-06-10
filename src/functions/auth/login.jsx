import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const API_URL = 'https://glittering-kitten-e37565.netlify.app/.netlify/functions/api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const textResponse = await response.text(); // Get the text response first
      console.log('Response text:', textResponse);

      if (!response.ok) {
        console.error('Login failed:', textResponse);
        return;
      }

      const data = JSON.parse(textResponse);
      navigate('/exportDashboard');
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div class="container">
        <h1>Welcome Back!</h1>
        <p class="tagline">Log in to your account</p>
        <form onSubmit={handleLoginSubmit}>
            <div class="input-container">
                <i class="fas fa-user"></i>
                <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div class="input-container">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
        </form>
        <button type="submit" class="btn login">Login</button>
    </div>
  );
};

export default Login;