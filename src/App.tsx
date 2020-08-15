import React from 'react';
import Menu from './containers/Menu';

import GlobalStyle from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
    </>
  );
};

export default App;
