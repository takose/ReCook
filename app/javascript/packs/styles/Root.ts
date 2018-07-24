import styledComponents, { injectGlobal } from 'styled-components';

export const root = styledComponents.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;
