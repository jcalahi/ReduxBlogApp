import { FETCH_POSTS } from '../constants';

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, { all: action.payload.data });
    default:
      return state;
  }
}
