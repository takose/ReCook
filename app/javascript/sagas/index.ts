import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { CREATE_STEP, CREATE_FF_STEP, FF_ID } from '../constants';

function* createFFStep() {
  const getFFStepId = state => state.ff[state.ff.length - 1].id;
  const ffStepId = yield select(getFFStepId);
  yield put({ type: CREATE_STEP, pieceId: FF_ID, stepId: ffStepId });
}
function* reCookSaga() {
  yield takeEvery(CREATE_FF_STEP, createFFStep);
}

export default reCookSaga;
