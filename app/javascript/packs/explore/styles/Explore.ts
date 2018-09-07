import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';

export const main = styledComponents.div`
  width: calc(100vw - 60px);
  height: 100vh;
  overflow: scroll;
  padding: 10px 10px 0;
`;

export const recipeList = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
`;

export const recipeItem = styledComponents(Link)`
  width: 200px;
  height: 200px;
  border-radius: 3px;
  padding: 10px;
  margin: 10px;
  background: #FFF;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
  transition: all 300ms;
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
    transform: transleteY(-6px);
  }
`;
