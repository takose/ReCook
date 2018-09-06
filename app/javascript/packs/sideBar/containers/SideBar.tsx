import { connect } from 'react-redux';
import { StoreState } from '../../../types';
import SideBar from '../components/SideBar';

export function mapStateToProps(state: StoreState) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(SideBar);
