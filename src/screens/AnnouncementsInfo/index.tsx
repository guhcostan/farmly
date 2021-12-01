import React from 'react';
import { BrowserView } from 'react-device-detect';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Banner from '../../components/Banner';
import AnnouncementCard from '../../components/AnnouncementCard';
import { Card } from './styles';

import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import FilterTop from '../../components/FilterTop';
import Filter from '../../components/FilterLeft';
import PhotoPreview from '../../components/PhotoPreview';
import AnnouncementMain from '../../components/AnnouncementMain';

interface Params {
  id: string;
}

const AnnouncementsInfo: React.FC = (props) => {
  const { id } = useParams<Params>();
  const thumbmails = [
    { url: 'https://img.olx.com.br/images/78/789141929491690.jpg' },
    { url: 'https://img.olx.com.br/images/78/783152805778181.jpg' },
  ];
  const { data, error } = useQuery(
    gql`
      query getAnnouncements($id: ID!) {
        announcement(id: $id) {
          nOx
          value
          nMonths
          breed {
            name
          }
          farm {
            city
            state
          }
        }
      }
    `,
    {
      variables: {
        id,
      },
    }
  );
  if (!data) {
    return <div />;
  }
  const { announcement } = data;
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <BackgroundColorWidth>
      <Container style={{ display: 'flex' }}>
        <Card>
          <AnnouncementMain
            photos={thumbmails.map((t) => t.url)}
            nOxen={announcement.nOx}
            nMonths={announcement?.nMonths}
            city={announcement.farm?.city}
            price={announcement.value}
            state={announcement.farm?.state}
            breed={announcement.breed?.name}
          />
          <div style={{ width: '100%', height: 200 }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyAD-eJLqOMuPDFN27OQI2YLYO1ZIiWMmAU',
              }}
              zoom={defaultProps.zoom}
              center={defaultProps.center}
            />
          </div>
        </Card>
      </Container>
    </BackgroundColorWidth>
  );
};

export default AnnouncementsInfo;
