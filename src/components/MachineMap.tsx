import { LatLngExpression, divIcon } from 'leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

type MarkerType = {
  id: string,
  coords: LatLngExpression,
  selected: boolean,
  status: string,
}

export default function MachineMap({markers, onSelect}: {markers: MarkerType[], onSelect: (id: string) => void}) {

  const onMarkerClick = (id: string) => {
    onSelect(id);
  }

  return(
    <MapContainer center={markers[0].coords} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(marker => (
        <Marker
          key={marker.id}
          icon={divIcon({
            className: `marker ${marker.selected ? 'selected' : ''} ${marker.status}`,
            iconAnchor: [0, 24],
            popupAnchor: [0, -36],
            html: `<span />`
          })}
          position={marker.coords}
          eventHandlers={{
            click: () => onMarkerClick(marker.id),
          }}
        />
      ))}
    </MapContainer>
  )
}