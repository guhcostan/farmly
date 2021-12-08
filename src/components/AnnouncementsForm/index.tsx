import React from 'react';
import { Formik } from 'formik';
import PhotoPreview from '../PhotoPreview';
import {
  CardProperties,
  CartIcon,
  Data,
  Description,
  Price,
  Title,
} from './styles';
import {
  InputFormikWithMargin,
  Row,
  RowSpaceBetween,
  SelectorWithMargin,
} from '../../global-styled-components';
import { Props as PropertiesProps } from '../Properties';
import Button from '../Button';
import ImageUploader from '../ImageUploader';
import InputFormik from '../InputFormik';
import Selector from '../Selector';

interface Props {
  farms: any[];
}

const AnnouncementForm: React.FC<Props> = ({ farms }) => {
  return (
    <Formik
      initialValues={{
        photos: [],
        title: '',
        description: '',
        value: 0,
      }}
      onSubmit={() => {
        console.log('SUBMIT');
      }}
    >
      {({ isSubmitting, values }) => (
        <div>
          <Title>Criar anuncio</Title>
          <ImageUploader />
          <Data>
            <InputFormik placeholder="Titulo" name="title" />
            <InputFormikWithMargin
              type="textarea"
              placeholder="Descrição"
              name="description"
            />
            <InputFormik
              placeholder="Valor"
              name="value"
              prefix="R$"
              type="currency"
            />
            <SelectorWithMargin
              placeholder="Selecione a fazenda do anuncio"
              options={[
                {
                  label: 'Fazenda 1',
                  value: 'fazenda 1',
                },
              ]}
            />
            {/* <CardProperties */}
            {/*    align="left" */}
            {/*    state={state} */}
            {/*    breed={breed} */}
            {/*    city={city} */}
            {/*    nMonths={nMonths} */}
            {/*    nOxen={nOxen} */}
            {/* /> */}
            <Description />
          </Data>
        </div>
      )}
    </Formik>
  );
};

export default AnnouncementForm;
