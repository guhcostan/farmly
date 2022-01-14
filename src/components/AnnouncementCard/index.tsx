import React, { useState } from 'react';

import { MobileView } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';
import { Props } from './interface';
import {
  CardContainer,
  CardProperties,
  Price,
  PriceContainer,
  PriceMobileContainer,
  Thumbmail,
} from './styles';
import Button from '../Button';

const AnnouncementCard: React.FC<Props> = ({
  id,
  price,
  thumbmails,
  city,
  state,
  breed,
  nOxen,
  nMonths,
  currency,
}) => {
  const history = useHistory();
  return (
    <CardContainer>
      <Carousel showThumbs={false} showStatus={false}>
        {thumbmails.map((url) => (
          <Thumbmail src={url} alt="" />
        ))}
      </Carousel>
      <CardProperties
        state={state}
        breed={breed}
        city={city}
        nMonths={nMonths}
        nOxen={nOxen}
      />

      <PriceContainer onClick={() => history.push(`/announcement/${id}`)}>
        <Price>
          {currency || 'R$'}{' '}
          {Number.parseFloat(String(price)).toFixed(2).replace('.', ',')}
        </Price>
      </PriceContainer>
    </CardContainer>
  );
};

export default AnnouncementCard;
