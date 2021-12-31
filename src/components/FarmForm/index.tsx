/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { FaMapMarker } from 'react-icons/all';
import PhotoPreview from '../PhotoPreview';
import {
  CardProperties,
  CartIcon,
  Data,
  Description,
  Price,
  SearchBoxMap,
  Title,
  MapContainer,
} from './styles';
import {
  InputFormikWithMargin,
  Row,
  RowSpaceBetween,
  SelectorFormikWithMargin,
  SelectorWithMargin,
  SquareButton,
  Subtitle,
} from '../../global-styled-components';
import { Props as PropertiesProps } from '../Properties';
import Button from '../Button';
import ImageUploader from '../ImageUploader';
import InputFormik from '../InputFormik';
import Selector from '../Selector';
import SearchBox from '../SearchBox';
import announcementSchema from '../../formValidations/farmSchema';

interface Props {
  user: any;
}

const FarmForm: React.FC<Props> = ({ user }) => {
  const defaultProps = {
    center: {
      lat: Number.parseFloat('-21.243156'),
      lng: Number.parseFloat('-44.9926383'),
    },
    zoom: 12,
  };
  const formRef = useRef();
  const markerRef = useRef();
  const [center, setCenter] = useState(defaultProps.center);
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    markerRef?.current?.setPosition(coordinates);
    const geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(coordinates.lat, coordinates.lng);
    geocoder.geocode({ location: latlng }, function (results, status) {
      if (results && results[0]) {
        const cityState = {
          city: results[0].address_components.find(
            (address) => address.types[0] === 'administrative_area_level_2'
          )?.short_name,
          state: results[0].address_components.find(
            (address) => address.types[0] === 'administrative_area_level_1'
          )?.short_name,
        };
        formRef.current.setFieldValue('city', cityState.city);
        formRef.current.setFieldValue('state', cityState.state);
      }
    });
  }, [coordinates]);
  const [createFarm] = useMutation(
    gql`
      mutation createFarm($farm: FarmInput) {
        createFarm(farm: $farm) {
          id
        }
      }
    `,
    {
      refetchQueries: ['getFarms'],
    }
  );
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        name: '',
        city: '',
        state: '',
      }}
      validationSchema={announcementSchema}
      validateOnChange={false}
      innerRef={formRef}
      onSubmit={(values, { setSubmitting }) => {
        if (coordinates.lat === 0) {
          alert('Selecione uma localização no mapa para cadastrar sua fazenda');
          setSubmitting(false);
          return;
        }
        const farm = {
          userId: user?.id,
          coordinates: [`${coordinates?.lat}`, `${coordinates?.lng}`],
          ...values,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        createFarm({
          variables: {
            farm,
          },
        })
          .then(() => {
            history.goBack();
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Title>Cadastrar fazenda</Title>
          <Data>
            <InputFormikWithMargin placeholder="Nome da fazenda" name="name" />
            <Subtitle style={{ marginTop: 16 }}>
              Marcar localização da fazenda
            </Subtitle>
            <SearchBoxMap
              placeholder="Busque um local"
              onPlacesChanged={(place: any) => {
                if (place) {
                  setCenter({
                    lat: place[0].geometry.location.lat(),
                    lng: place[0].geometry.location.lng(),
                  });
                }
              }}
            />
            <MapContainer>
              <GoogleMapReact
                onClick={(place) => {
                  setCoordinates({ lat: place.lat, lng: place.lng });
                }}
                bootstrapURLKeys={{
                  key: 'AIzaSyAsJ4fmNN1UV7XbFfd8BUMwt3-PagFRCtE',
                  libraries: 'places',
                }}
                onGoogleApiLoaded={({ maps, map }) => {
                  markerRef.current = new maps.Marker({
                    position: coordinates,
                    map,
                    title: 'Posição da fazenda',
                  });
                }}
                zoom={defaultProps.zoom}
                center={center}
              />
            </MapContainer>
            <InputFormikWithMargin placeholder="Cidade" name="city" />
            <SelectorFormikWithMargin
              placeholder="Estado"
              name="state"
              options={[{ label: 'Minas Gerais', value: 'MG' }]}
            />

            <SquareButton
              type="submit"
              text="Cadastrar"
              disabled={isSubmitting}
            />
          </Data>
        </Form>
      )}
    </Formik>
  );
};

export default FarmForm;
