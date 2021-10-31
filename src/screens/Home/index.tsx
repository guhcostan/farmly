import React from 'react';
import Banner from '../../Components/Banner';
import AnnouncimentCard from '../../Components/AnnouncimentCard';
import { HomeContainer } from './styles';

const Home: React.FC = () => {
  const thumbmails = [
    { url: 'https://img.olx.com.br/images/78/789141929491690.jpg' },
    { url: 'https://img.olx.com.br/images/78/783152805778181.jpg' },
  ];
  return (
    <>
      <Banner />
      <HomeContainer>
        <AnnouncimentCard price={2000} thumbmails={thumbmails} nOxen={5} />
        <AnnouncimentCard price={2000} thumbmails={thumbmails} nOxen={5} />
        <AnnouncimentCard price={2000} thumbmails={thumbmails} nOxen={5} />
        <AnnouncimentCard price={2000} thumbmails={thumbmails} nOxen={5} />
        <AnnouncimentCard price={2000} thumbmails={thumbmails} nOxen={5} />
      </HomeContainer>
    </>
  );
};

export default Home;
