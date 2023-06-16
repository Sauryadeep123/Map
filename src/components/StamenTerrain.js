import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { stamenTerrain } from 'pigeon-maps/providers'
import { useState } from 'react';

import { data1 } from "./data";


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
        
<Map  provider={stamenTerrain} zoom={3}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    
    
     width={window.innerWidth} height={window.innerHeight} defaultCenter={[50.879, 4.6997]} >
            {/* <Marker width={50} anchor={[50.879, 4.6997]} color='red' info="leuven" onMouseEnter={handleMarkerHover("leuven")}
            onMouseLeave={handleMarkerLeave}/> */}
              {data1.map((marker) => (
       
       <Marker anchor={marker.position} payload={marker.id}   color="red" zoom={3}
      
       />
     
      
    
   )
   
   )}
            
            </Map>
            <div>info</div>
          <div className="marker-info">
              {hoveredMarker}
            </div>

</>
          

        
      )
}

export default StamenTerrain;


