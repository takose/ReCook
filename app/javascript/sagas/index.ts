import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  CREATE_STEP,
  CREATE_STEP_SUCCEEDED,
  CREATE_RECIPE,
  UPDATE_TITLE,
  UPDATE_TITLE_SUCCEEDED,
  ADD_RECIPE,
} from '../constants';
import { createStepsRequest, updateTitleRequest } from './api';

function* createStep(action) {
  const getRecipeId = state => state.current.recipeId;
  const recipeId = yield select(getRecipeId);
  const getPieceId = state => state.current.pieceId;
  const pieceId = yield select(getPieceId);
  const getToken = state => state.user.token;
  const token = yield select(getToken);
  const step = yield call(createStepsRequest, { recipeId, pieceId, token, action: action.content });
  yield put({
    ...step,
    type: CREATE_STEP_SUCCEEDED,
  });
  if (!recipeId) yield put({ type: CREATE_RECIPE, recipeId: step.recipe_id });
}

function* addRecipe(action) {
  delete action['type'];
  const getUser = state => state.user;
  const user = yield select(getUser);
  const recipe = yield call(updateTitleRequest, { action, token: user.token });
  yield put({
    user,
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
  yield takeEvery(CREATE_STEP, createStep);
  yield takeEvery(UPDATE_TITLE, addRecipe);
  yield takeEvery(ADD_RECIPE, updateTitle);
}

export default reCookSaga;
