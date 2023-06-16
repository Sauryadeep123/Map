
import React, { useState } from 'react'
import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import { data1 } from "./data";
export function Osm() {
    const markers = [
        { id: 1, position:[50.879, 4.6997],link:"https://www.youtube.com/" ,info:"leuven"},
        { id: 2, position: [28.7041, 77.1025],link:"https://www.youtube.com/",info:"New Delhi" },
       
      ];
     const [info,setInfo]=useState('')
      
      const handleMarkerClick = (link) => () => {
        window.location.href = link;
      };
      const showInfo=(info)=>{

      }
    return (
        <>
        <Map zoom={3}
          provider={osm}
          width={window.innerWidth} height={window.innerHeight}
          defaultCenter={[50.879, 4.6997]}
          >
            {/* {markers.map((marker) => (

         <a key={marker.id} href={marker.link} >
                <Marker anchor={marker.position} payload={marker.id} color="orange"/></a>

      ))} */}
       {/* {markers.map((marker) => (
       
          <Marker anchor={marker.position} payload={marker.id}  onClick={handleMarkerClick(marker.link)} color="red"
         
          />
        
         
       
      )
      
      )} */}
       {data1.map((marker) => (
       
       <Marker anchor={marker.position} payload={marker.id}   color="red" zoom={3}
      
       />
     
      
    
   )
   
   )}
          </Map>
          
          </>
                 
                 //<Marker width={50} anchor={[28.7041, 77.1025]} color='#FBB917'/>
        
      )
}

export default Osm;
