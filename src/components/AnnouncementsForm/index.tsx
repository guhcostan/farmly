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
} from '../../global-styled-components';
import { Props as PropertiesProps } from '../Properties';
import Button from '../Button';
import ImageUploader from '../ImageUploader';
import InputFormik from '../InputFormik';

const AnnouncementForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        photos: [],
        title: '',
        description: '',
        value: '',
      }}
      onSubmit={() => {
        console.log('SUBMIT');
      }}
    >
      {({ isSubmitting, values }) => (
        <Row>
          <ImageUploader />
          <Data>
            <InputFormik
              placeholder="Titulo"
              name="title"
              bordless
              fontSize={40}
            />
            <InputFormikWithMargin
              type="textarea"
              bordless
              placeholder="Descrição"
              name="description"
            />
            <InputFormik
              placeholder="Valor"
              name="value"
              prefix="R$"
              type="number"
              bordless
              fontSize={50}
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
        </Row>
      )}
    </Formik>
  );
};

export default AnnouncementForm;
