import React, {useState} from 'react';
import Header from './Components/Header/Header';
import {Layers, TileLayer, VectorLayer} from './Components/Layers';
import { osm, vector } from "./Components/Source";
import { fromLonLat, get } from 'ol/proj';
import { Controls, FullScreenControl } from "./Components/Controls";
import Map from './Components/Map/Map'
import './App.css';

function App() {

  const [center, setCenter] = useState([-104.991531, 39.742043]);
  const [zoom, setZoom] = useState(12);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);

  return (
  <>
    <Header/>
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