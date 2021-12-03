import React from 'react';
import { BrowserView } from 'react-device-detect';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import Banner from '../../components/Banner';
import AnnouncementCard from '../../components/AnnouncementCard';
import { Grid, SideContainer } from './styles';

import {
  BackgroundColorWidth,
  BackgroundColorWidthWhite,
  Container,
  Row,
  Title,
  InputWithMargin,
  RowCenter,
  SquareButton,
  InputFormikWithMargin,
} from '../../global-styled-components';
import FilterTop from '../../components/FilterTop';
import Filter from '../../components/FilterLeft';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const history = useHistory();
  const { login } = useAuth();
  return (
    <BackgroundColorWidthWhite>
      <RowCenter>
        <SideContainer>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              login(values.email, values.password).then(() => {
                setSubmitting(false);
                history.push('/');
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Title>JÁ TENHO CADASTRO</Title>
                <InputFormikWithMargin placeholder="Email" name="email" />
                <InputFormikWithMargin
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <SquareButton
                  text="Login"
                  type="submit"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </SideContainer>
        <SideContainer>
          <Title>QUERO ME CADASTRAR</Title>
        </SideContainer>
      </RowCenter>
    </BackgroundColorWidthWhite>
  );
};

export default Login;
