import React, { Component } from "react";
// import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGhlYWx5ODMiLCJhIjoiY2xhaGQ3OWgxMDJydDN2cXJvdGVtcHZkZyJ9.IjCqX9Sm8gpEYjHzPLe8ng";

class Mapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 10,
      lat: 80,
      zoom: 4,
    };
  }

  componentDidMount() {
    const Map = new mapboxgl.Map({
      container: "this.mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  render() {
    return (
      <div>
        <div
          ref={(el) => (this.mapContainer = el)}
          style={{ width: "100%", height: "100vh" }}
        />
      </div>
    );
  }
}

export default Mapp;
