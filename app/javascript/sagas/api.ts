import { FF_ID } from '../constants';

export function createStepsRequest(payload) {
  const { action, recipeId } = payload;
  const content = JSON.stringify({
    mode: action.mode,
    temperature: action.temperature,
    time: action.time,
    power: action.power,
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
      pieceId: FF_ID,
    }),
  };
  return fetch('/api/steps', options)
    .then(res => res.json())
    .then((res) => {
      const content = JSON.parse(res.content);
      return {
        mode: content.mode,
        power: content.power,
        time: content.time,
        temperature: content.temperature,
        id: res.id,
        recipeId: res.recipe_id,
        pieceId: res.piece_id,
      };
    });
}
