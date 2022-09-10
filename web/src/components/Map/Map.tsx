import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import {  } from 'react-leaflet';
interface MapInterface {
  position: any
};

export const Map: React.FC<MapInterface> = (props) => {
  const { position } = props;
  return (
    <div style={{ height: '300px' }}>
      <MapContainer style={{ height: '100%' }} center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
      </MapContainer>
    </div>
  );
};
