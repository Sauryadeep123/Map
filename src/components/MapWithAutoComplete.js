import React, { useState } from 'react';

import { Map, Marker } from "pigeon-maps"


import axios from 'axios';


const MapWithAutocomplete = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = (value, place) => {
    setSearchValue(value);
    setSelectedPlace(place);
  };

  const fetchLocationSuggestions = async (value) => {
    setSearchValue(value);

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
      );

      const suggestions = response.data.map((place) => ({
        name: place.display_name,
        latlon: [parseFloat(place.lat), parseFloat(place.lon)],
      }));

      setSuggestions(suggestions);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  const fetchLocation = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchValue}`
      );

      if (response.data.length > 0) {
        const place = response.data[0];
        setSelectedPlace({
          name: place.display_name,
          latlon: [parseFloat(place.lat), parseFloat(place.lon)],
        });
      } else {
        setSelectedPlace(null);
        console.log('Location not found');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const handleSearch = () => {
    fetchLocation();
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => fetchLocationSuggestions(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((place) => (
            <li
              key={place.name}
              onClick={() => handlePlaceSelect(place.name, place)}
            >
              {place.name}
            </li>
          ))}
        </ul>
      )}

      {selectedPlace && (
        <div>
          <p>Latitude: {selectedPlace.latlon[0]}</p>
          <p>Longitude: {selectedPlace.latlon[1]}</p>
        </div>
      )}

      <Map center={[0, 0]} zoom={10} width={600} height={400}>
        {selectedPlace && (
          <Marker anchor={[selectedPlace.latlon[0], selectedPlace.latlon[1]]} payload={1} />
        )}
      </Map>
    </div>
  );
};

export default MapWithAutocomplete;
