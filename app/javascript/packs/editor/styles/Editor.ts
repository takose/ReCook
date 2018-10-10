import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';

export const main = styledComponents.div`
  display: flex;
`;

export const playLink = styledComponents(Link)`
  text-align: center;
  margin: 0 10px;
  padding: 4px 32px;
  color: #3497ED;
  border: solid 1px #3497ED;
  border-radius: 16px;
  transition: all 200ms;
  &:hover {
    background-color: #3497ED;
    color: #fff;
  }
`;
