import React from 'react';

import './assets/global.css';
import './assets/styles.css';
import Input from './components/Input';
import Fieldset from './components/Fieldset';

const App: React.FC = () => {
  return (
    <div>
      <Fieldset legend="Identificação">
        <Input name="name" label="Nome:" />
        <Input name="name" label="Nome:" />
      </Fieldset>
    </div>
  );
};

export default App;
