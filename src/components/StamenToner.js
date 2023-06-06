import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { stamenToner } from 'pigeon-maps/providers'



export function StamenToner() {
    return (
        <Map
          provider={stamenToner}
          dprs={[1, 2]} // this provider supports HiDPI tiles
          height={200}
          defaultCenter={[50.879, 4.6997]}
          defaultZoom={11}><Marker width={50} anchor={[50.879, 4.6997]} color='red'/></Map>
      )
}

export default StamenToner;



