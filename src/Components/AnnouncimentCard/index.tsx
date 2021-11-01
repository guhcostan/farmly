import React, { useState } from 'react';

import { MobileView } from 'react-device-detect';
import { GiCow } from 'react-icons/gi';
import { MdPlace, SiHappycow } from 'react-icons/all';
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
} from './styles';
import Button from '../Button';

const AnnouncimentCard: React.FC<Props> = ({
  price,
  thumbmails,
  city,
  state,
  breed,
  nOxen,
  currency,
}) => {
  const [mouseHouver, setMouseHover] = useState(false);
  return (
    <CardContainer>
      <Carousel showThumbs={false} showStatus={false}>
        {thumbmails.map((t) => (
          <img
            style={{ height: 200, objectFit: 'cover' }}
            src={t?.url}
            alt=""
          />
        ))}
      </Carousel>
      <PropertieContainer>
        <PropertieRow>
          <Propertie>
            <SiHappycow />
            <PropertieText>{nOxen}</PropertieText>
          </Propertie>
          <Propertie>
            <GiCow />
            <PropertieText>{breed}</PropertieText>
          </Propertie>
        </PropertieRow>
        <PropertieRow>
          <Propertie>
            <MdPlace />
            <PropertieText>{`${city}-${state}`}</PropertieText>
          </Propertie>
          <Propertie>
            <GiCow />
            <PropertieText>{nOxen}</PropertieText>
          </Propertie>
        </PropertieRow>
      </PropertieContainer>

      <PriceContainer
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
      >
        {!mouseHouver ? (
          <Price>
            {currency || 'R$'}{' '}
            {Number.parseFloat(String(price)).toFixed(2).replace('.', ',')}
          </Price>
        ) : (
          <PriceMobileContainer>
            <Button text="Comprar!" fontSize={50} />
            <MobileView>
              <Price>
                {currency || 'R$'}{' '}
                {Number.parseFloat(String(price)).toFixed(2).replace('.', ',')}
              </Price>
            </MobileView>
          </PriceMobileContainer>
        )}
      </PriceContainer>
    </CardContainer>
  );
};

export default AnnouncimentCard;
