import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  FF_ID,
  TEXT_ID,
  CREATE_STEP,
  CREATE_FF_STEP,
  CREATE_FF_STEP_SUCCEEDED,
  CREATE_TEXT_STEP,
  CREATE_TEXT_STEP_SUCCEEDED,
  CREATE_RECIPE,
} from '../constants';
import { createStepsRequest } from './api';
function getAction(pieceId) {
  switch (pieceId) {
    case FF_ID:
      return CREATE_FF_STEP_SUCCEEDED;
    case TEXT_ID:
      return CREATE_TEXT_STEP_SUCCEEDED;
    default:
      break;
  }
}

function* createStep(action) {
  const getRecipeId = state => state.current.recipeId;
  const recipeId = yield select(getRecipeId);
  const getPieceId = state => state.current.pieceId;
  const pieceId = yield select(getPieceId);
  const step = yield call(createStepsRequest, { action, recipeId, pieceId });
  const type = getAction(step.piece_id);
  yield put({
    ...step,
    type,
  });
  yield put({
    type: CREATE_STEP,
    pieceId: step.piece_id,
    stepId: step.id,
  });
  if (!recipeId) yield put({ type: CREATE_RECIPE, recipeId: step.recipe_id });
}
function* reCookSaga() {
  yield takeEvery(CREATE_FF_STEP, createStep);
  yield takeEvery(CREATE_TEXT_STEP, createStep);
}

export default reCookSaga;
