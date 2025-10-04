import { useState } from 'react';
import ImageExplorer from './pages/ImageExplorer';
import SimulationExplorer from './pages/SimulationExplorer';
import './styles.css';

type Tab = 'image' | 'simulation';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('image');

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌌 Cosmic Explorer</h1>
        <p className="subtitle">NASA Space Apps Challenge Prototype</p>
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
        <p>Prototype demonstrating NASA imagery exploration + 3D simulation navigation</p>
      </footer>
    </div>
  );
}

export default App;