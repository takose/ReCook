import * as React from 'react';
import { NavLink } from 'react-router-dom';

import {
  wrapper as Wrapper,
  item as Item,
  icon as Icon,
  navLink,
} from '../styles/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlay, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

export interface Props {
}

class SideBar extends React.Component<Props, object> {
  render() {
    return (
      <Wrapper>
        <Item>
          <NavLink to="/explore" style={{ opacity: 0.5 }} activeStyle={{ opacity: 1 }}>
          <Icon>
            <FontAwesomeIcon icon={faSearch} />
          </Icon>
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/editor" style={{ opacity: 0.5 }} activeStyle={{ opacity: 1 }}>
            <Icon>
              <FontAwesomeIcon icon={faEdit} />
            </Icon>
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/player" style={{ opacity: 0.5 }} activeStyle={{ opacity: 1 }}>
            <Icon>
              <FontAwesomeIcon icon={faPlay} />
            </Icon>
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/settings" style={{ opacity: 0.5 }} activeStyle={{ opacity: 1 }}>
            <Icon>
              <FontAwesomeIcon icon={faCog} />
            </Icon>
          </NavLink>
        </Item>
      </Wrapper>
    );
  }
}

export default SideBar;
