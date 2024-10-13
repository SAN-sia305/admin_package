import React, { useState } from 'react';
import './Login.css'; // Ensure you have the correct path to your CSS

const Login = () => {
    const [staffId, setStaffId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {  // Updated to match backend port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ staffId, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Redirect to the database altering page on successful login
                window.location.href = '/db-alter'; // Update with your actual path
            } else {
                // Handle error (e.g., show a message)
                alert(data.message); // Display error message
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Log in to your account</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="staffId">Staff ID</label>
                        <input
                            type="text"
                            id="staffId"
                            value={staffId}
                            onChange={(e) => setStaffId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group password-group">
    <label htmlFor="password">Password</label>
    <div className="input-wrapper">
        <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <span className="password-visibility" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
    </div>
</div>

                    <button type="submit">Login</button>
                    <p>
                        <a href="#">Forgot Password?</a>
                    </p>
                </form>
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
