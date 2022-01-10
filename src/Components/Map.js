import React from 'react';
import './Map.css';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

export default function AreaMap () {

    var latitude = -104.9903;
    var longitude = 39.7392;
  
//     function showLocation(position) {
//       latitude = position.coords.latitude;
//       longitude = position.coords.longitude;
//       console.log(position)
//       // alert("Latitude : " + latitude + " Longitude: " + longitude);
//    }
  
//    function errorHandler(err) {
//       latitude = -104.9903;
//       longitude = 39.7392;
//       if(err.code == 1) {
//          alert("Error: Access is denied!");
//       } else if( err.code == 2) {
//          alert("Error: Position is unavailable!");
//       }
//    }
  
//    function getLocation() {
   
//       if(navigator.geolocation) {
         
//          // timeout at 60000 milliseconds (60 seconds)
//          var options = {timeout:60000};
//          navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
//       } else {
  
//         alert("Sorry, browser does not support geolocation!");
//       }
//    } 
  
//   getLocation();

//   var map = new AreaMap({
//     target: 'map',
//     layers: [
//       new Tile({
//         source: new OSM()
//       })
//     ],
//     view: new View({
//       center: fromLonLat([-105.01489, 39.733077]),
//       zoom: 14
//     })
//   });

    return (<div id="map" className="map mapLocation"></div>);
};