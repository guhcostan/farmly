import React from 'react';
import { Form, Formik } from 'formik';
import Modal, { ModalProps } from '../Modal';
import {
  InputFormikWithMargin,
  SquareButton,
  Title,
} from '../../global-styled-components';
import Input from '../Input';
import Button from '../Button';

interface Props extends ModalProps {
  announcement: {
    nOx: number;
    value: number;
  };
}

const OfferModal: React.FC<Props> = ({ opened, onClickOut, announcement }) => {
  return (
    <Modal opened={opened} onClickOut={onClickOut}>
      <Title>Fazer oferta</Title>
      <Formik
        initialValues={{}}
        onSubmit={() => {
          console.log('SUBMIT');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputFormikWithMargin
              placeholder="Numero de cabeças de gado"
              name="nOx"
              type="number"
              observation={`Número maximo de cabeças de gado é ${announcement.nOx}`}
            />
            <InputFormikWithMargin
              placeholder="Valor"
              name="value"
              prefix="R$"
              type="currency"
              observation={`Preço sugerido por cabeça de gado é de R$ ${
                announcement.value / announcement.nOx
              } por cabeça de gado`}
            />
            <InputFormikWithMargin
              type="textarea"
              placeholder="Descreva sua oferta para o vendedor"
              name="description"
            />
            <SquareButton
              type="submit"
              text="Enviar oferta"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default OfferModal;
