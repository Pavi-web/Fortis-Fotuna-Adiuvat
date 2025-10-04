import { PlanetInfo } from '../types/types';

interface PlanetInfoPanelProps {
  planet: PlanetInfo;
  onClose: () => void;
}

const PlanetInfoPanel = ({ planet, onClose }: PlanetInfoPanelProps) => {
  return (
    <div className="planet-info-panel">
      <div className="panel-header">
        <h3>🪐 {planet.name}</h3>
        <button className="close-button" onClick={onClose}>✕</button>
      </div>
      <div className="panel-content">
        <p className="planet-description">{planet.description}</p>
        <div className="planet-details">
          <div className="detail-item">
            <span className="detail-label">Diameter:</span>
            <span className="detail-value">{planet.diameter}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Distance:</span>
            <span className="detail-value">{planet.distance}</span>
          </div>
          <div className="detail-fact">
            <strong>💡 Fun Fact:</strong> {planet.fact}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfoPanel;