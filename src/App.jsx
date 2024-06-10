import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './functions/auth/login';
import Signup from './functions/auth/signup';
import PassengerDashboard from './functions/dashboards/passengerDashboard';
import Activity from './functions/activity/activity';
import Unauthorized from './pages/unauthorized';
import Registration from './functions/auth/registration';
import Message from './functions/message/message'; 
import Profile from './functions/profile/profile';
import TransportPage from './functions/booking/booking';
import Unavailable from './pages/unavailable'

const App = () => {
  const role = localStorage.getItem('role');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/passengerDashboard" element={<PassengerDashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/messages" element={<Message />} /> {/* Corrected path */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/transport" element={<TransportPage/>} />
        <Route path="/unavailable" element={<Unavailable/>} />
      </Routes>
    </Router>
  );
};

export default App;