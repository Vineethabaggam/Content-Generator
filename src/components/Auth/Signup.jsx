import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/signup', formData);
      alert("Signup successful! Please login.");
      navigate('/'); // ✅ Redirect to login page
    } catch (err) {
      alert(err.response?.data?.message || "Signup error");
    }
  };
  

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData.name}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Signup;
