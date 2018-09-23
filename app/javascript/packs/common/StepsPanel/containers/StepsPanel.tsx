import { connect } from 'react-redux';
import { StoreState } from '../../../../types';
import StepsPanel from '../components/StepsPanel';

export function mapStateToProps(state: StoreState) {
  return {
    currentStepId: state.current.stepId,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps)(StepsPanel);
