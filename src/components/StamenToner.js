import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { stamenToner } from 'pigeon-maps/providers'



export function StamenToner() {
    return (

<Map provider={stamenToner}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    color="red"
    defaultCenter={[50.879, 4.6997]}
    defaultZoom={11}
 width={window.innerWidth} height={window.innerHeight}  >
        </Map>
      )
}

export default StamenToner;



