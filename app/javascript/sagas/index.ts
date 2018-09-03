import { call, put, takeEvery, select } from 'redux-saga/effects';
import { CREATE_STEP, CREATE_FF_STEP, FF_ID, CREATE_FF_STEP_SUCCEEDED } from '../constants';
import { createStepsRequest } from './api';

function* createStep(action) {
  const getRecipeId = state => state.current.recipeId;
  const recipeId = yield select(getRecipeId);
  const ffStep = yield call(createStepsRequest, { action, recipeId });
  console.log(ffStep);
  yield put({
    type: CREATE_FF_STEP_SUCCEEDED,
    id: ffStep.id,
    mode: ffStep.mode,
    temperature: ffStep.temperature,
    power: ffStep.power,
    time: ffStep.time,
  });
  yield put({ type: CREATE_STEP, pieceId: FF_ID, stepId: ffStep.id });
  yield put({
    type: CREATE_FF_STEP_SUCCEEDED,
    id: ffStep.id,
    mode: ffStep.mode,
    temperature: ffStep.temperature,
    power: ffStep.power,
    time: ffStep.time,
  });
}
function* reCookSaga() {
  yield takeEvery(CREATE_FF_STEP, createStep);
}

export default reCookSaga;
