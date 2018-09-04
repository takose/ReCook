import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { StoreState, StepState, FFState } from '../../../../types';
import  EditorText from '../components/EditorText';

export function mapStateToProps(state: StoreState) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    createTextStep: (body: string) => {
      dispatch(actions.createTextStep(body));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorText);
