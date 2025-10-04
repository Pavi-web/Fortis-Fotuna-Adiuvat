import { useState } from 'react';
import OpenSeadragonViewer from '../components/OpenSeadragonViewer';
import AnnotationPanel from '../components/AnnotationPanel';
import { Annotation } from '../types/types';

const ImageExplorer = () => {
  const [selectedAnnotation, setSelectedAnnotation] = useState<Annotation | null>(null);
  
  // Demo annotations for the NASA image
  const annotations: Annotation[] = [
    {
      id: '1',
      title: 'Nebula Region',
      description: 'Dense stellar formation area with high concentrations of gas and dust.',
      x: 0.3,
      y: 0.4,
      type: 'nebula'
    },
    {
      id: '2',
      title: 'Star Cluster',
      description: 'A globular cluster containing thousands of ancient stars.',
      x: 0.7,
      y: 0.6,
      type: 'cluster'
    }
  ];

  return (
    <div className="image-explorer">
      <div className="explorer-container">
        <OpenSeadragonViewer 
          annotations={annotations}
          onAnnotationClick={setSelectedAnnotation}
        />
        
        {selectedAnnotation && (
          <AnnotationPanel 
            annotation={selectedAnnotation}
            onClose={() => setSelectedAnnotation(null)}
          />
        )}
      </div>
      
      <div className="explorer-info">
        <h2>High-Resolution Image Navigation</h2>
        <p>
          Explore NASA imagery with deep-zoom capabilities. Click on markers to learn more
          about celestial features. This demo showcases how gigapixel astronomical data
          can be navigated like Google Maps.
        </p>
        <div className="controls-help">
          <h3>Controls:</h3>
          <ul>
            <li>🖱️ <strong>Pan:</strong> Click and drag</li>
            <li>🔍 <strong>Zoom:</strong> Scroll wheel or pinch</li>
            <li> ⬅️ <strong>Reset:</strong> Reset the model</li>
            <li> 💯<strong>Full Size:</strong> Full size the model to view it more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageExplorer;