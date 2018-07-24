import styledComponents from 'styled-components';

export const itemList = styledComponents.div`
  height: 100%;
  width: 80px;
  padding: 30px 0;
  background: #3B72A1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const item = styledComponents.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
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

export const wrapper = styledComponents.div`
`;

export const avatar = styledComponents.img`
  width: 40px;
  border-radius: 50%;
`;
