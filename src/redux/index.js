import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import commentDataReducer from './commentDataReducer';
//insert another reducers here to be combined

const reducers = combineReducers({
  loginReducer,
  commentDataReducer,
});

export default reducers;
