import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function map() {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    ></GoogleMap>
  );
}

const WrapedMap = withScriptjs(withGoogleMap(map));
const GoogleMaps = () => {
  return (
    <div className="map">
      <WrapedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBqnEibc7JeYJNfLaggPCDB_0KZG2swM8Y"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default GoogleMaps;
