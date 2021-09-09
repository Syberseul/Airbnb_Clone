import React, { useState } from "react";
// https://github.com/visgl/react-map-gl
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// https://github.com/manuelbieh/geolib
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // transform searchResults obj into {latitude: xxx, longitude: xxx} obj
  const coordinates = searchResults.map((data) => ({
    latitude: data.lat,
    longitude: data.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 9,
  });

  return (
    <ReactMapGL
      mapStyle={process.env.mapbox_style}
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((res) => (
        <div key={res.id}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer text-xl animate-bounce"
              onClick={() => setSelectedLocation(res)}
            >
              📍
            </p>
          </Marker>

          {selectedLocation.long === res.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={res.lat}
              longitude={res.long}
              offsetLeft={-10}
              offsetTop={-10}
            >
              {res.title}
            </Popup>
          ) : (
            <></>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
