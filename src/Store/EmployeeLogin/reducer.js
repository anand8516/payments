import { REDUCER_CONSTANTS } from "../Constants/Constants"

const initialState={
    employeeId:"",
    password:""
}
 export const EmployeeLoginReducer= ( state=initialState,action) =>{
    switch(action.type){

    case REDUCER_CONSTANTS.EMPLOYEE_ID: return {...state, employeeId : action.data}
    case REDUCER_CONSTANTS.PASSWORD:   return {...state, password : action.data}
        default: return {...state};
}
}
