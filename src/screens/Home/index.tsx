import React from 'react';
import { BrowserView } from 'react-device-detect';
import { gql, useQuery } from '@apollo/client';
import Banner from '../../Components/Banner';
import AnnouncementCard from '../../Components/AnnouncementCard';
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
  const { data, error } = useQuery(gql`
    query getAnnouncements {
      announcements {
        nOx
        breed {
          name
        }
        farm {
          city
          state
        }
      }
    }
  `);
  console.log('data', data);
  return (
    <BackgroundColorWidth>
      <Banner />
      <Container style={{ display: 'flex' }}>
        <BrowserView>
          <Filter />
        </BrowserView>
        <HomeContainer>
          <FilterTop nAnnouncements={8} />
          {data?.announcements?.map((announcement: any) => {
            return (
              <AnnouncementCard
                price={2000}
                thumbmails={thumbmails}
                nOxen={announcement.nOx}
                nMonths={8}
                city={announcement.farm?.city}
                state={announcement.farm?.state}
                breed={announcement.breed?.name}
              />
            );
          })}
        </HomeContainer>
      </Container>
    </BackgroundColorWidth>
  );
};

export default Home;
