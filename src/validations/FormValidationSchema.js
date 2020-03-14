import * as Yup from 'yup';

const FormValidationSchema = Yup.object().shape({
  title: Yup.string().required('Preencha o título, por favor!'),
  description: Yup.string().required('Preencha a descrição, por favor!'),
  specie: Yup.string().required('Selecione uma espécie, por favor!'),
  uri: Yup.string().required('Selecione uma imagem, por favor!'),
});

export default FormValidationSchema;
