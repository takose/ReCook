import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { StoreState } from '../../../../types';
import StepsPanel from '../components/StepsPanel';

export function mapStateToProps(state: StoreState) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default withRouter(connect()(StepsPanel));
