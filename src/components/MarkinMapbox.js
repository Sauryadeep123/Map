import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const MarkinMapbox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
 
  useEffect(() => {
    mapboxgl.accessToken =  'pk.eyJ1Ijoic2F0YWRoaSIsImEiOiJjbGk5eXY4YnYyNzVqM2ttbGluNTZtcG9yIn0.tnjc5LQdQut4F1C0acbzCw' // Replace with your Mapbox access token
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2
    });

    if (selectedPlace) {
      map.flyTo({
        center: selectedPlace.latlon,
        zoom: 14
      });

      new mapboxgl.Marker()
        .setLngLat(selectedPlace.latlon)
        .addTo(map);
    }

    return () => map.remove();
  }, [selectedPlace]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=pk.eyJ1Ijoic2F0YWRoaSIsImEiOiJjbGk5eXY4YnYyNzVqM2ttbGluNTZtcG9yIn0.tnjc5LQdQut4F1C0acbzCw`
      );
      const data = await response.json();

      if (data.features.length > 0) {
        const feature = data.features[0];
        setSelectedPlace({
          name: feature.place_name,
          latlon: feature.center
        });
        console.log(data)
      } else {
        setSelectedPlace(null);
        console.log('Location not found');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div id="map" style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default MarkinMapbox;
