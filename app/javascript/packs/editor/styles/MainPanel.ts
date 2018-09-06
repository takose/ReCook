import styledComponents from 'styled-components';
export const main = styledComponents.div`
  padding: 16px;
  width: calc(100vw - 180px);
`;

export const topPanel = styledComponents.div`
  height: 50%;
`;

export const input = styledComponents.input`
  width: 300px;
  margin-bottom: 100px;
`;

export const bottomPanel = styledComponents.div`
  height: 50%;
  overflow: scroll;
  background: #E6DFC9;
  padding: 8px;
`;

export const stepList = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
`;

export const stepWrapper = styledComponents.div`
  width: 200px;
  height: 200px;
  border-radius: 3px;
  border: solid 1px #ccc;
  padding: 10px;
  margin: 5px;
  background: #FFF;
`;
