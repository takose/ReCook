import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  CREATE_STEP,
  UPDATE_RECIPE,
  SET_EDIT_RECIPE,
  SET_PLAY_RECIPE,
  GET_EDIT_RECIPE,
  GET_PLAY_RECIPE,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCEEDED,
  DELETE_STEP,
  DELETE_STEP_SUCCEEDED,
  SWITCH_STEP,
} from '../constants';
import {
  createOrUpdateStepRequest,
  updateRequest,
  getRecipeRequest,
  deleteRecipeRequest,
  deleteStepRequest,
} from './api';

function* createStep(action) {
  const getCurrent = state => state.current;
  const current = yield select(getCurrent);
  const getToken = state => state.user.token;
  const getOption = state => state.current.editRecipe.option;
  const token = yield select(getToken);
  const option = yield select(getOption);
  const recipe = yield call(createOrUpdateStepRequest, {
    token,
    option,
    stepId: action.stepId,
    recipeId: current.editRecipe.id,
    pieceId: current.pieceId,
    action: action.content,
  });
  yield put({
    recipe,
    type: SET_EDIT_RECIPE,
  });
}

function* updateRecipe({ recipeId, title, desc, type }) {
  const getToken = state => state.user.token;
  const token = yield select(getToken);
  const recipe = yield call(updateRequest, { recipeId, title, desc, token });
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

function* deleteStep(action) {
  const result = yield call(deleteStepRequest, action);
  if (result) {
    yield put({
      id: null,
      type: SWITCH_STEP,
    });
    yield put({
      id: action.stepId,
      type: DELETE_STEP_SUCCEEDED,
    });
  }
}

function* reCookSaga() {
  yield takeEvery(CREATE_STEP, createStep);
  yield takeEvery(UPDATE_RECIPE, updateRecipe);
  yield takeEvery(GET_EDIT_RECIPE, getEditRecipe);
  yield takeEvery(GET_PLAY_RECIPE, getPlayRecipe);
  yield takeEvery(DELETE_RECIPE, deleteRecipe);
  yield takeEvery(DELETE_STEP, deleteStep);
}

export default reCookSaga;
