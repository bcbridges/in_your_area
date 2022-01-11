import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import {Point} from 'ol/geom'
import {fromLonLat} from 'ol/proj'
import {Vector} from 'ol/source'
import * as layer from 'ol/layer'

const Map = ({ children, zoom, center }) => {
  
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;
    
    var marker = new ol.Feature({
      geometry: new Point(
        fromLonLat([-104.991531, 39.742043])
      ),
    });

    var vectorSource = new Vector({
      features: [marker]
    })

    var markerVectorLayer = new layer.Vector({
      source: vectorSource,
    });

    map.addLayer(markerVectorLayer);
  })

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