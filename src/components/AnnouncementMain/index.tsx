import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useDimensions from 'react-use-dimensions';
import { useHistory } from 'react-router-dom';
import PhotoPreview from '../PhotoPreview';
import {
  ButtonContainer,
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
import OfferModal from '../OfferModal';
import { useAuth } from '../../hooks/auth';

interface Props extends PropertiesProps {
  photos: string[];
  price: number;
  title: string;
  description: string;
}

const Wrapper: React.FC = ({ children }) => {
  const [ref, { x, y, width }] = useDimensions();
  const style = {
    margin: '0 0 20px 0',
  };
  if (width < 1000) {
    return (
      <div style={style} ref={ref}>
        {children}
      </div>
    );
  }
  return (
    <Row style={style} ref={ref}>
      {children}
    </Row>
  );
};
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
  const history = useHistory();
  const { user } = useAuth();
  const [offerModalOpened, setOfferModalOpened] = useState(false);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const createOffer = () => {
    if (user) {
      setOfferModalOpened(true);
    } else {
      history.push('/login');
    }
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const goToCheckout = () => {
    if (user) {
      history.push('/checkout');
    } else {
      history.push('/login');
    }
  };
  return (
    <Wrapper>
      <PhotoPreview photosUrls={photos} />
      <Data>
        <Title>{title}</Title>
        <RowSpaceBetween>
          <Price>
            R$ {Number.parseFloat(String(price)).toFixed(2).replace('.', ',')}
          </Price>
          {!isMobile && (
            <ButtonContainer>
              <Button
                text="Comprar"
                fontSize={30}
                icon={<CartIcon size={20} />}
                onClick={() => goToCheckout()}
              />
              <Button
                textMode
                text="Fazer oferta"
                fontSize={12}
                onClick={() => createOffer()}
              />
            </ButtonContainer>
          )}
        </RowSpaceBetween>
        <CardProperties
          align="left"
          state={state}
          breed={breed}
          city={city}
          nMonths={nMonths}
          nOxen={nOxen}
        />
        {isMobile && (
          <ButtonContainer>
            <Button
              text="Comprar"
              fontSize={30}
              icon={<CartIcon size={20} />}
              onClick={() => goToCheckout()}
            />
            <Button
              textMode
              text="Fazer oferta"
              fontSize={12}
              onClick={() => createOffer()}
            />
          </ButtonContainer>
        )}
        <Description>{description}</Description>
      </Data>
      <OfferModal
        opened={offerModalOpened}
        onClickOut={() => setOfferModalOpened(false)}
        announcement={{
          value: price,
          nOx: nOxen,
        }}
      />
    </Wrapper>
  );
};

export default AnnouncementMain;
