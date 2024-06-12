"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon, LatLngTuple } from "leaflet";
import PageTitle from "./PageTitle";
import "leaflet/dist/leaflet.css";

const markers: { id: number; position: LatLngTuple; name: string }[] = [
  {
    id: 1,
    position: [41.015137, 28.97953],
    name: "Store 1",
  },
  {
    id: 2,
    position: [39.925533, 32.866287],
    name: "Store 2",
  },
  {
    id: 3,
    position: [40.193298, 29.074202],
    name: "Store 3",
  },
  {
    id: 4,
    position: [40.783333, 30.4],
    name: "Store 4",
  },
];

export default function Contact() {
  const customIcon = new Icon({
    iconUrl: "/pin.svg",
    iconSize: [40, 40],
  });

  return (
    <div id="contact" className="py-16 px-10 w-full mb-5">
      <PageTitle title="Contact" />
      <MapContainer
        center={[39.925533, 32.866287]}
        zoom={7}
        scrollWheelZoom={false}
        className="overflow-hidden h-[450px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {markers.map((mark) => (
          <Marker key={mark.id} position={mark.position} icon={customIcon}>
            <Popup>{mark.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
