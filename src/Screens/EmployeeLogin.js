import { useSelector,useDispatch } from 'react-redux';
import '../Css/EmployeeLogin.css';
import {useHistory} from 'react-router-dom';
import {employeeIdChange,employeePasswordChange} from '../Store/EmployeeLogin/action'
import { changeData } from '../Store/EmployeeLogin/action';

function EmployeeLogin() {

  const history=useHistory();
  const dispatch=useDispatch();
  const EmployeeLogin=useSelector(x=>x.EmployeeLoginReducer)
  

  
  const handleInputChange=(e)=>{
   // console.log(e,"passchange");
    dispatch(changeData(e));
  }
  const sendUser=(address)=>
  {
    history.push("/"+address)
  }
const checkCredentials=()=>
{
  if(true)
  sendUser("Transaction1");
}

  return (
    <div className="EmployeeLogin">
        
      <h2>Employee Login</h2>

      <form className="formEmployeeLogin">
        <div className="row">
          <div className="form-group form-id">
            <label>Employee Id</label>
            <input
             type="text"
             name="employeeId"
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
            <label>Password</label>
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
        
        <button className="buttonEmployeeLogin" onClick={()=>checkCredentials}>Submit</button>
        <div className="notAnCustomer">
          <label onClick={()=>sendUser("CustomerLogin")}>Are you a Customer? Click here.</label>
        </div>
      </form>
    
    </div>
  );
}

export default EmployeeLogin;
