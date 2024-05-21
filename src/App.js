import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.baseURL = 'https://localhost:7279/api';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('/users/signup', {
                username,
                password
            });
            setMessage(response.data);
        } catch (error) {
            setMessage(error.response.data);  
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('/users/login', {
                username,
                password
            });
            setMessage(response.data);
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    return (
        <div className="container">
            <div className="form">
                <h1>Login / Signup</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="buttons">
                    <button onClick={handleSignup}>Sign Up</button>
                    <button onClick={handleLogin}>Login</button>
                </div>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default App;