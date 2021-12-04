import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapContainer } from './styles';
import { Row, Title } from '../../global-styled-components';

interface Props {
  farm: any;
}

const FarmInfo: React.FC<Props> = ({ farm }) => {
  const defaultProps = {
    center: {
      lat: Number.parseFloat(farm.coordinates[0]),
      lng: Number.parseFloat(farm.coordinates[1]),
    },
    zoom: 12,
  };
  return (
    <>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAD-eJLqOMuPDFN27OQI2YLYO1ZIiWMmAU',
          }}
          zoom={defaultProps.zoom}
          center={defaultProps.center}
        />
      </MapContainer>
      <Title>{farm.name}</Title>
    </>
  );
};

export default FarmInfo;
