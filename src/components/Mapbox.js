import React from 'react'
import { data1 } from "./data";


import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:  'pk.eyJ1Ijoic2F0YWRoaSIsImEiOiJjbGk5eXY4YnYyNzVqM2ttbGluNTZtcG9yIn0.tnjc5LQdQut4F1C0acbzCw', // Replace with your Mapbox access token
}); 

const Mapbox = () => {
  return (
    <Map
      style='mapbox://styles/mapbox/streets-v12' // Replace with desired map style
      containerStyle={{
        height: '700px',
        width: '100%',
      }}
      zoom={[2]}
      projection= 'naturalEarth'
      //center={[50.879, 4.6997]} // Replace with desired initial map center coordinates
    >
      {/* <Marker coordinates={[50.879, 4.6997]}> 
        <div>Marker</div> 
      </Marker> */}
     
       
       <Marker anchor={[43.7128,102.0060]}   color="red" zoom={3}
      
       />
     
      
    
  


      
    </Map>
  );
};

export default Mapbox;
