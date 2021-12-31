import * as yup from 'yup';

const announcementSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, 'Digite um nome para sua fazenda')
    .required('O campo nome é obrigatório'),
  city: yup
    .string()
    .min(2, 'Digite o nome da cidade')
    .required('O campo cidade é obrigatório'),
  state: yup
    .string()
    .min(2, 'Digite o nome do estado')
    .required('O campo estado é obrigatório'),
});

export default announcementSchema;
