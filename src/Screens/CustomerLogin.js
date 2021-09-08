import "../Css/CustomerLogin.css";
import { changeData } from "../Store/CustomerLogin/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

function CustomerLogin() {

  const history = useHistory();
  const dispatch = useDispatch();
  const CustomerLogin = useSelector(x=>x.CustomerLoginReducer)

  const handleInputChange = (e)=>{
    dispatch(changeData(e))
  }

  const checkCredentials = ()=>{
    console.log(CustomerLogin)
    if(false){
      sendUser("customerHome")
    }else{

    }
  }

  const sendUser = (address)=>{
    history.push("/" + address)
  }

  return (
    
    <div className="CustomerLogin">
      <h2>Customer Login</h2>

      <form className="formCustomerLogin">
        <div className="row">
          <div className="form-group form-id">
            <label>Customer Id</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              name="customerId"
              placeholder="Enter your id"
              value={CustomerLogin.customerId}
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
        
        <button className="buttonCustomerLogin" onClick={()=>checkCredentials()}>Submit</button>
        <div className="notAnEmployee">
          <label onClick={()=>sendUser("employeeLogin")}>Are you an Employee? Click here.</label>
        </div>
      </form>
    </div>
   
  );
}

export default CustomerLogin;
