import React from 'react';

import { gql, useQuery } from '@apollo/client';
import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import AnnouncementForm from '../../components/AnnouncementsForm';
import { Card } from '../AnnouncementsInfo/styles';

const AnnouncementCreate: React.FC = () => {
  const { data } = useQuery(gql`
    {
      self {
        farms {
          id
          name
        }
      }
    }
  `);
  const { data: beedData } = useQuery(gql`
    {
      breeds {
        id
        name
      }
    }
  `);
  return (
    <BackgroundColorWidth>
      <Container style={{ display: 'flex' }}>
        <Card>
          <AnnouncementForm
            breeds={beedData?.breeds}
            farms={data?.self?.farms}
          />
        </Card>
      </Container>
    </BackgroundColorWidth>
  );
};

export default AnnouncementCreate;
