import React from "react"
import { Map, Marker } from "pigeon-maps"

export function Demo() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>

<Map  defaultHeight={18} width={window.innerWidth} height={window.innerHeight} defaultCenter={[50.879, 4.6997]} >
       <Marker width={50} anchor={[50.879, 4.6997]} />
    
      
    </Map>
    </div>
    
  )
}

export default Demo;
