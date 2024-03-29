import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const main = styledComponents.div`
  width: calc(100vw - 60px);
  height: 100vh;
  overflow: scroll;
  padding: 10px 10px 0;
`;

export const titleWrapper = styledComponents.div`
  height: 60px;
`;

export const titleIcon = styledComponents(FontAwesomeIcon)`
  margin-left: 6px;
  color: #9E9E9E;
  font-size: 14px;
`;

export const playIcon = styledComponents(FontAwesomeIcon)`
  font-size: 14px;
  margin-right: 6px;
`;

export const playButton = styledComponents(Link)`
  font-size: 16px;
  letter-spacing: 2px;
  border: solid 1px #3497ED;
  border-radius: 18px;
  width: 90px;
  padding: 4px;
  text-align: center;
  color: #3497ED;
  transition: all 300ms;
  &:hover {
    opacity: 0.6;
  }
`;

export const editButton = styledComponents(playButton)`
  color: #52D356;
  border: solid 1px #52D356;
  margin-left: 8px;
`;

export const buttonWrapper = styledComponents.div`
  display: flex;
`;

export const icon = styledComponents.div`
  margin-left: 8px;
  text-align: right;
  color: #9E9E9E;
  cursor : pointer;
  transition: all 300ms;
  opacity: 0;
  &:hover {
    color: #212121;
  }
`;

export const iconWrapper = styledComponents.div`
  display: flex;
`;

export const bottomBlock = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const userIcon = styledComponents.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 6px;
`;

export const user = styledComponents.div`
  display: flex;
  align-items: center;
`;

export const recipeList = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
`;

export const recipeItem = styledComponents.div`
  font-size: 18px;
  width: 220px;
  height: 220px;
  border-radius: 3px;
  padding: 20px;
  margin: 15px;
  background: #FFF;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 300ms;
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
    ${icon} {
      opacity: 1;
    }
  }
`;

export const modeSelector = styledComponents.div`
  display: flex;
  margin-bottom: 18px;
`;

export const modeSelectorItem = styledComponents.div`
font-size: 18px;
  cursor: pointer;
  border:
    ${(props: {isActive: boolean}) => (
      props.isActive ? 'solid 3px #141B23' : 'none'
    )};
  border-width: 0 0 3px;
  padding: 10px 12px;
`;

export const listWrapper = styledComponents.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  flex-grow: 1;
`;
