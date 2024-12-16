import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LogIn.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        if (!email || !password) {
            // toast.error('Please fill both fields!', {
            //     position: toast.POSITION.TOP_CENTER,
            //     autoClose: 3000,
            // });
            // return;
            alert("Invalid Credentials")
        }
    
        try {
            console.log('Calling login API with:', { email, password });
            const response = await fetch('http://localhost:5066/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            console.log('Response:', response.status);
    
            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                navigate('/home');
                
                // Assuming the token is in 'data.token' (check API response for actual key name)
                if (data.token) {
                    // Save JWT token to sessionStorage
                    sessionStorage.setItem('token', data.token);
                    console.log('Token saved to sessionStorage:', data.token);
    
                    toast.success('Login successful!', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                    });
    
                    // Navigate to the home page
                    console.log('Navigating to /home...');
                    navigate('/home');
                } else {
                    toast.error('Token not found in response', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                    });
                }
                
            } else {
            //    c onst error = await response.text();
                // If response is not ok, show alert for invalid credentials
                alert('Invalid Credentials ');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An unexpected error occurred. Please try again.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
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
                            required
                            placeholder="Email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
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
