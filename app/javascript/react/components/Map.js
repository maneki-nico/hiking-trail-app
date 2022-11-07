import React from 'react'
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '50vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  )
}

export default React.memo(Map)