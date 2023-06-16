import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { stamenToner } from 'pigeon-maps/providers'
import { data1 } from "./data";


export function StamenToner() {
    return (

<Map provider={stamenToner} zoom={3}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    color="red"
    defaultCenter={[50.879, 4.6997]}
   
 width={window.innerWidth} height={window.innerHeight}  >
      {data1.map((marker) => (
       
       <Marker anchor={marker.position} payload={marker.id}   color="red" zoom={3}
      
       />
     
      
    
   )
   
   )}
        </Map>
      )
}

export default StamenToner;



