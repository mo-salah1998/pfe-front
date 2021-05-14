import {combineReducers} from 'redux';
import authReducer from './authReducer';

import uiReducer from './uiReducer';


const allReducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
})

export default allReducers;
