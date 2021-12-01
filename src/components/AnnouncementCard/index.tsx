import React, { useState } from 'react';

import { MobileView } from 'react-device-detect';
import { GiCow } from 'react-icons/gi';
import { MdCalendarToday, MdPlace, SiHappycow } from 'react-icons/all';
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
import Properties from '../Properties';

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
  const [mouseHouver, setMouseHover] = useState(false);
  return (
    <CardContainer>
      <Carousel showThumbs={false} showStatus={false}>
        {thumbmails.map((t) => (
          <Thumbmail src={t?.url} alt="" />
        ))}
      </Carousel>
      <CardProperties
        state={state}
        breed={breed}
        city={city}
        nMonths={nMonths}
        nOxen={nOxen}
      />

      <PriceContainer
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
      >
        {!mouseHouver ? (
          <PriceMobileContainer>
            <Price>
              {currency || 'R$'}{' '}
              {Number.parseFloat(String(price)).toFixed(2).replace('.', ',')}
            </Price>
            <MobileView>
              <Button
                text="Comprar!"
                onClick={() => history.push(`/announcement/${id}`)}
                fontSize={20}
              />
            </MobileView>
          </PriceMobileContainer>
        ) : (
          <Button
            text="Comprar!"
            onClick={() => history.push(`/announcement/${id}`)}
            fontSize={50}
          />
        )}
      </PriceContainer>
    </CardContainer>
  );
};

export default AnnouncementCard;
