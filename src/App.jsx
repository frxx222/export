import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './functions/auth/login';
import Signup from './functions/auth/signup';
import ExportDashboard from './functions/dashboards/exportDashboard';
import Registration from './functions/auth/registration';


const App = () => {
  const role = localStorage.getItem('role');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/exportDashboard" element={<ExportDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;