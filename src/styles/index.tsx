import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
  }

  ol, ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`;

export default GlobalStyle;
