import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import sidebarReducer from './sidebarReducer';

const reducers = combineReducers({
  movieReducer,
  sidebarReducer,
});

export default reducers;
