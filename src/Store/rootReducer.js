import {combineReducers} from 'redux';
import {Transaction2Reducer} from './Transaction2/reducer'
import {CustomerLoginReducer} from './CustomerLogin/reducer'
import {Transaction1Reducer} from './Transaction1/reducer'
import {EmployeeLoginReducer} from './EmployeeLogin/reducer'

const rootReducer= combineReducers({Transaction1Reducer, Transaction2Reducer, CustomerLoginReducer, EmployeeLoginReducer});
export default rootReducer;