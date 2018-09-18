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
`;

export const itemWrapper = styledComponents.div`
  margin-bottom: 18px;
  display: flex;
  align-items: flex-end;
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

///////// old

export const chart = styledComponents.div`
  width: 600px;
  height: 600px;
  margin-right: 50px;
`;

export const rightColumn = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const steps = styledComponents.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const step = styledComponents.button`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
`;

export const select = styledComponents.input`
  background: none;
  margin: 0 10px;
  width: 50px;
  border: none;
  text-align: center;
  border-bottom: solid 1px #ccc;
  &:focus {
    outline: none;
    border-bottom: solid 1px #888;
  }
`;

export const trash = styledComponents.button`
  opacity: 0.6;
  margin-left: 8px;
`;

export const addStep = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// .addStepInactive {
//   composes: addStep;
//   opacity: 0.5;
// }

export const addStepButton = styledComponents.button`
  text-align: left;
  display: flex;
  margin-left: 5px;
  font-size: 30px;
`;

export const plus = styledComponents.div`
  width: 30px;
  height: 30px;
  background-color: #A9E85D;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const playButton = styledComponents.button`
  background-color: #6D4C41;
  color: #fff;
  height: 45px;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

// .playButtonInactive {
//   composes: playButton;
//   opacity: 0.5;
// }
