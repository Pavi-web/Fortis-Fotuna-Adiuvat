import { useState } from 'react';
import { Login, Signup } from './pages/Login';
import ImageExplorer from './pages/ImageExplorer';
import SimulationExplorer from './pages/SimulationExplorer';
import { User } from './types/types'
import './styles.css';

type Tab = 'image' | 'simulation';
type AuthView = 'login' | 'signup';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authView, setAuthView] = useState<AuthView>('login');
  const [activeTab, setActiveTab] = useState<Tab>('image');

  const handleLogin = (email: string) => {
    // In a real app, you would validate credentials with a backend
    setUser({ email, name: email.split('@')[0] });
  };

  const handleSignup = (email: string, name: string) => {
    // In a real app, you would create an account via backend
    setUser({ email, name });
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('image');
  };

  // Show auth pages if user is not logged in
  if (!user) {
    return authView === 'login' ? (
      <Login 
        onLogin={handleLogin}
        onSwitchToSignup={() => setAuthView('signup')}
      />
    ) : (
      <Signup 
        onSignup={handleSignup}
        onSwitchToLogin={() => setAuthView('login')}
      />
    );
  }

  // Show main app if user is logged in
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1>Cosmic Explorer</h1>
          </div>
          <div className="header-right">
            <div className="user-info">
              <span className="user-greeting">Welcome, {user.name}!</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'image' ? 'active' : ''}`}
          onClick={() => setActiveTab('image')}
        >
          📷 Image Explorer
        </button>
        <button
          className={`tab-button ${activeTab === 'simulation' ? 'active' : ''}`}
          onClick={() => setActiveTab('simulation')}
        >
          🪐 Simulation Explorer
        </button>
      </nav>

      <main className="app-content">
        {activeTab === 'image' ? <ImageExplorer /> : <SimulationExplorer />}
      </main>

      <footer className="app-footer">
        <p>Ohh Nothing beyond this! Stay tuned for more! 😉</p>
      </footer>
    </div>
  );
}

export default App;