import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapContainer } from './styles';
import { Row } from '../../global-styled-components';

interface Props {
  farm: any;
}

const FarmInfo: React.FC<Props> = ({ farm }) => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  console.log('farm', farm);
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
      <Row />
    </>
  );
};

export default FarmInfo;
