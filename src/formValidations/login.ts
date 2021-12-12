import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required('O campo email é obrigatório'),
  password: yup.string().min(6).required('O campo senha é obrigatório'),
});

export default loginSchema;
