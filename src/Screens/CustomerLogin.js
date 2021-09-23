import "../Css/CustomerLogin.css";
import { changeData } from "../Store/CustomerLogin/action";
import { checkCredentials } from '../Functions/Login';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { useState } from "react";
import BackHeader from '../Components/Headers/BackHeader';

function CustomerLogin() {

  const history = useHistory();
  const dispatch = useDispatch();
  const CustomerLogin = useSelector(x=>x.CustomerLoginReducer)

  const [error, setError] = useState("");

  const handleInputChange = (e)=>{
    dispatch(changeData(e))
  }

  const sendUser = (address)=>{
    history.push("/" + address)
  }

  return (
    <div className="CustomerLogin">
      <BackHeader heading="Customer Login"/>
      <div className="formCustomerLogin">
        <div className="row">
          <div className="form-group form-id">
            <div className="CustomerLoginKeyText">Customer Id</div>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              name="username"
              placeholder="Enter Customer id"
              value={CustomerLogin.customerId}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
          <div className="CustomerLoginKeyText">Password</div>
            <input
              type="password"
              id="disabledTextInput"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={CustomerLogin.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="errorCustomerLogin">{error}</div>

        <button className="buttonCustomerLogin" onClick={()=>checkCredentials("I", setError, dispatch, CustomerLogin, history)}>Submit</button>
        <div className="notAnEmployee">
        <div className="CustomerLoginKeyText" onClick={()=>sendUser("employeeLogin")}>Are you an Employee? Click here.</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
