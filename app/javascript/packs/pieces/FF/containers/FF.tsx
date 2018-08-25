import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { StoreState, StepState } from '../../../../types';
import  FF from '../components/FF';
import { FF_ID } from '../../../../constants';

export interface Props {
  steps: StepState[];
}

export function mapStateToProps(state: StoreState) {
  return {
    steps: state.ff, // TODO
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    createStepToFF: () => {
      dispatch(actions.createStepToFF());
    },
    createStep: (stepId: number) => {
      dispatch(actions.createStep(FF_ID, stepId));
    },
    powerChanged: (power: number, stepId: number) => {
      dispatch(actions.powerOnChange(power, stepId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FF);
