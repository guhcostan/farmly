import React, { useState } from 'react';
/* @eslint-ignore-next-line import/no-unresolved */
import SimpleImageSlider from 'react-simple-image-slider';
import { GiCow } from 'react-icons/gi';
import { Props } from './interface';
import {
  CardContainer,
  Price,
  PriceContainer,
  Propertie,
  PropertieContainer,
  PropertieRow,
  PropertieText,
} from './styles';
import Button from '../Button';

const AnnouncimentCard: React.FC<Props> = ({
  price,
  thumbmails,
  nOxen,
  currency,
}) => {
  const [mouseHouver, setMouseHover] = useState(false);
  return (
    <CardContainer>
      <SimpleImageSlider
        width={300}
        height={200}
        style={{ borderRadius: 8 }}
        navSize={20}
        navMargin={12}
        images={thumbmails}
        showBullets
        showNavs
      />
      <PropertieContainer>
        <PropertieRow>
          <Propertie>
            <GiCow />
            <PropertieText>{nOxen}</PropertieText>
          </Propertie>
          <Propertie>
            <GiCow />
            <PropertieText>{nOxen}</PropertieText>
          </Propertie>
        </PropertieRow>
        <PropertieRow>
          <Propertie>
            <GiCow />
            <PropertieText>{nOxen}</PropertieText>
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
          <Button text="Comprar!" fontSize={50} />
        )}
      </PriceContainer>
    </CardContainer>
  );
};

export default AnnouncimentCard;
