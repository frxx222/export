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
    <div className='registration'>
      <div className='registration-content'>
        <h1>EXPORTEASE</h1>
        <p>Simplifying fisheries, empowering communities.</p>
        <div className='registration-buttons'>
          <button onClick={handleNavigateToLogin}>
            Login
          </button>
          <button onClick={handleNavigateToSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;