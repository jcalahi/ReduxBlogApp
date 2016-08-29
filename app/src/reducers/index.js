import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';

const reducers = combineReducers({
  posts: PostsReducer
});

export default reducers;
