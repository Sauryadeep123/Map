import React from "react"
import { Map, Marker,Overlay } from "pigeon-maps"
import { data1 } from "./data";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useState } from 'react';

export function Demo(props) {
  console.log("props " + props);
  console.log("data1 "+data1)
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
                     { Object.keys(props).length !=0?
                        console.log( props.data):console.log('object')
                       
                     }


<Map  zoom={3} defaultHeight={18} width={window.innerWidth} height={window.innerHeight} defaultCenter={[50.879, 4.6997]} >
       <Marker width={50} anchor={Object.keys(props).length ==0?[50.879, 4.6997]:[props.data.latlon[0], props.data.latlon[1]]} color="red" />
      {
     // Object.keys(props).length ==0?[]:data1.push([props.data.latlon[0],props.data.latlon[1]])
      
      }
       {data1.map((marker) => (
       
       <Marker anchor={marker.position} payload={marker.id}   color="red" zoom={3} onClick={() => handleMarkerClick(marker)}>

{/* Show details of the selected marker */}
{selectedMarker && (
    <Overlay anchor={selectedMarker.position} offset={[0, -20]} onMouseEnter={()=>{console.log("click")}}>
          <div>
            
            <p>{marker.name}</p>
          </div>
        </Overlay>
      )}
       </Marker>
      
       
      
     
      
    
   )
   
   )}
   
    </Map>
    </div>
    
  )
}

export default Demo;
