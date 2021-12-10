import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().min(12).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  passwordConfirmation: yup.string().min(6).required(),
});

export default registerSchema;
