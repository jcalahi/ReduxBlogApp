import axios from 'axios';
import { API_URL, API_KEY, FETCH_POSTS } from '../constants';

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
