import React from 'react';
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';

import FormContainer from '../../containers/FormContainer';

import Fieldset from '../../components/Fieldset';

const Business: React.FC = () => (
  <FormContainer title="Cadastro de Negócio" icon={<WorkOutlinedIcon />}>
    <Fieldset legend="Cadastro">
      <h1>Fields goes here</h1>
    </Fieldset>
  </FormContainer>
);

export default Business;
