import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // You can add login validation here if needed
        navigate('/');
    }

    return (
        <div className="login-container">
            <div className="left-section">
                <h1>Hello ORIC!</h1>
                <p>Skip repetitive and manual sales-marketing tasks. Get highly productive through automation and save tons of time!</p>
            </div>
            <div className="right-section">
                <img src="/oric.png" alt="ORIC Logo" className="logo-image" />
                <div className="form-container">
                    <h2>Nice to see you again</h2>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" placeholder="Email or phone number" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" className="toggle" />
                        <label>Remember me</label>
                    </div>
                    <button className="login-button" onClick={handleLogin}>Log in</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
