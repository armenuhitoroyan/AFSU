import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../style/Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[40.1792, 44.4991]} // Երևան քաղաքի կոորդինատները
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[40.1792, 44.4991]}>
          <Popup>Բարև, Երևան։</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
