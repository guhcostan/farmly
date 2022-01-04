import React, { useEffect, useState } from 'react';
import { BrowserView, isMobile } from 'react-device-detect';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Banner from '../../components/Banner';
import AnnouncementCard from '../../components/AnnouncementCard';
import { Grid, HomeContainer } from './styles';

import {
  BackgroundColorWidth,
  Container,
} from '../../global-styled-components';
import FilterTop from '../../components/FilterTop';
import Filter from '../../components/FilterLeft';

const GridMobile: React.FC = ({ children }) => {
  if (isMobile) {
    return <div>{children}</div>;
  }
  return <Grid>{children}</Grid>;
};

const Home: React.FC = () => {
  const [order, setOrder] = useState('ASC');
  const [orderBy, setOrderBy] = useState('value');
  const [getAnnouncements, { data, error, refetch }] = useLazyQuery(
    gql`
      query getAnnouncements($sortBy: SortBy) {
        announcements(sortBy: $sortBy) {
          id
          nOx
          value
          nMonths
          breed {
            name
          }
          photos {
            thumbnail
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
        sortBy: { field: orderBy, order },
      },
    }
  );

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <BackgroundColorWidth>
      <Banner />
      <Container style={{ display: 'flex' }}>
        <BrowserView>
          <Filter />
        </BrowserView>
        <HomeContainer>
          <FilterTop
            order={order}
            orderBy={orderBy}
            changeOrder={(orderFilter, orderByFilter) => {
              setOrder(orderFilter);
              setOrderBy(orderByFilter);
              refetch();
            }}
            nAnnouncements={data?.announcements.length}
          />
          <GridMobile>
            {data?.announcements?.map((announcement: any) => {
              return (
                <AnnouncementCard
                  id={announcement?.id}
                  price={announcement?.value}
                  thumbmails={announcement?.photos.map(
                    (photo: { thumbnail: string }) => photo.thumbnail
                  )}
                  nOxen={announcement.nOx}
                  nMonths={announcement?.nMonths}
                  city={announcement.farm?.city}
                  state={announcement.farm?.state}
                  breed={announcement.breed?.name}
                />
              );
            })}
          </GridMobile>
        </HomeContainer>
      </Container>
    </BackgroundColorWidth>
  );
};

export default Home;
