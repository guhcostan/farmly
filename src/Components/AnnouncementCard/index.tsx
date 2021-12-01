import React, { useState } from 'react';

import { MobileView } from 'react-device-detect';
import { GiCow } from 'react-icons/gi';
import { MdCalendarToday, MdPlace, SiHappycow } from 'react-icons/all';
import { Carousel } from 'react-responsive-carousel';
import { Props } from './interface';
import {
  CardContainer,
  Price,
  PriceContainer,
  PriceMobileContainer,
  Propertie,
  PropertieContainer,
  PropertieRow,
  PropertieText,
  Thumbmail,
} from './styles';
import Button from '../Button';

const AnnouncementCard: React.FC<Props> = ({
  price,
  thumbmails,
  city,
  state,
  breed,
  nOxen,
  nMonths,
  currency,
}) => {
  const [mouseHouver, setMouseHover] = useState(false);
  return (
    <CardContainer>
      <Carousel showThumbs={false} showStatus={false}>
        {thumbmails.map((t) => (
          <Thumbmail src={t?.url} alt="" />
        ))}
      </Carousel>
      <PropertieContainer>
        <Propertie>
          <SiHappycow />
          <PropertieText>{nOxen} cabeças de gado</PropertieText>
        </Propertie>
        <Propertie>
          <GiCow />
          <PropertieText>{breed}</PropertieText>
        </Propertie>
        <Propertie>
          <MdPlace />
          <PropertieText>{`${city}-${state}`}</PropertieText>
        </Propertie>
        <Propertie>
          <MdCalendarToday />
          <PropertieText>{nMonths} meses</PropertieText>
        </Propertie>
      </PropertieContainer>

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
              <Button text="Comprar!" fontSize={20} />
            </MobileView>
          </PriceMobileContainer>
        ) : (
          <Button text="Comprar!" fontSize={50} />
        )}
      </PriceContainer>
    </CardContainer>
  );
};

export default AnnouncementCard;
