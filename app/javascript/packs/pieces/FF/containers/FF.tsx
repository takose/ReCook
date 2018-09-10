import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { StoreState } from '../../../../types';
import  FF from '../components/FF';

export function mapStateToProps(state: StoreState) {
  return {
    ffSteps: state.ff, // TODO
    steps: state.steps,
    current: state.current,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    createStep: (power: number, temperature: number, time: number, mode: number) => {
      dispatch(actions.createStep({ power, temperature, time, mode }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FF);
