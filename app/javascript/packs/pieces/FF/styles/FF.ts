import styledComponents from 'styled-components';
export const workspace = styledComponents.div`
  display: flex;
  height: 300px;
`;

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
