import React from "react";

// import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

// CSS import
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGhlYWx5ODMiLCJhIjoiY2xhaGQ3OWgxMDJydDN2cXJvdGVtcHZkZyJ9.IjCqX9Sm8gpEYjHzPLe8ng";

const Map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-104.9846, 39.73917], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// const Mapp = (Component) => {
//   constructor(props);
//   {
//     super(props);
//     this.state = {
//       lng: 10,
//       lat: 80,
//       zoom: 4,
//     };
//   }
// };

export default Map;
