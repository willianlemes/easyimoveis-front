import React from 'react';

import './assets/global.css';
import './assets/styles.css';
import Input from './components/Input';
import Select from './components/Select';
import Fieldset from './components/Fieldset';

const App: React.FC = () => {
  return (
    <div>
      <Fieldset legend="Identificação">
        <Input name="name" label="Nome:" />
        <Input name="name" label="Nome:" />
        <Select
          name="Tipos"
          label="Tipos:"
          options={[
            {
              value: '1',
              label: 'Teste 1'
            },
            {
              value: '2',
              label: 'Teste 2'
            },
            {
              value: '3',
              label: 'Teste 3'
            }
          ]}
        />
      </Fieldset>
    </div>
  );
};

export default App;
