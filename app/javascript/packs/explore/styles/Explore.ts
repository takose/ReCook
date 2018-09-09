import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';

export const main = styledComponents.div`
  width: calc(100vw - 60px);
  height: 100vh;
  overflow: scroll;
  padding: 10px 10px 0;
`;

export const playButton = styledComponents(Link)`
`;

export const trash = styledComponents.div`
  width: 100%;
  text-align: right;
`;
export const recipeList = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
`;

export const recipeItem = styledComponents.div`
  font-size: 18px;
  width: 200px;
  height: 200px;
  border-radius: 3px;
  padding: 20px;
  margin: 10px;
  background: #FFF;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 300ms;
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-6px);
  }
`;
