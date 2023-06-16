
import React, { useEffect, useState } from 'react';


import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:  'pk.eyJ1Ijoic2F0YWRoaSIsImEiOiJjbGk5eXY4YnYyNzVqM2ttbGluNTZtcG9yIn0.tnjc5LQdQut4F1C0acbzCw', 
});

const MapboxHorizontal = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapLoaded && map) {
      //const bounds = new mapboxgl.LngLatBounds();
      // Add your desired marker coordinates to the bounds
     // bounds.extend([50.879, 4.6997]);

      //map.fitBounds(bounds, { padding: 20 });
    }
  }, [mapLoaded, map]);

  const handleMapLoad = (map) => {
    setMapLoaded(true);
    setMap(map);
  };

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11" // Replace with desired map style
      containerStyle={{
        height: '700px',
        width: '100%',
      }}
      zoom={[1]}
      onStyleLoad={handleMapLoad}
    >
      {mapLoaded && (
        <Marker coordinates={[50.879, 4.6997]}> {/* Replace with desired marker coordinates */}
          <div>Marker</div> {/* Replace with desired marker content */}
        </Marker>
      )}
    </Map>
  );
};

export default MapboxHorizontal;
