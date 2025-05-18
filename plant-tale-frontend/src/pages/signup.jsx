import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import "./Login.css"; // Reusing the same CSS file
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebook } from 'react-icons/fa';
import { PiPlantFill } from 'react-icons/pi';

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gardenType: "",
    experience: "Beginner",
    plantTypes: [],
    careFrequency: "A few times a week",
    receiveNotifications: true
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
    
    // Check password strength
    if (name === "password") {
      let strength = 0;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "plantTypes") {
      let updatedPlantTypes = [...form.plantTypes];
      if (checked) {
        updatedPlantTypes.push(e.target.value);
      } else {
        updatedPlantTypes = updatedPlantTypes.filter(type => type !== e.target.value);
      }
      setForm({ ...form, plantTypes: updatedPlantTypes });
    } else {
      setForm({ ...form, [name]: checked });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    
    if (!termsAccepted) {
      setError("Please accept the Terms and Conditions");
      setIsLoading(false);
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, {
        displayName: form.fullName
      });
      
      // Here you would save the additional user data to Firestore or your database
      // For example: await addDoc(collection(db, "users"), { 
      //   uid: userCredential.user.uid, 
      //   fullName: form.fullName,
      //   gardenType: form.gardenType,
      //   experience: form.experience,
      //   plantTypes: form.plantTypes,
      //   careFrequency: form.careFrequency,
      //   receiveNotifications: form.receiveNotifications
      // });
      
      // Redirect or change UI will happen automatically through Firebase
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card signup-card">
        <div className="auth-header">
          <PiPlantFill className="auth-icon" />
          <h2>Join Plant Tale</h2>
          <p className="auth-subtitle">Let your garden bloom beautifully with intelligent care!</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="fullName">
              <FaUser className="input-icon" /> Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {form.password && (
              <div className="password-strength-meter">
                <div className="strength-bar">
                  <div 
                    className={`strength-bar-fill strength-${passwordStrength}`} 
                    style={{ width: `${passwordStrength * 25}%` }}
                  ></div>
                </div>
                <p className="strength-text">
                  {passwordStrength === 0 && "Weak"}
                  {passwordStrength === 1 && "Fair"}
                  {passwordStrength === 2 && "Good"}
                  {passwordStrength === 3 && "Strong"}
                  {passwordStrength === 4 && "Very Strong"}
                </p>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              <FaLock className="input-icon" /> Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <h3>Help us personalize your gardening experience 🌿</h3>
            
            <div className="form-group">
              <label htmlFor="gardenType">What best describes you?</label>
              <select
                id="gardenType"
                name="gardenType"
                value={form.gardenType}
                onChange={handleChange}
              >
                <option value="">Please select...</option>
                <option value="Home gardener">🏡 Home gardener</option>
                <option value="Small nursery owner">🏪 Small nursery owner</option>
                <option value="Beginner in gardening">🌱 Beginner in gardening</option>
                <option value="Student or plant enthusiast">📚 Student or plant enthusiast</option>
                <option value="Other">🌻 Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Which type of plants do you mostly care for?</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="flowers"
                    name="plantTypes"
                    value="Flowers"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="flowers">🌼 Flowers</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="herbs"
                    name="plantTypes"
                    value="Herbs"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="herbs">🌿 Herbs</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="trees"
                    name="plantTypes"
                    value="Trees or shrubs"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="trees">🌳 Trees or shrubs</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="succulents"
                    name="plantTypes"
                    value="Succulents or indoor plants"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="succulents">🌵 Succulents or indoor plants</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="vegetables"
                    name="plantTypes"
                    value="Vegetables or fruits"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="vegetables">🍅 Vegetables or fruits</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience">What is your gardening experience level?</label>
              <select
                id="experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
              >
                <option value="Beginner">🌱 Beginner</option>
                <option value="Intermediate">🌿 Intermediate</option>
                <option value="Advanced">🌳 Advanced</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="careFrequency">How often do you take care of your plants?</label>
              <select
                id="careFrequency"
                name="careFrequency"
                value={form.careFrequency}
                onChange={handleChange}
              >
                <option value="Daily">Daily</option>
                <option value="A few times a week">A few times a week</option>
                <option value="Only on weekends">Only on weekends</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </div>

            <div className="form-group notification-option">
              <input
                type="checkbox"
                id="receiveNotifications"
                name="receiveNotifications"
                checked={form.receiveNotifications}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="receiveNotifications">
                Would you like to receive personalized tips and reminders?
              </label>
            </div>
          </div>

          <div className="terms-condition">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>
            </label>
          </div>

          <button 
            type="submit" 
            className={`auth-button ${isLoading ? 'loading' : ''}`} 
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="auth-divider">
          <span>or sign up with</span>
        </div>

        <div className="social-login">
          <button className="social-button google">
            <FaGoogle /> Google
          </button>
        </div>

        <div className="auth-redirect">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        <div className="auth-quote">
          "To plant a garden is to believe in tomorrow."
        </div>
      </div>
    </div>
  );
};

export default Signup;