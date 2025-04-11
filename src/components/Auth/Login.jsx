import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
  
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        alert("Login successful!");
        navigate('/home'); // ✅ Redirect after alert
      } else {
        alert("Invalid response from server");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };
  
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
