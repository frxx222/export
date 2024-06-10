import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './exportDashboard.css';

const userInterface = () => {
    return (
        <div class="home-body">
        <div class="container">
            <nav class="navigation">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="subinvoice.html">Submit Invoice</a></li>
                    <li><a href="myinvoice.html">My Invoice</a></li>
                    <li><a href="notification.html">Notifications</a></li>
                    <li><a href="profile.html">Profile</a></li>
                </ul>
            </nav>
            <main class="dashboard">
                <h1>Dashboard</h1>
                <div class="overview">
                    <div class="card">
                        <h2>Total Invoices</h2>
                        <p id="total-invoices">0</p>
                    </div>
                    <div class="card">
                        <h2>Pending Approval</h2>
                        <p id="pending-approval">0</p>
                    </div>
                    <div class="card">
                        <h2>Profile</h2>
                        <p id="username-display"></p>
                    </div>
                </div>
            </main>
        </div>
    </div>
    );
  }
  
  export default userInterface;