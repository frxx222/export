import React from 'react';
import { useNavigate } from 'react-router-dom';
import './registration.css';

const Registration = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  const handleNavigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div class="container">
        <h1>EXPORTEASE</h1>
        <p class="tagline">Simplifying fisheries, empowering communities.</p>
        <div class="buttons">
            <button onClick={handleNavigateToLogin}>
                Login
            </button>
            <button onClick={handleNavigateToSignup}>
                Sign Up
            </button>
        </div>
    </div>
  );
};

export default Registration;