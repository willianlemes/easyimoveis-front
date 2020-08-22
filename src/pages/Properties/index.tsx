import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

import FormContainer from '../../containers/FormContainer';

import Fieldset from '../../components/Fieldset';

const Properties: React.FC = () => (
  <FormContainer title="Cadastro de Imóveis" icon={<HomeWorkIcon />}>
    <Fieldset legend="Cadastro">
      <h1>Fields goes here</h1>
    </Fieldset>
  </FormContainer>
);

export default Properties;
