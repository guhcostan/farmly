import React from 'react';
import { Form, Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
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
  SelectorFormikWithMargin,
  SelectorWithMargin,
  SquareButton,
} from '../../global-styled-components';
import { Props as PropertiesProps } from '../Properties';
import Button from '../Button';
import ImageUploader from '../ImageUploader';
import InputFormik from '../InputFormik';
import Selector from '../Selector';

interface Props {
  farms: any[];
  breeds: any[];
}

const AnnouncementForm: React.FC<Props> = ({ farms, breeds }) => {
  const [createAnnouncement] = useMutation(gql`
    mutation createAnnouncement($announcement: AnnouncementInput) {
      createAnnouncement(announcement: $announcement) {
        id
      }
    }
  `);
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        photos: [],
        title: '',
        description: '',
        nOx: '',
        nMonths: '',
        breedId: '',
        farmId: '',
        value: 0,
      }}
      onSubmit={(announcement, { setSubmitting }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { photos, ...rest } = announcement;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        createAnnouncement({
          variables: {
            announcement: rest,
          },
        })
          .then(({ data }) => {
            history.push(`/announcement/${data?.createAnnouncement?.id}`);
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Title>Criar anuncio</Title>
          <ImageUploader />
          <Data>
            <InputFormikWithMargin placeholder="Titulo" name="title" />
            <InputFormikWithMargin
              type="textarea"
              placeholder="Descrição"
              name="description"
            />
            <InputFormikWithMargin
              placeholder="Valor"
              name="value"
              prefix="R$"
              type="currency"
            />
            <InputFormikWithMargin
              placeholder="Numero de bois"
              name="nOx"
              type="number"
            />
            <InputFormikWithMargin
              placeholder="Quantos meses tem o gado?"
              name="nMonths"
              type="number"
            />
            <SelectorFormikWithMargin
              placeholder="Qual as raças dos bois?"
              name="breedId"
              options={
                breeds?.map((breed) => ({
                  value: breed.id,
                  label: breed.name,
                })) || []
              }
            />
            <SelectorFormikWithMargin
              placeholder="Selecione a fazenda do anuncio"
              name="farmId"
              options={
                farms?.map((breed) => ({
                  value: breed.id,
                  label: breed.name,
                })) || []
              }
            />
            <SquareButton
              type="submit"
              text="Publicar anuncio"
              disabled={isSubmitting}
            />
          </Data>
        </Form>
      )}
    </Formik>
  );
};

export default AnnouncementForm;
