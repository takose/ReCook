import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { StoreState } from '../../../../types';
import  EditorTaste from '../components/EditorTaste';

export function mapStateToProps(state: StoreState) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    createTasteStep: (sake: number, soysauce: number, mirin: number, vinegar: number) => {
      dispatch(actions.createTasteStep(sake, soysauce, mirin, vinegar));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorTaste);
