
import React, { useState } from 'react'
import { Map, Marker } from "pigeon-maps"



const MyMap = () => {
    const markers = [
        { id: 1, position:[50.879, 4.6997],link:"https://www.youtube.com/" ,info:"leuven"},
        { id: 2, position: [28.7041, 77.1025],link:"https://www.youtube.com/",info:"New Delhi" },
       
      ];

  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMarkerHover = (marker) => () => {
    setHoveredMarker(marker);
  };

  const handleMarkerLeave = () => {
    setHoveredMarker(null);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map  zoom={13} width={window.innerWidth} height={window.innerHeight}>
        

        {markers.map((marker) => (
          <React.Fragment key={marker.id}>
            <Marker
              anchor={marker.position}
              payload={marker.id}
              onMouseEnter={handleMarkerHover(marker)}
              onMouseLeave={handleMarkerLeave}
            />
            {hoveredMarker === marker && (
              <div className="marker-info">
                {marker.info}
              </div>
            )}
          </React.Fragment>
        ))}
      </Map>
    </div>
  );
};

export default MyMap;
