import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import { FarmContainer, MapContainer } from './styles';
import { Row, Title } from '../../global-styled-components';
import SearchBox from '../SearchBox';

interface Props {
  farm: any;
}

const FarmInfo: React.FC<Props> = ({ farm }) => {
  const coordenates = {
    lat: Number.parseFloat(farm.coordinates[0]),
    lng: Number.parseFloat(farm.coordinates[1]),
  };
  const defaultProps = {
    center: coordenates,
    zoom: 12,
  };
  const markerRef = useRef();
  return (
    <FarmContainer>
      <Title>{farm.name}</Title>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAsJ4fmNN1UV7XbFfd8BUMwt3-PagFRCtE',
          }}
          onGoogleApiLoaded={({ maps, map }) => {
            markerRef.current = new maps.Marker({
              position: coordenates,
              map,
              title: 'Posição da fazenda',
            });
          }}
          zoom={defaultProps.zoom}
          center={defaultProps.center}
        />
      </MapContainer>
    </FarmContainer>
  );
};

export default FarmInfo;
