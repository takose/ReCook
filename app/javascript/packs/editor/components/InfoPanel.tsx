import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import PieceList from '../containers/PieceList';
import { main as Main } from '../styles/InfoPanel';
import { withRouter } from 'react-router-dom';
import {
  playLink as PlayLink,
} from '../styles/Editor';

export interface Props {
}

class InfoPanel extends React.Component<RouteComponentProps<any> & Props, object> {
  render() {
    return (
      <Main>
        <PieceList />
        {
          (this.props.match.params.id) ?
            <PlayLink to={`/recipes/player/${this.props.match.params.id}`}>Play</PlayLink>
            : null
        }
      </Main>
    );
  }
}

export default withRouter(InfoPanel);
