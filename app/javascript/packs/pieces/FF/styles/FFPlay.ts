import styledComponents from 'styled-components';
export const canvasWrapper = styledComponents.div`
`;

export const canvas = styledComponents.canvas`
  width: 320px;
  height: 240px;
`;

export const video = styledComponents.video`
  width: 320px;
  height: 240px;
  display: none;
`;

export const ffMain = styledComponents.div`
  display: flex;
`;

export const currentState = styledComponents.div`
  margin: 0 30px 0 20px;
`;

export const itemWrapper = styledComponents.div`
  display: flex;
  align-items: flex-end;
  p {
    font-size: 18px;
  }
  label {
    width: 80px;
    text-align: right;
    font-size: 14px;
    margin-right: 8px;
    color: #777;
  }
`;
