import styledComponents from 'styled-components';
const GRAY = '#EEE';
export const main = styledComponents.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`;

export const modeSelectorList = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px 0 16px;
`;

export const modeSelector = styledComponents.button`
  padding: 4px;
  font-size: 14px;
  background: ${(props: {primary: boolean}) => props.primary ? GRAY : 'none'};
`;

export const form = styledComponents.div`
  margin-right: 40px;
`;

export const input = styledComponents.input`
  width: 120px;
`;

export const label = styledComponents.label`
  width: 60px;
  text-align: right;
  font-size: 14px;
  margin: 7px 8px 0 0;
  color: #777;
  align-self: flex-start;
`;

export const itemWrapper = styledComponents.div`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
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
  align-self: flex-end;
`;

export const deleteButton = styledComponents.button`
  align-self: flex-end;
`;

export const ffStepMain = styledComponents.div`
  display: flex;
  flex-direction: column;
`;

export const textPlayMain = styledComponents.div`
  font-size: 40px;
  display: flex;
`;

export const textLine = styledComponents.p`
  margin-bottom: 8px;
`;

export const textPicture = styledComponents.img`
  height: 250px;
`;

export const ffText = styledComponents.div`
  margin-top: 18px;
`;
