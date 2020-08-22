import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

import FormContainer from '../../containers/FormContainer';

import Fieldset from '../../components/Fieldset';

const Properties: React.FC = () => (
  <FormContainer title="Cadastro de Imóveis" icon={<HomeIcon />}>
    <Fieldset legend="Cadastro">
      <h1>Fields goes here</h1>
    </Fieldset>
  </FormContainer>
);

export default Properties;
