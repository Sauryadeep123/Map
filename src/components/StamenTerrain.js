import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { stamenTerrain } from 'pigeon-maps/providers'
import { useState } from 'react';




export function StamenTerrain() {
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const handleMarkerHover = (marker) => () => {
        setHoveredMarker(marker);
      };
      
      const handleMarkerLeave = () => {
        setHoveredMarker(null);
      };
    return (
        <>
        
<Map  provider={stamenTerrain}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    
    
    defaultZoom={11} width={window.innerWidth} height={window.innerHeight} defaultCenter={[50.879, 4.6997]} >
            <Marker width={50} anchor={[50.879, 4.6997]} color='red' info="leuven" onMouseEnter={handleMarkerHover("leuven")}
            onMouseLeave={handleMarkerLeave}/>
            </Map>
            <div>info</div>
          <div className="marker-info">
              {hoveredMarker}
            </div>

</>
          

        
      )
}

export default StamenTerrain;


