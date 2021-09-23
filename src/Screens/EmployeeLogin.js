import { useSelector, useDispatch } from 'react-redux';
import '../Css/EmployeeLogin.css';
import { useHistory } from 'react-router-dom';
import { checkCredentials } from '../Functions/Login';
import { changeData } from '../Store/EmployeeLogin/action';
import { useState } from 'react';
import BackHeader from '../Components/Headers/BackHeader';

function EmployeeLogin() {

  const history=useHistory();
  const dispatch=useDispatch();
  const EmployeeLoginReducer=useSelector(x=>x.EmployeeLoginReducer)
  
  const [error, setError] = useState("");
  
  const handleInputChange=(e)=>{
    dispatch(changeData(e));
  }
  const sendUser=(address)=>
  {
    history.push("/"+address)
  }

  return (
    <div className="EmployeeLogin">
        
      <BackHeader heading="Employee Login"/>
      <div className="formEmployeeLogin">
        <div className="row">
          <div className="form-group form-id">
          <div className="EmployeeLoginKeyText">Employee Id</div>
            <input
             type="text"
             name="username"
             className="form-control"
             placeholder="Enter Employee Id"
             id="employeeid"
             value={EmployeeLogin.employeeId}
             onChange={handleInputChange}
             required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
          <div className="EmployeeLoginKeyText">Password</div>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={EmployeeLogin.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="errorCustomerLogin">{error}</div>

        <button className="buttonEmployeeLogin" onClick={()=>checkCredentials("B", setError, dispatch, EmployeeLoginReducer, history)}>Submit</button>
        <div className="notAnCustomer">
        <div className="EmployeeLoginKeyText" onClick={()=>sendUser("CustomerLogin")}>Are you a Customer? Click here.</div>
        </div>
      </div>
    
    </div>
  );
}

export default EmployeeLogin;
