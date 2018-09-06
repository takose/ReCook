import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  FF_ID,
  TEXT_ID,
  TASTE_ID,
  CREATE_STEP,
  CREATE_FF_STEP,
  CREATE_FF_STEP_SUCCEEDED,
  CREATE_TEXT_STEP,
  CREATE_TEXT_STEP_SUCCEEDED,
  CREATE_TASTE_STEP,
  CREATE_TASTE_STEP_SUCCEEDED,
  CREATE_RECIPE,
  UPDATE_TITLE,
  UPDATE_TITLE_SUCCEEDED,
  ADD_RECIPE,
} from '../constants';
import { createStepsRequest, updateTitleRequest } from './api';
function getAction(pieceId) {
  switch (pieceId) {
    case FF_ID:
      return CREATE_FF_STEP_SUCCEEDED;
    case TEXT_ID:
      return CREATE_TEXT_STEP_SUCCEEDED;
    case TASTE_ID:
      return CREATE_TASTE_STEP_SUCCEEDED;
    default:
      break;
  }
}

function* createStep(action) {
  const getRecipeId = state => state.current.recipeId;
  const recipeId = yield select(getRecipeId);
  const getPieceId = state => state.current.pieceId;
  const pieceId = yield select(getPieceId);
  const getToken = state => state.user.token;
  const token = yield select(getToken);
  const step = yield call(createStepsRequest, { action, recipeId, pieceId, token });
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

function* addRecipe(action) {
  delete action['type'];
  const getToken = state => state.user.token;
  const token = yield select(getToken);
  const recipe = yield call(updateTitleRequest, { action, token });
  yield put({
    type: ADD_RECIPE,
    id: recipe.id,
    title: action.title,
  });
}

function* updateTitle(action) {
  const getRecipeId = state => state.current.recipeId;
  const recipeId = yield select(getRecipeId);
  yield put({
    type: UPDATE_TITLE_SUCCEEDED,
    title: action.title,
    recipeId: action.id,
  });
  if (!recipeId) yield put({ type: CREATE_RECIPE, recipeId: action.recipeId });
}

function* reCookSaga() {
  yield takeEvery(CREATE_FF_STEP, createStep);
  yield takeEvery(CREATE_TEXT_STEP, createStep);
  yield takeEvery(CREATE_TASTE_STEP, createStep);
  yield takeEvery(UPDATE_TITLE, addRecipe);
  yield takeEvery(ADD_RECIPE, updateTitle);
}

export default reCookSaga;
