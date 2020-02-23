import { combineReducers } from 'redux';
import { games } from './games';
import { videos } from './videos';
import { loading } from './loading';

export default combineReducers({
  games,
  videos,
  loading,
});
