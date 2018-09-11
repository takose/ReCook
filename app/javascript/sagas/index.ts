import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  CREATE_STEP,
  CREATE_STEP_SUCCEEDED,
  SET_RECIPE,
  UPDATE_TITLE,
  UPDATE_TITLE_SUCCEEDED,
  CREATE_RECIPE,
  GET_EDIT_RECIPE,
  GET_PLAY_RECIPE,
  SET_EDIT_STEPS,
  SET_PLAY_STEPS,
} from '../constants';
import { createStepsRequest, updateTitleRequest, getRecipeRequest } from './api';

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
  if (!recipeId) yield put({ type: SET_RECIPE, recipeId: step.recipe_id });
}

function* findOrCreateRecipe(action) {
  delete action['type'];
  const getUser = state => state.user;
  const user = yield select(getUser);
  const getCurrentEditRecipeId = state => state.current.editRecipe.id;
  const currentEditRecipeId = yield select(getCurrentEditRecipeId);
  const recipe = yield call(updateTitleRequest, { action, token: user.token });
  if (!currentEditRecipeId) {
    yield put({
      user,
      type: CREATE_RECIPE,
      id: recipe.id,
      title: action.title,
    });
  }
}

function* updateTitle(action) {
  const getRecipeId = state => state.current.recipeId;
  const recipeId = yield select(getRecipeId);
  yield put({
    type: UPDATE_TITLE_SUCCEEDED,
    title: action.title,
    recipeId: action.id,
  });
  if (!recipeId) yield put({ type: SET_RECIPE, recipeId: action.recipeId });
}

function* getEditRecipe(action) {
  const recipe = yield call(getRecipeRequest, action);
  yield put({
    recipe: {
      ...recipe,
    },
    type: SET_EDIT_STEPS,
  });
}

function* getPlayRecipe(action) {
  const recipe = yield call(getRecipeRequest, action);
  yield put({
    type: SET_PLAY_STEPS,
    steps: recipe.steps,
  });
}

function* reCookSaga() {
  yield takeEvery(CREATE_STEP, createStep);
  yield takeEvery(UPDATE_TITLE, findOrCreateRecipe);
  yield takeEvery(CREATE_RECIPE, updateTitle);
  yield takeEvery(GET_EDIT_RECIPE, getEditRecipe);
  yield takeEvery(GET_PLAY_RECIPE, getPlayRecipe);
}

export default reCookSaga;
