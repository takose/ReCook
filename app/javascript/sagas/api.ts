export function createOrUpdateStepRequest(payload) {
  const { action, recipeId, stepId, pieceId, token } = payload;
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
      stepId,
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
        ...res.recipe,
      };
    });
}

export function updateTitleRequest(payload) {
  const { recipeId, title, token } = payload;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify({
      token,
      recipeId,
      title,
    }),
  };
  return fetch('/api/recipes', options)
    .then(res => res.json())
    .then((res) => {
      return {
        ...res.recipe,
      };
    });
}

export function getRecipeRequest(action) {
  return fetch(`/api/recipes/${action.id}/edit`)
    .then(res => res.json())
    .then((res) => {
      return {
        ...res.recipe,
      };
    });
}

export function deleteRecipeRequest(action) {
  return fetch(`/api/recipes/${action.id}`, { method: 'DELETE' })
    .then(() => {
      return true;
    });
}

export function deleteStepRequest(action) {
  return fetch(`/api/steps/${action.stepId}`, { method: 'DELETE' })
    .then(() => {
      return true;
    });
}
