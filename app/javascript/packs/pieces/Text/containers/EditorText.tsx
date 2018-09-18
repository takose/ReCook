import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { StoreState } from '../../../../types';
import  EditorText from '../components/EditorText';

export function mapStateToProps(state: StoreState) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorText);
