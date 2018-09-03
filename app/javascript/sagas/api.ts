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
    .then(result => ({
      mode: result.mode,
      power: result.power,
      time: result.time,
      temperature: result.temperature,
      id: result.id,
    }));
}
