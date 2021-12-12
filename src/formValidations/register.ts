import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório'),
  cpf: yup
    .string()
    .min(12, 'Digite um cpf válido')
    .required('O campo cpf é obrigatório'),
  email: yup.string().email().required('O campo email é obrigatório'),
  password: yup.string().min(6).required('O campo senha é obrigatório'),
  passwordConfirmation: yup
    .string()
    .min(6)
    .required('Porfavor, escreva novamente a sua senha'),
});

export default registerSchema;
