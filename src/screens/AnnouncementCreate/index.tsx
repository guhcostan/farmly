import React from 'react';

import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import AnnouncementForm from '../../components/AnnouncementsForm';
import { Card } from '../AnnouncementsInfo/styles';

const AnnouncementCreate: React.FC = () => {
  return (
    <BackgroundColorWidth>
      <Container style={{ display: 'flex' }}>
        <Card>
          <AnnouncementForm />
        </Card>
      </Container>
    </BackgroundColorWidth>
  );
};

export default AnnouncementCreate;
