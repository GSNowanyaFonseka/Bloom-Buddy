import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import "./login.css";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import { PiPlantFill } from 'react-icons/pi';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      // Redirect or change UI will happen automatically through Firebase
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src={logo} alt="logo"></img>
          <h2>Welcome back to Plant Tale!</h2>
          <p className="auth-subtitle">Let's take care of your garden together.</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="input-icon" /> Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            className={`auth-button ${isLoading ? 'loading' : ''}`} 
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="auth-divider">
          <span>or login with</span>
        </div>

        <div className="social-login">
          <button className="social-button google">
            <FaGoogle /> Google
          </button>
        </div>

        <div className="auth-redirect">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>

        <div className="auth-quote">
          "The best time to plant a tree was 20 years ago. The second best time is now."
        </div>
      </div>
    </div>
  );
};

export default Login;