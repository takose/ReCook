import { SessionAction } from '../actions';
import { UserState } from '../types';
import { LOG_IN } from '../constants';

const node = document.getElementById('main');
const currentUser: UserState = JSON.parse(node.getAttribute('user'));
const initialState = {
  id: currentUser ? currentUser['id'] : null,
  imageUrl: currentUser ? currentUser['image_url'] : null,
  token: currentUser ? currentUser['consumer_token'] : null,
  nickname: currentUser ? currentUser['nickname'] : null,
};
export const user = (state: UserState = initialState, action: SessionAction): UserState => {
  switch (action.type) {
    case LOG_IN:
      return {
        id: state.id,
        nickname: state.nickname,
        imageUrl: state.imageUrl,
        token: state.token,
      };
  }
  return state;
};
