
import { useState } from 'react';
import './App.css';
import Demo from './components/Demo';
import Mapbox from './components/Mapbox';
import MapboxHorizontal from './components/MapboxHorizontal';
import MapWithAutocomplete from './components/MapWithAutoComplete';
import MarkinMapbox from './components/MarkinMapbox';
import MyMap from './components/MyMap';
import Osm from './components/Osm';
import StamenTerrain from './components/StamenTerrain';
import StamenToner from './components/StamenToner';
import axios from 'axios';
import Description from './components/Description';
import Hover from './Hover';

 

function App() {
  
  
  const [map,setMap]=useState(<Demo/>);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({latlon:[50.879, 4.6997]});
  const obj = {
    "type1": <Demo  data={selectedPlace}/>,
    "type2": <Osm />,
    "type3": <StamenTerrain />,
    "type4": <StamenToner />,
    "type5": <Mapbox/>,
    "type6": <MapboxHorizontal />
  
  }
  const handlePlaceSelect = (value, place) => {
    setSearchValue(value);
    setSelectedPlace(place);
    suggestions.length=0;
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
    console.log(selectedPlace.latlon[0]);
    console.log(selectedPlace.latlon[1]);
  };
  return (
    <div id="box">
   
   
      <Hover/><br/>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => fetchLocationSuggestions(e.target.value)}
      />
     
      <button onClick={handleSearch}>Search</button><br/>
      <div id="boxa">
      
      {suggestions.length > 0 && (
        <ul >
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


      </div >
      
      <div id="boxb">
      <button val={1} onClick={()=>{setMap(obj.type1)}}>Type1</button>
      <button val={1} onClick={() => { setMap(obj.type2)}}>Type2</button>
      <button val={1} onClick={() => { setMap(obj.type3)}}>Type3</button>
      <button val={1} onClick={() => { setMap(obj.type4)}}>Type4</button>
      <button val={1} onClick={() => { setMap(obj.type5)}}>Type5</button>
      <button val={1} onClick={() => { setMap(obj.type6)}}>Type6</button>
      {map}
      </div>
   
      
      
      
       




    </div>
  );
}

export default App;
