import { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import { Annotation } from '../types/types';

interface OpenSeadragonViewerProps {
  annotations: Annotation[];
  onAnnotationClick: (annotation: Annotation) => void;
}

const OpenSeadragonViewer = ({ annotations, onAnnotationClick }: OpenSeadragonViewerProps) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const osdRef = useRef<OpenSeadragon.Viewer | null>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    // Initialize OpenSeadragon viewer
    osdRef.current = OpenSeadragon({
      element: viewerRef.current,
      prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.0/images/',
      tileSources: {
        type: 'image',
        // Replace with your preprocessed tile source or use a direct image for demo
        url: 'public/samples/suuu.jpg'
      },
      showNavigator: true,
      navigatorPosition: 'BOTTOM_RIGHT',
      animationTime: 0.5,
      blendTime: 0.1,
      constrainDuringPan: true,
      maxZoomPixelRatio: 2,
      minZoomLevel: 0.8,
      visibilityRatio: 1,
      zoomPerScroll: 1.2
    });

    // Add annotation overlays
    const viewer = osdRef.current;
    
    annotations.forEach((annotation) => {
      const overlay = document.createElement('div');
      overlay.className = 'annotation-marker';
      // overlay.innerHTML = '📍';
      overlay.title = annotation.title;
      
      overlay.onclick = () => onAnnotationClick(annotation);
      
      viewer.addOverlay({
        element: overlay,
        location: new OpenSeadragon.Point(annotation.x, annotation.y),
        placement: OpenSeadragon.Placement.CENTER
      });
    });

    return () => {
      if (osdRef.current) {
        osdRef.current.destroy();
        osdRef.current = null;
      }
    };
  }, [annotations, onAnnotationClick]);

  return <div ref={viewerRef} className="openseadragon-viewer" />;
};

export default OpenSeadragonViewer;