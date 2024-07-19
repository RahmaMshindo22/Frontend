import React from 'react';
import { useHistory } from 'react-router-dom';
import './Logout.css'; // Import your CSS file for styling

const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Perform logout actions (e.g., clearing session, local storage, etc.)
        // Redirect to login page or homepage after logout
        history.push('/login'); // Replace with your desired logout destination
    };

    return (
        <div className="logout-container">
            <h1>Logout</h1>
            <p>Are you sure you want to logout?</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
