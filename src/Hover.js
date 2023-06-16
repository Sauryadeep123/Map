
import React, { useState } from 'react';
import { Map, Marker,Overlay } from "pigeon-maps"

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const Hover = () => {
    const [markerPositions, setMarkerPositions] = useState([
        [51.5, -0.09], // Example marker position 1
        [22, 72], // Example marker position 2
        [43, 80], // Example marker position 3
      ]);
      const [activeMarker, setActiveMarker] = useState(null);
    
      const handleMarkerHover = (index) => {
        setActiveMarker(index);
      };
    
      const handleMarkerLeave = () => {
        setActiveMarker(null);
      };
    
      return (
        <div className="map-container">
          <Map center={[51.505, -0.09]} zoom={3} width={window.innerWidth} height={window.innerHeight}>
            {markerPositions.map((position, index) => (
              <Marker
                key={index}
                anchor={position}
                payload={index}
                onMouseOver={() => handleMarkerHover(index)}
                onMouseOut={handleMarkerLeave}
              />
            ))}
    
            {activeMarker !== null && (
              <Overlay anchor={markerPositions[activeMarker]} offset={[0, 10]}>
                <div className="tooltip">Marker {activeMarker + 1} Description</div>
              </Overlay>
            )}
          </Map>
        </div>
      );
    };
    

export default Hover;