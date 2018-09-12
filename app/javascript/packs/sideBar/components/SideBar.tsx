import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { UserState } from '../../../types';

import {
  itemList as ItemList,
  item as Item,
  icon as Icon,
  wrapper as Wrapper,
  avatar as Avatar,
  signup as Signup,
} from '../styles/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlay, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

export interface Props {
  user?: UserState;
}

class SideBar extends React.Component<Props, object> {
  oddEvent = (match, location) => {
    if (location.pathname.match(/\/recipes\/new/i) ||
        location.pathname.match(/\/recipes\/edit/i)) {
      return true;
    }
    return false;
  }
  render() {
    const account = this.props.user === null ? (
      <Signup href="/auth/twitter">sign up</Signup>
    ) : (
      <Avatar src={this.props.user.imageUrl} />
    );
    return (
      <ItemList>
        <Wrapper>
          <Item>
            <NavLink to="/recipes/explore" style={{ opacity: 0.5 }} activeStyle={{ opacity: 1 }}>
            <Icon>
              <FontAwesomeIcon icon={faSearch} />
            </Icon>
            </NavLink>
          </Item>
          <Item>
            <NavLink
              to="/recipes/new"
              isActive={this.oddEvent}
              style={{ opacity: 0.5 }}
              activeStyle={{ opacity: 1 }}>
              <Icon>
                <FontAwesomeIcon icon={faEdit} />
              </Icon>
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/recipes/player" style={{ opacity: 0.5 }} activeStyle={{ opacity: 1 }}>
              <Icon>
                <FontAwesomeIcon icon={faPlay} />
              </Icon>
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/recipes/settings" style={{ opacity: 0.5 }} activeStyle={{ opacity: 1 }}>
              <Icon>
                <FontAwesomeIcon icon={faCog} />
              </Icon>
            </NavLink>
          </Item>
        </Wrapper>
        <Item>
          {account}
        </Item>
      </ItemList>
    );
  }
}

export default SideBar;
