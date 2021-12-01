import React from 'react';
import { MdShoppingCart } from 'react-icons/all';
import PhotoPreview from '../PhotoPreview';
import {
  CardProperties,
  CartIcon,
  Data,
  Description,
  Price,
  Title,
} from './styles';
import { Row, RowSpaceBetween } from '../../global-styled-components';
import Properties, { Props as PropertiesProps } from '../Properties';
import Button from '../Button';

interface Props extends PropertiesProps {
  photos: string[];
  price: number;
}
const AnnouncementMain: React.FC<Props> = ({
  photos,
  state,
  breed,
  city,
  price,
  nMonths,
  nOxen,
}) => {
  return (
    <Row>
      <PhotoPreview photosUrls={photos} />
      <Data>
        <Title>Vendo bois</Title>
        <RowSpaceBetween>
          <Price>
            R$ {Number.parseFloat(String(price)).toFixed(2).replace('.', ',')}
          </Price>
          <Button text="Comprar" fontSize={50} icon={<CartIcon />} />
        </RowSpaceBetween>
        <CardProperties
          align="left"
          state={state}
          breed={breed}
          city={city}
          nMonths={nMonths}
          nOxen={nOxen}
        />
        <Description>
          Tenho varios bois na minha fazenda, se vocês quiserem, posso vender
          alguns para vocês
        </Description>
      </Data>
    </Row>
  );
};

export default AnnouncementMain;
