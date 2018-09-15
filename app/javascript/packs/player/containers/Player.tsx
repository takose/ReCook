import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import { StoreState } from '../../../types';
import Player from '../components/Player';

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.current.playRecipe.steps,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getRecipe: (id: number) => {
      dispatch(actions.getPlayRecipe(id));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));
