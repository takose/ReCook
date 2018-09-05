import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { StoreState } from '../../../types';
import  MainPanel from '../components/MainPanel';

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.steps,
    ffSteps: state.ff,
    textSteps: state.text,
    tasteSteps: state.taste,
    current: state.current,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
