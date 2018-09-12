import { FF_ID } from '../constants';

export function createStepsRequest(payload) {
  const { action, recipeId, pieceId, token } = payload;
  delete action['type'];
  const content = JSON.stringify({
    ...action,
  });
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify({
      recipeId,
      content,
      pieceId,
      token,
    }),
  };
  return fetch('/api/steps', options)
    .then(res => res.json())
    .then((res) => {
      return {
        ...res,
        content,
      };
    });
}

export function updateTitleRequest(payload) {
  const { action, token } = payload;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify({
      token,
      recipeId: action.recipeId,
      title: action.title,
    }),
  };
  return fetch('/api/recipes', options)
    .then(res => res.json())
    .then((res) => {
      return {
        ...res,
      };
    });
}

export function getRecipeRequest(action) {
  return fetch(`/api/recipes/${action.id}/edit`)
    .then(res => res.json())
    .then((res) => {
      const steps = res.steps.map(step => ({
        ...step,
        pieceId: step.piece_id,
      }));
      return {
        ...res,
        steps,
      };
    });
}

export function deleteRecipeRequest(action) {
  return fetch(`/api/recipes/${action.id}`, { method: 'DELETE' })
    .then(() => {
      return true;
    });
}
