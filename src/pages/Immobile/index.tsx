import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

import FormContainer from '../../containers/FormContainer';

const Immobile: React.FC = () => (
  <FormContainer title="Cadastro de Imoveis" icon={<HomeWorkIcon />}>
    <h1>Formulários aqui</h1>
  </FormContainer>
);

export default Immobile;
