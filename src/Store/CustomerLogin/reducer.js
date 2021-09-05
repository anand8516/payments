import {REDUCER_CONSTANTS} from '../Constants/Constants';
// import axios from 'axios';
// import thunk from 'redux-thunk';

var initialState = {
    customerId: "",
    password: ""
}

export const CustomerLoginReducer = (state = initialState, action) =>{
    switch(action.type){
        //redux actions for every action
        case  REDUCER_CONSTANTS.CUSTOMER_ID: return {...state, customerId: action.data}
        case  REDUCER_CONSTANTS.PASSWORD: return {...state, password: action.data}
        default: return { ...state };
    }
}
