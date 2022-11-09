import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapTile() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyByGnJyIjVx8v82pE_bPublNUD4TGtuzqU",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo (() => ({ lat:44, lng: -80 }), []);
  // debugger
  return (
    <GoogleMap 
    zoom={10} 
    center={center}
    style={{height: `1000px`, width: `1000px`}}>
      <Marker position={center} />
    </GoogleMap>    
  );
}  



