export function createOrUpdateStepRequest(payload) {
  const { action, recipeId, stepId, pieceId, token, option } = payload;
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
      option,
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

export function updateRequest(payload) {
  const { recipeId, title, desc, token } = payload;
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
      desc,
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
