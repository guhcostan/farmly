import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { isMobile } from 'react-device-detect';
import { SideContainer } from './styles';
import { Card } from '../AnnouncementsInfo/styles';
import {
  BackgroundColorWidth,
  BackgroundColorWidthWhite,
  Container,
  InputFormikWithMargin,
  RowCenter,
  SquareButton,
  Title,
} from '../../global-styled-components';
import { useAuth } from '../../hooks/auth';
import registerSchema from '../../formValidations/register';
import loginSchema from '../../formValidations/login';

const LoginWrapper: React.FC = ({ children }) => {
  if (isMobile) {
    return <div>{children}</div>;
  }
  return <RowCenter>{children}</RowCenter>;
};

const Login: React.FC = () => {
  const history = useHistory();
  const { login, signUp } = useAuth();
  return (
    <BackgroundColorWidth>
      <Container style={{ display: 'flex' }}>
        <Card>
          <LoginWrapper>
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
                validationSchema={loginSchema}
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
                      bold={false}
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
                validationSchema={registerSchema}
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
                    <InputFormikWithMargin
                      placeholder="CPF"
                      name="cpf"
                      mask="999.999.999-99"
                    />
                    <SquareButton
                      text="Criar conta"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </Form>
                )}
              </Formik>
            </SideContainer>
          </LoginWrapper>
        </Card>
      </Container>
    </BackgroundColorWidth>
  );
};

export default Login;
