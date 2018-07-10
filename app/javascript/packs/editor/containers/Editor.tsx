import { connect } from 'react-redux';
import { Dispatch } from "redux";
import * as actions from '../../../actions/';
import { StoreState } from '../../../types/index';

import SideBar from '../components/Editor';

export default connect()(SideBar);
