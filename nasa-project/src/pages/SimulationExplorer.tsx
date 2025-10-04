import { useState } from 'react';
import SolarSystemViewer from '../components/SolarSystemViewer';
import PlanetInfoPanel from '../components/PlanetInfoPanel';
import { PlanetInfo } from '../types/types';

const SimulationExplorer = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetInfo | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const planetsInfo: Record<string, PlanetInfo> = {
    earth: {
      name: 'Earth',
      description: 'Our home planet, the third from the Sun.',
      diameter: '12,742 km',
      distance: '149.6 million km from Sun',
      fact: 'The only known planet to harbor life.'
    },
    mars: {
      name: 'Mars',
      description: 'The Red Planet, fourth from the Sun.',
      diameter: '6,779 km',
      distance: '227.9 million km from Sun',
      fact: 'Has the largest volcano in the solar system, Olympus Mons.'
    },
    jupiter: {
      name: 'Jupiter',
      description: 'The largest planet in our solar system.',
      diameter: '139,820 km',
      distance: '778.5 million km from Sun',
      fact: 'Has at least 79 known moons, including the four large Galilean moons.'
    }
  };

  const handlePlanetClick = (planetName: string) => {
    const info = planetsInfo[planetName.toLowerCase()];
    if (info) {
      setSelectedPlanet(info);
    }
  };

  return (
    <div className="simulation-explorer">
      <div className="explorer-container">
        <SolarSystemViewer 
          onPlanetClick={handlePlanetClick}
          isPlaying={isPlaying}
        />
        
        {selectedPlanet && (
          <PlanetInfoPanel 
            planet={selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
          />
        )}
        
        <div className="simulation-controls">
          <button 
            className="control-button"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
        </div>
      </div>
      
      <div className="explorer-info">
        <h2>3D Solar System Navigation</h2>
        <p>
          Navigate through a simplified 3D model of our solar system. Click on planets
          to learn more. This demonstrates how immersive simulation navigation enables
          exploration of temporal and spatial relationships.
        </p>
        <div className="controls-help">
          <h3>Controls:</h3>
          <ul>
            <li>🖱️ <strong>Rotate:</strong> Left click and drag</li>
            <li>🔄 <strong>Pan:</strong> Right click and drag</li>
            <li>🔍 <strong>Zoom:</strong> Scroll wheel</li>
            <li>🪐 <strong>Info:</strong> Click planets for details</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimulationExplorer;