import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  CREATE_STEP,
  UPDATE_TITLE,
  SET_EDIT_RECIPE,
  SET_PLAY_RECIPE,
  GET_EDIT_RECIPE,
  GET_PLAY_RECIPE,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCEEDED,
} from '../constants';
import {
  createStepRequest,
  updateTitleRequest,
  getRecipeRequest,
  deleteRecipeRequest,
} from './api';

function* createStep(action) {
  const getCurrent = state => state.current;
  const current = yield select(getCurrent);
  const getToken = state => state.user.token;
  const token = yield select(getToken);
  const recipe = yield call(createStepRequest, {
    token,
    recipeId: current.editRecipe.id,
    pieceId: current.pieceId,
    action: action.content,
  });
  yield put({
    recipe,
    type: SET_EDIT_RECIPE,
  });
}

function* updateTitle({ recipeId, title, type }) {
  const getToken = state => state.user.token;
  const token = yield select(getToken);
  const recipe = yield call(updateTitleRequest, { recipeId, title, token });
  yield put({
    recipe,
    type: SET_EDIT_RECIPE,
  });
}

function* getEditRecipe(action) {
  const recipe = yield call(getRecipeRequest, action);
  yield put({
    recipe: {
      ...recipe,
    },
    type: SET_EDIT_RECIPE,
  });
}

function* getPlayRecipe(action) {
  const recipe = yield call(getRecipeRequest, action);
  yield put({
    recipe,
    type: SET_PLAY_RECIPE,
  });
}

function* deleteRecipe(action) {
  const result = yield call(deleteRecipeRequest, action);
  if (result) {
    yield put({
      id: action.id,
      type: DELETE_RECIPE_SUCCEEDED,
    });
  }
}

function* reCookSaga() {
  yield takeEvery(CREATE_STEP, createStep);
  yield takeEvery(UPDATE_TITLE, updateTitle);
  yield takeEvery(GET_EDIT_RECIPE, getEditRecipe);
  yield takeEvery(GET_PLAY_RECIPE, getPlayRecipe);
  yield takeEvery(DELETE_RECIPE, deleteRecipe);
}

export default reCookSaga;
