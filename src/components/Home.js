import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Home.css'; // Import your CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <h1>WELCOME TO SEAFOOD SUPPLIER SYSTEM</h1>

            <div className="dashboard-section">
                <Link to="/productList" className="dashboard-link">
                    <div className="dashboard-item">
                        <h2>Products</h2>
                        <p>View and manage all products</p>
                    </div>
                </Link>

                <Link to="/orders" className="dashboard-link">
                    <div className="dashboard-item">
                        <h2>Orders</h2>
                        <p>View and manage all orders</p>
                    </div>
                </Link>
            </div>

            <div className="logout-section">
                <Link to="/" className="logout-link">Logout</Link>
            </div>
        </div>
    );
};

export default Home;
