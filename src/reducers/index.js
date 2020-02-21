import { combineReducers } from 'redux';
import { games } from './games';
import { videos } from './videos';

export default combineReducers({
  games,
  videos,
});
