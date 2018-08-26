import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { StoreState, StepState, FFState } from '../../../../types';
import  FF from '../components/FF';
import { FF_ID } from '../../../../constants';

export interface Props {
  ffSteps: FFState[];
  steps: StepState[];
}

export function mapStateToProps(state: StoreState) {
  return {
    ffSteps: state.ff, // TODO
    steps: state.steps,
    current: state.current,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    createFFStep: () => {
      dispatch(actions.createStepToFF());
    },
    createStep: (stepId: number) => {
      dispatch(actions.createStep(FF_ID, stepId));
    },
    createRecipe: () => {
      dispatch(actions.createRecipe());
    },
    powerChanged: (power: number, stepId: number) => {
      dispatch(actions.powerOnChange(power, stepId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FF);
