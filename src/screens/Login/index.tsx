import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { SideContainer } from './styles';

import {
  BackgroundColorWidthWhite,
  InputFormikWithMargin,
  RowCenter,
  SquareButton,
  Title,
} from '../../global-styled-components';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const history = useHistory();
  const { login, signUp } = useAuth();
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
                  text="Entrar"
                  type="submit"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </SideContainer>
        <SideContainer>
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              cpf: '',
              passwordConfirmation: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.passwordConfirmation !== values.password) {
                alert('Senhas estão diferentes');
                return;
              }
              setSubmitting(true);
              signUp(
                values.email,
                values.password,
                values.name,
                values.cpf
              ).then(() => {
                setSubmitting(false);
                history.push('/');
              });
            }}
            validateOnChange={false}
          >
            {({ isSubmitting }) => (
              <Form>
                <Title>QUERO ME CADASTRAR</Title>
                <InputFormikWithMargin placeholder="Nome" name="name" />
                <InputFormikWithMargin placeholder="Email" name="email" />
                <InputFormikWithMargin
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <InputFormikWithMargin
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirme sua senha"
                />
                <InputFormikWithMargin placeholder="CPF" name="cpf" />
                <SquareButton
                  text="Criar coonnta"
                  type="submit"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </SideContainer>
      </RowCenter>
    </BackgroundColorWidthWhite>
  );
};

export default Login;
