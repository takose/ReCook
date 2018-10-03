import styledComponents from 'styled-components';
const GRAY = '#EEE';
export const main = styledComponents.div`
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
`;

export const modeSelectorList = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px 0 16px;
`;

export const modeSelector = styledComponents.button`
  padding: 4px;
  font-size: 14px;
  background: ${(props: {primary: boolean}) => props.primary ? GRAY : 'none'};
`;

export const form = styledComponents.div`
`;

export const input = styledComponents.input`
  width: 120px;
`;

export const label = styledComponents.label`
  width: 60px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
  color: #777;
`;

export const itemWrapper = styledComponents.div`
  margin-bottom: 18px;
  display: flex;
  align-items: flex-end;
  p {
    font-size: 18px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const textbox = styledComponents.textarea`
  width: 200px;
  height: 150px;
  font-size: 18px;
  padding: 8px;
  margin: 16px 16px 0;
`;

export const add = styledComponents.button`
  background-color: #6D4C41;
  margin: 0 0 0 60px;
  padding: 0 18px;
  color: #fff;
  height: 36px;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  font-size: 14px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
`;

export const deleteButton = styledComponents.button`
`;

export const ffStepMain = styledComponents.div`
  display: flex;
  flex-direction: column;
`;

export const textPlayMain = styledComponents.div`
  font-size: 40px;
`;

export const textLine = styledComponents.p`
  margin-bottom: 8px;
`;
