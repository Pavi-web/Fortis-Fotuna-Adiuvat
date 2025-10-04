import { Annotation } from '../types/types';

interface AnnotationPanelProps {
  annotation: Annotation;
  onClose: () => void;
}

const AnnotationPanel = ({ annotation, onClose }: AnnotationPanelProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'nebula': return '🌫️';
      case 'cluster': return '✨';
      case 'galaxy': return '🌌';
      default: return '⭐';
    }
  };

  return (
    <div className="annotation-panel">
      <div className="panel-header">
        <h3>
          <span className="panel-icon">{getIcon(annotation.type)}</span>
          {annotation.title}
        </h3>
        <button className="close-button" onClick={onClose}>✕</button>
      </div>
      <div className="panel-content">
        <p>{annotation.description}</p>
        <div className="panel-metadata">
          <span className="metadata-label">Type:</span>
          <span className="metadata-value">{annotation.type}</span>
        </div>
      </div>
    </div>
  );
};

export default AnnotationPanel;