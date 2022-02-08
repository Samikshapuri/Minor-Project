import React from 'react';
import { Circle,
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  Marker, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCallback, useMemo, useRef, useState } from 'react';


const center = [51.505, -0.09]
const fillBlueOptions = { fillColor: 'blue' }
const redOptions = { color: 'red' }

function DraggableMarker() {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  )
}


function MapResources() {
  return <div>
    <MapContainer center={[51.505, -0.09]} zoom={15} style={{ height: '600px', width: '700px' }}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={redOptions}
        radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>   
      
      <DraggableMarker />
</MapContainer>
  </div>;
}

export default MapResources;
