import { combineReducers } from 'redux';
import actors from './actors.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  actors,
  formReducer
});

export default rootReducer;
