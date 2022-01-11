import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import {Layers, TileLayer, VectorLayer} from './Components/Layers';
import { osm, vector } from "./Components/Source";
import { fromLonLat, get } from 'ol/proj';
import { Controls, FullScreenControl } from "./Components/Controls";
import Map from './Components/Map/Map'
import './App.css';

function App() {

  const [center, setCenter] = useState([-97.7431, 30.2672]);
  const [zoom, setZoom] = useState(12);
  // const [showLayer1, setShowLayer1] = useState(true);
  // const [showLayer2, setShowLayer2] = useState(true);

  function getLocation() {
      navigator.geolocation.getCurrentPosition(onSuccess);
  }

    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;

        setCenter([longitude,latitude])
        console.log(`Your location: (${latitude},${longitude})`);
    };

    useEffect(() => {
    let currentLocation = getLocation();
    if (typeof currentLocation === 'undefined'){
      console.log("The current location came back undefined")
      setCenter([-97.7431, 30.2672])
    } else {
      console.log(currentLocation);
    }},[])


  return (
  <>
    <Header/>
    <div className="pageHead">
      <h1 className='pageTitle'>Vivax Pros - In Your Area</h1>
      <h2 className='pageDesc'>Explore the map to see where we have completed projects in your area.</h2>
    </div>
    <Map center={fromLonLat(center)} zoom={zoom}>
      <Layers>
        <TileLayer
          source={osm()}
          zIndex={0}
        />
      </Layers>
      <Controls>
        <FullScreenControl />
      </Controls>
    </Map>
    </> 
  );
}

export default App;