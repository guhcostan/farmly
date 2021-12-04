import React, { useEffect } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card } from './styles';

import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import AnnouncementMain from '../../components/AnnouncementMain';
import FarmInfo from '../../components/FarmInfo';

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
            id
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
  const [loadFarm, { data: farmData }] = useLazyQuery(
    gql`
      query getFarm($id: ID!) {
        farm(id: $id) {
          name
          coordinates
          city
          state
        }
      }
    `
  );
  useEffect(() => {
    if (data?.announcement?.farm?.id) {
      loadFarm({
        variables: {
          id: data.announcement.farm.id,
        },
      });
    }
  }, [data?.announcement?.farm?.id, loadFarm]);

  if (!data) {
    return <div />;
  }
  const { announcement } = data;
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
          {farmData?.farm && <FarmInfo farm={farmData.farm} />}
        </Card>
      </Container>
    </BackgroundColorWidth>
  );
};

export default AnnouncementsInfo;
