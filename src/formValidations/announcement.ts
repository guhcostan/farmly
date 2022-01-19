import * as yup from 'yup';

const announcementSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, 'Digite um titulo para seu anuncio')
    .required('O campo titulo é obrigatório'),
  description: yup
    .string()
    .min(6, 'Descreva mesmo com poucas palavras o seu gado')
    .required('O campo descrição é obrigatório'),
  value: yup
    .number()
    .min(1, 'O preço não pode ser 0')
    .required('O campo preço é obrigatório'),
  nOx: yup
    .number()
    .min(1, 'O anuncio deve ter pelo menos uma cabeça de gado')
    .required('O campo numero de cabeças de gado é obrigatório'),
  nMonths: yup
    .number()
    .min(1, 'O gado deve ter pelo menos 1 mes de idade')
    .required('O campo idade é obrigatório'),
  breedId: yup.string().required('O campo raça é obrigatório'),
  farmId: yup.string().required('O campo fazenda é obrigatório'),
  photoIds: yup
    .array()
    .min(1, 'Pelo menos uma foto é nescessaria')
    .required('Pelo menos uma foto é nescessaria'),
});

export default announcementSchema;
