import styledComponents, { injectGlobal } from 'styled-components';

export const root = styledComponents.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  input[type='number'] {
    width: 120px;
  }
`;
