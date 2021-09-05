import {combineReducers} from 'redux';
import {Transaction2Reducer} from './Transaction2/reducer'
import {CustomerLoginReducer} from './CustomerLogin/reducer'

const rootReducer= combineReducers({Transaction2Reducer, CustomerLoginReducer});
export default rootReducer;