import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import FormContainer from '../../containers/FormContainer';

import Fieldset from '../../components/Fieldset';

const Business: React.FC = () => (
  <FormContainer title="Cadastro de Negócio" icon={<PersonAddIcon />}>
    <Fieldset legend="Cadastro">
      <h1>Fields goes here</h1>
    </Fieldset>
  </FormContainer>
);

export default Business;
