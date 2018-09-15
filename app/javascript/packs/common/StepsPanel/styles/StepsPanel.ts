import styledComponents from 'styled-components';

export const main = styledComponents.div`
  height: 50%;
  overflow: scroll;
  background: #E6DFC9;
  padding: 8px;
  border-radius: 3px;
  border: solid 1px #ccc;
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
  padding: 20px;
  margin: 5px;
  background: #FFF;
  letter-spacing: 1.1px;
  line-height: 1.4;
  font-size: 18px;
`;
