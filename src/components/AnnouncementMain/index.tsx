import React from 'react';
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
import { Props as PropertiesProps } from '../Properties';
import Button from '../Button';

interface Props extends PropertiesProps {
  photos: string[];
  price: number;
  title: string;
  description: string;
}

const AnnouncementMain: React.FC<Props> = ({
  photos,
  state,
  breed,
  city,
  price,
  nMonths,
  nOxen,
  title,
  description,
}) => {
  return (
    <Row>
      <PhotoPreview photosUrls={photos} />
      <Data>
        <Title>{title}</Title>
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
        <Description>{description}</Description>
      </Data>
    </Row>
  );
};

export default AnnouncementMain;
