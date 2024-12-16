import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toastify
import './LogIn.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            toast.error('Please fill both fields!', {
                position: toast.POSITION.TOP_CENTER, // Position the toast at the top center
                autoClose: 3000, // Closes after 3 seconds
            });
            return;
        }
        navigate('/home');
    };

    return (
        <div className="login-container">
            <ToastContainer /> {/* Toast container to render notifications */}
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
                        <input
                            type="text"
                            placeholder="Email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" className="toggle" />
                        <label>Remember me</label>
                    </div>
                    <button className="login-button" onClick={handleLogin}>Log In</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
