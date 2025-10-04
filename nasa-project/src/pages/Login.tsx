import { useState } from 'react';
import { AuthFormData } from '../types/types';

interface LoginProps {
  onLogin: (email: string) => void;
  onSwitchToSignup: () => void;
}

const Login = ({ onLogin, onSwitchToSignup }: LoginProps) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(formData.email);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>🌌 Welcome Back</h1>
            <p>Log in to continue your cosmic journey</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="astronaut@cosmos.space"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit" className="auth-button">
              <span>Launch Explorer</span>
              <span className="button-icon">🚀</span>
            </button>
          </form>

          <div className="auth-footer">
            <p>
              New to Cosmic Explorer?{' '}
              <button onClick={onSwitchToSignup} className="link-button">
                Create Account
              </button>
            </p>
          </div>
        </div>

        <div className="auth-decoration">
          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
          <div className="planet planet-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;