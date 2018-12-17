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

export const colorProps = props => `
  ${props.pieceColor && `border-bottom: solid ${props.pieceColor}`};
`;

export const stepWrapper = styledComponents.div`
  width: 200px;
  height: 200px;
  border-radius: 3px;
  border:
    ${(props: {isActive: boolean}) => props.isActive ? 'solid 3px #141B23' : 'solid 1px #ccc'};
  ${colorProps}
  padding: 20px;
  margin: 5px;
  background: #FFF;
  letter-spacing: 1.1px;
  line-height: 1.4;
`;

export const temp = styledComponents.div`
  width: 3px;
  background-color: #6D4C41;
`;
