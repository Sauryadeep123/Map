import React, { useState } from 'react'
import { Map, Marker,Overlay } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import { data1 } from "./data";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



function Description() {
  const center = [22.5726,88.3639]; // Set the initial center coordinates
  const markerData = [
    { id: 1, position: [23, 70], description: 'mumbai' },
    { id: 2, position: [22.5726,88.3639], description: 'Kolkata' },
    { id: 3, position: [30, 67], description: 'ahmedabad' },
    // Add more marker data as needed
  ];

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <Map center={center} zoom={3} height={400} width={'100%'}>
      {/* Render multiple markers */}
      {markerData.map((marker) => (
        <Marker
          key={marker.id}
          anchor={marker.position}
          onClick={() => handleMarkerClick(marker)}
          style={{
            color: selectedMarker === marker ? 'red' : 'blue',
          }}
        />
      ))}

      {/* Show details of the selected marker */}
      {selectedMarker && (
        <Overlay anchor={selectedMarker.position} offset={[0, -20]}>
          <div>
            
            <p>{selectedMarker.description}</p>
          </div>
        </Overlay>
      )}
    </Map>
  );
}

export default Description;
