import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { StoreState, StepState, FFState } from '../../../../types';
import  FF from '../components/FF';
import { FF_ID } from '../../../../constants';

export function mapStateToProps(state: StoreState) {
  return {
    ffSteps: state.ff, // TODO
    steps: state.steps,
    current: state.current,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    createFFStep: (power: number, temperature: number, time: number) => {
      dispatch(actions.createFFStep(power, temperature, time));
    },
    createStep: (stepId: number) => {
      dispatch(actions.createStep(FF_ID, stepId));
    },
    createRecipe: () => {
      dispatch(actions.createRecipe());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FF);
