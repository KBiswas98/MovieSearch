import { combineReducers } from 'redux';
import ApplicationReducer from './ApplicaitonReducers';
import FevReducers from './FevReducers';

const allReducer = combineReducers({ ApplicationReducer, FevReducers });
export default allReducer;
