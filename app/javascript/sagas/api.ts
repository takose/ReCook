import { FF_ID } from '../constants';

export function createStepsRequest(payload) {
  const { action, recipeId, pieceId } = payload;
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
    }),
  };
  return fetch('/api/steps', options)
    .then(res => res.json())
    .then((res) => {
      const content = JSON.parse(res.content);
      return {
        ...content,
        ...res,
      };
    });
}
