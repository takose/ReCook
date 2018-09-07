import { connect } from 'react-redux';
import { StoreState } from '../../../types';
import SideBar from '../components/SideBar';

export function mapStateToProps(state: StoreState) {
  const user = state.user.token ? state.user : null;
  return {
    user,
  };
}

export default connect(mapStateToProps)(SideBar);
