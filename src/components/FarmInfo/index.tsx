import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapContainer } from './styles';
import { Row, Title } from '../../global-styled-components';
import SearchBox from '../SearchBox';

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
        <Title>{farm.name}</Title>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAsJ4fmNN1UV7XbFfd8BUMwt3-PagFRCtE',
          }}
          zoom={defaultProps.zoom}
          center={defaultProps.center}
        />
      </MapContainer>
    </>
  );
};

export default FarmInfo;
