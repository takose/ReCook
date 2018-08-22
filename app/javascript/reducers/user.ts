import { SessionAction } from '../actions';
import { UserState } from '../types';
import { LOG_IN } from '../constants';

const initialState = {
  nickname: '',
  image_url: '',
};
export const user = (state: UserState = initialState, action: SessionAction): UserState => {
  switch (action.type) {
    case LOG_IN:
      return {
        nickname: state.nickname,
        image_url: state.image_url,
      };
  }
  return state;
};
