import { useState, useEffect } from 'react';

interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

// Star field component
const StarField = () => {
  const [stars, setStars] = useState<Array<{x: number, y: number, size: number, duration: number}>>([]);
  
  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2
    }));
    setStars(newStars);
  }, []);
  
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: '#fff',
            animation: `twinkle ${star.duration}s infinite ease-in-out`,
            opacity: 0.8
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

// Floating astronaut component
const FloatingAstronaut = () => (
  <div style={{
    position: 'absolute',
    right: '10%',
    top: '20%',
    fontSize: '80px',
    animation: 'float 6s ease-in-out infinite',
    filter: 'drop-shadow(0 0 20px rgba(147, 197, 253, 0.5))',
    zIndex: 1
  }}>
    🧑‍🚀
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(-5deg); }
        50% { transform: translateY(-30px) rotate(5deg); }
      }
    `}</style>
  </div>
);

// Shooting star component
const ShootingStar = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  if (!visible) return null;
  
  return (
    <div style={{
      position: 'absolute',
      top: '20%',
      right: '-100px',
      width: '2px',
      height: '2px',
      background: 'white',
      borderRadius: '50%',
      boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
      animation: 'shooting 1s linear forwards'
    }}>
      <style>{`
        @keyframes shooting {
          from {
            transform: translate(0, 0);
            opacity: 1;
          }
          to {
            transform: translate(-800px, 400px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Planet component
const Planet = ({ size, color, top, left, duration }: {
  size: number;
  color: string;
  top: string;
  left: string;
  duration: number;
}) => (
  <div style={{
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: `radial-gradient(circle at 30% 30%, ${color}, #000)`,
    top,
    left,
    animation: `orbit ${duration}s linear infinite`,
    boxShadow: `0 0 30px ${color}`,
    opacity: 0.6
  }}>
    <style>{`
      @keyframes orbit {
        from { transform: rotate(0deg) translateX(30px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
      }
    `}</style>
  </div>
);

// Login Component
const Login = ({ onLogin, onSwitchToSignup }: {
  onLogin: (email: string) => void;
  onSwitchToSignup: () => void;
}) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      onLogin(formData.email);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0a0e27, #1a1d3f, #0f0f23)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarField />
      <ShootingStar />
      <FloatingAstronaut />
      
      <Planet size={80} color="#6366f1" top="10%" left="15%" duration={20} />
      <Planet size={60} color="#ec4899" top="70%" left="80%" duration={15} />
      <Planet size={50} color="#8b5cf6" top="85%" left="10%" duration={25} />
      
      <div style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '48px',
        width: '100%',
        maxWidth: '450px',
        boxShadow: '0 0 60px rgba(99, 102, 241, 0.3), inset 0 0 40px rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        position: 'relative',
        zIndex: 10,
        animation: 'slideUp 0.8s ease-out'
      }}>
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
            50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.8); }
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          .input-glow:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
          }
          
          .button-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.6);
          }
          
          .button-hover:active {
            transform: translateY(0);
          }
        `}</style>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="./samples/fortis1.jpg" alt="Logo" style={{ width: '50px' }}/>
          <h1 style={{
            color: 'white',
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '8px',
            background: 'linear-gradient(to right, #93c5fd, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Welcome Back
          </h1>
          <p style={{
            color: '#94a3b8',
            fontSize: '14px'
          }}>
            Log in to continue your cosmic journey
          </p>
        </div>

        <div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#e2e8f0',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="astronaut@cosmos.space"
              className="input-glow"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(30, 41, 59, 0.8)',
                border: `2px solid ${errors.email ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && (
              <span style={{
                display: 'block',
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {errors.email}
              </span>
            )}
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              color: '#e2e8f0',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="••••••••"
              className="input-glow"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(30, 41, 59, 0.8)',
                border: `2px solid ${errors.password ? '#ef4444' : 'rgba(99, 102, 241, 0.3)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            />
            {errors.password && (
              <span style={{
                display: 'block',
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {errors.password}
              </span>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="button-hover"
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? (
              <>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '3px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                Launching...
              </>
            ) : (
              <>
                <span>Launch Explorer</span>
                <span>🚀</span>
              </>
            )}
          </button>
        </div>

        <div style={{
          marginTop: '24px',
          textAlign: 'center',
          color: '#94a3b8',
          fontSize: '14px'
        }}>
          <p>
            New to Cosmic Explorer?{' '}
            <button
              onClick={onSwitchToSignup}
              style={{
                background: 'none',
                border: 'none',
                color: '#93c5fd',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '14px'
              }}
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Signup Component
const Signup = ({ onSignup, onSwitchToLogin }: {
  onSignup: (email: string, name: string) => void;
  onSwitchToLogin: () => void;
}) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    name: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ 
    email?: string; 
    password?: string; 
    name?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
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
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        onSignup(formData.email, formData.name || '');
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0a0e27, #1a1d3f, #0f0f23)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarField />
      <ShootingStar />
      <FloatingAstronaut />
      
      <Planet size={80} color="#6366f1" top="10%" left="15%" duration={20} />
      <Planet size={60} color="#ec4899" top="70%" left="80%" duration={15} />
      <Planet size={50} color="#8b5cf6" top="85%" left="10%" duration={25} />
      
      <div style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '48px',
        width: '100%',
        maxWidth: '450px',
        boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.1)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        position: 'relative',
        zIndex: 10,
        animation: 'slideUp 0.8s ease-out'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
          <h1 style={{
            color: 'white',
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '8px',
            background: 'linear-gradient(to right, #93c5fd, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'glow 2s ease-in-out infinite'
          }}>
            Join the Exploration
          </h1>
          <p style={{
            color: '#94a3b8',
            fontSize: '14px'
          }}>
            Create your account and explore the cosmos
          </p>
        </div>

        <div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#e2e8f0',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Neil Armstrong"
              className="input-glow"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(30, 41, 59, 0.8)',
                border: `2px solid ${errors.name ? '#ef4444' : 'rgba(139, 92, 246, 0.3)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            />
            {errors.name && (
              <span style={{
                display: 'block',
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {errors.name}
              </span>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#e2e8f0',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="astronaut@cosmos.space"
              className="input-glow"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(30, 41, 59, 0.8)',
                border: `2px solid ${errors.email ? '#ef4444' : 'rgba(139, 92, 246, 0.3)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && (
              <span style={{
                display: 'block',
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {errors.email}
              </span>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#e2e8f0',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="••••••••"
              className="input-glow"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(30, 41, 59, 0.8)',
                border: `2px solid ${errors.password ? '#ef4444' : 'rgba(139, 92, 246, 0.3)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            />
            {errors.password && (
              <span style={{
                display: 'block',
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {errors.password}
              </span>
            )}
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              color: '#e2e8f0',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) {
                  setErrors({ ...errors, confirmPassword: undefined });
                }
              }}
              onKeyPress={handleKeyPress}
              placeholder="••••••••"
              className="input-glow"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(30, 41, 59, 0.8)',
                border: `2px solid ${errors.confirmPassword ? '#ef4444' : 'rgba(139, 92, 246, 0.3)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            />
            {errors.confirmPassword && (
              <span style={{
                display: 'block',
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px'
              }}>
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="button-hover"
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246))',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? (
              <>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '3px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                Creating Account...
              </>
            ) : (
              <>
                <span>Create Account</span>
              </>
            )}
          </button>
        </div>

        <div style={{
          marginTop: '24px',
          textAlign: 'center',
          color: '#94a3b8',
          fontSize: '14px'
        }}>
          <p>
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              style={{
                background: 'none',
                border: 'none',
                color: '#a78bfa',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '14px'
              }}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Demo App
// Export Login and Signup components
export { Login, Signup };

// Demo App for preview
export default function App() {
  const [currentView, setCurrentView] = useState<'login' | 'signup'>('login');

  const handleLogin = (email: string) => {
    alert(`Logging in with: ${email}`);
  };

  const handleSignup = (email: string, name: string) => {
    alert(`Creating account for: ${name} (${email})`);
  };

  return (
    <>
      {currentView === 'login' ? (
        <Login 
          onLogin={handleLogin}
          onSwitchToSignup={() => setCurrentView('signup')}
        />
      ) : (
        <Signup 
          onSignup={handleSignup}
          onSwitchToLogin={() => setCurrentView('login')}
        />
      )}
    </>
  );
}