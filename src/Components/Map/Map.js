import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import {Point} from 'ol/geom'
import {fromLonLat} from 'ol/proj'
import {Vector} from 'ol/source'
import * as layer from 'ol/layer'
import * as style from 'ol/style'
let {pinData} = require('../MarkerData/pins.js');


const Map = ({ children, zoom, center }) => {
  
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;
    
    var vectorSource = new Vector("Overlay");

  pinData.forEach((pin) => {
      let lattitude = pin.lat;
      let longitude = pin.lon;

      var newMarker = new ol.Feature({
        geometry: new Point(
          fromLonLat([longitude, lattitude])
        ),
      });

      newMarker.setStyle(new style.Style({
        image: new style.Icon(({
          src: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
          crossOrigin: 'anonymous',
          // actual size of the image
          size: [512,512],
          // scaled down
          scale: 0.04,
        }))
      }));

      console.log(newMarker);
      vectorSource.addFeature(newMarker);
  });

  console.log(vectorSource)
    var markerVectorLayer = new layer.Vector({
      source: vectorSource,
    });

    map.addLayer(markerVectorLayer);

       });

  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: []
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);

  // zoom change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);

  // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center)
  }, [center])

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  )
}
export default Map;