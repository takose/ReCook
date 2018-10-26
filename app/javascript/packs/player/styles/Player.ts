import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';

export const main = styledComponents.div`
  width: calc(100vw - 60px);
  height: 100vh;
  overflow: scroll;
  padding: 16px;
`;

export const topPanel = styledComponents.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const editLink = styledComponents(Link)`
  text-align: center;
  padding: 4px 32px;
  color: #3497ED;
  border: solid 1px #3497ED;
  border-radius: 16px;
  width: 100px;
  margin-bottom: 8px;
  transition: all 200ms;
  &:hover {
    background-color: #3497ED;
    color: #fff;
  }
`;

export const ffSelect = styledComponents.select`
`;
