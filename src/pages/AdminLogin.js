import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simple authentication logic (replace with API call)
        if (username === 'admin' && password === 'admin123') {
            navigate('/admin-dashboard');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <div className="form-group">
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter username"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter password"
                />
            </div>
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default AdminLogin;
