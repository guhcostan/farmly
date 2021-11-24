import React from 'react';
import { BrowserView } from 'react-device-detect';
import Banner from '../../Components/Banner';
import AnnouncimentCard from '../../Components/AnnouncimentCard';
import { HomeContainer } from './styles';

import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import FilterTop from '../../Components/FilterTop';
import Filter from '../../Components/FilterLeft';

const Home: React.FC = () => {
  const thumbmails = [
    { url: 'https://img.olx.com.br/images/78/789141929491690.jpg' },
    { url: 'https://img.olx.com.br/images/78/783152805778181.jpg' },
  ];
  return (
    <BackgroundColorWidth>
      <Banner />
      <Container style={{ display: 'flex' }}>
        <BrowserView>
          <Filter />
        </BrowserView>
        <HomeContainer>
          <FilterTop nAnnouncements={8} />
          <AnnouncimentCard
            price={2000}
            thumbmails={thumbmails}
            nOxen={5}
            nMonths={8}
            city="Varginha"
            state="MG"
            breed="Guzerá"
          />
          <AnnouncimentCard
            price={2000}
            nMonths={8}
            thumbmails={thumbmails}
            nOxen={5}
            city="Varginha"
            state="MG"
            breed="Guzerá"
          />
        </HomeContainer>
      </Container>
    </BackgroundColorWidth>
  );
};

export default Home;
