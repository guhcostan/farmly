import React from 'react';
import { BrowserView } from 'react-device-detect';
import { gql, useQuery } from '@apollo/client';
import Banner from '../../components/Banner';
import AnnouncementCard from '../../components/AnnouncementCard';
import { Grid, HomeContainer } from './styles';

import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import FilterTop from '../../components/FilterTop';
import Filter from '../../components/FilterLeft';

const Home: React.FC = () => {
  const thumbmails = [
    { url: 'https://img.olx.com.br/images/78/789141929491690.jpg' },
    { url: 'https://img.olx.com.br/images/78/783152805778181.jpg' },
  ];
  const { data, error } = useQuery(gql`
    query getAnnouncements {
      announcements {
        id
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
  `);
  return (
    <BackgroundColorWidth>
      <Banner />
      <Container style={{ display: 'flex' }}>
        <BrowserView>
          <Filter />
        </BrowserView>
        <HomeContainer>
          <FilterTop nAnnouncements={8} />
          <Grid>
            {data?.announcements?.map((announcement: any) => {
              return (
                <AnnouncementCard
                  id={announcement?.id}
                  price={announcement?.value}
                  thumbmails={thumbmails}
                  nOxen={announcement.nOx}
                  nMonths={announcement?.nMonths}
                  city={announcement.farm?.city}
                  state={announcement.farm?.state}
                  breed={announcement.breed?.name}
                />
              );
            })}
          </Grid>
        </HomeContainer>
      </Container>
    </BackgroundColorWidth>
  );
};

export default Home;
