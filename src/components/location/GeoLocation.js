import React from "react";
import { useGeolocated } from "react-geolocated";

const GeoLocation = (props) => {
  alert("g")
  return props.isGeolocationAvailable ? (
    props.isGeolocationEnabled ? (
      props.coords ? (
        <div>
          <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
          <h3 style={{ color: "red" }}>
            Current latitude and longitude of the user is
          </h3>
          <ul>
            <li>latitude - {props.coords.latitude}</li>
            <li>longitude - {props.coords.longitude}</li>
          </ul>
        </div>
      ) : (
        <h1>Getting the location data</h1>
      )
    ) : (
      <h1>Please enable location on your browser</h1>
    )
  ) : (
    <h1>Please, update your or change the browser</h1>
  );
};

export default (GeoLocation)(useGeolocated)
