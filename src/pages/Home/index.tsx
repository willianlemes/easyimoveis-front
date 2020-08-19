import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import FormContainer from '../../containers/FormContainer';

const Home: React.FC = () => (
  <FormContainer title="Cadastro de Pessoa" icon={<PersonAddIcon />}>
    <h1>Formulários aqui</h1>
  </FormContainer>
);

export default Home;
