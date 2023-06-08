
import { useState } from 'react';
import './App.css';
import Demo from './components/Demo';
import MapWithAutocomplete from './components/MapWithAutoComplete';
import MyMap from './components/MyMap';
import Osm from './components/Osm';
import StamenTerrain from './components/StamenTerrain';
import StamenToner from './components/StamenToner';

function App() {
  const obj = {
    "type1": <Demo />,
    "type2": <Osm />,
    "type3": <StamenTerrain />,
    "type4": <StamenToner />

  }
  
  const [map,setMap]=useState(obj.type1);
  return (
    <>

      <MapWithAutocomplete/>
      <button val={1} onClick={()=>{setMap(obj.type1)}}>Type1</button>
      <button val={1} onClick={() => { setMap(obj.type2)}}>Type2</button>
      <button val={1} onClick={() => { setMap(obj.type3)}}>Type3</button>
      <button val={1} onClick={() => { setMap(obj.type4)}}>Type4</button>
      {map}
      
      




    </>
  );
}

export default App;
