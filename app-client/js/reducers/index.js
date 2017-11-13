import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import sidebarReducer from './sidebarReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  movieReducer,
  sidebarReducer,
  userReducer,
  modalReducer,
});

export default reducers;
