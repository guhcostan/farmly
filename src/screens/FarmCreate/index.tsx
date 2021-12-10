import React from 'react';

import { gql, useQuery } from '@apollo/client';
import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import AnnouncementForm from '../../components/AnnouncementsForm';
import { Card } from '../AnnouncementsInfo/styles';
import FarmForm from '../../components/FarmForm';
import { useAuth } from '../../hooks/auth';

const AnnouncementCreate: React.FC = () => {
  const { user } = useAuth();
  return (
    <BackgroundColorWidth>
      <Container style={{ display: 'flex' }}>
        <Card>
          <FarmForm user={user} />
        </Card>
      </Container>
    </BackgroundColorWidth>
  );
};

export default AnnouncementCreate;
