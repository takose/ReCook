import styledComponents, { injectGlobal } from 'styled-components';

export const root = styledComponents.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,600');
  * {
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #141B23;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  input[type='number'],
  input[type='text'] {
    margin: 0 10px;
    height: 34px;
    font-size: 18px;
    border: none;
    background: #fafafa;
    padding: 8px;
    outline: 0;
  }
  input[type='number']:focus,
  input[type='text']:focus {
    border-bottom: solid 1px #141B23;
  }
  textarea:focus {
    border: solid 1px #141B23;
  }
  p {
    margin: 0;
  }
  textarea {
    margin: 0 10px;
    appearance: none;
    padding: 5px;
    resize: none;
    border: none;
    border-radius: 3px;
    outline: none;
    background: #fafafa;
  }
`;
