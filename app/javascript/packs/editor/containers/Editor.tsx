import { connect } from 'react-redux';
import { Dispatch } from "redux";
import * as actions from '../../../actions/';
import { StoreState } from '../../../types/index';

import Editor from '../components/Editor';

export default connect()(Editor);
