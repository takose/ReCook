import { SessionAction } from '../actions';
import { UserState } from '../types';
import { LOG_IN } from '../constants';

const initialState = {
  nickname: '',
  imageUrl: '',
  token: '',
};
export const user = (state: UserState = initialState, action: SessionAction): UserState => {
  switch (action.type) {
    case LOG_IN:
      return {
        nickname: state.nickname,
        imageUrl: state.imageUrl,
        token: state.token,
      };
  }
  return state;
};
