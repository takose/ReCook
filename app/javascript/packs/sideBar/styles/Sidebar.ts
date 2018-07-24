import styledComponents from 'styled-components';

export const wrapper = styledComponents.div`
  height: 100%;
  width: 80px;
  padding: 30px 0;
  background: #3B72A1;
`;

export const item = styledComponents.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export const icon = styledComponents.svg`
  width: 100%;
  height: 28px;
  color: #EBF1F6;
`;

export const signup = styledComponents.a`
  font-size: 12px;
  text-align: center;
  color: #EBF1F6;
`;
