import "../Css/Transaction2.css";
//fetching constant value functions
import {getCurrencyConversionRates, getMessageCodes, getTransferType} from "../Functions/Transaction2";
import {changeData} from '../Store/Transaction2/action';
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";

function Transaction2() {
  const dispatch = useDispatch();
  //fetching states
  var Transaction = useSelector((x) => x.Transaction2Reducer);

  //adding dummy transfer type and clear balance in states
  useEffect(()=>{
    var e = {
      target:{
        value: getTransferType("employee"),
        name: "transferType"
      }
    }
    dispatch(changeData(e));
    e.target.value= "112453";
    e.target.name="clearBalance";
    dispatch(changeData(e))
  },[dispatch])

  //updating redux state
  const handleInputChange = (e)=>{
    dispatch(changeData(e));
  }

  //displaying messageCodes and currencies in drop down
  const displayMessageCodes = getMessageCodes().map((item, index) => {
    return (
      <option className="dropdown-item" key={index}>
        {item.code}
      </option>
    );
  });

  const displayCurrencies = getCurrencyConversionRates().map((item, index) => {
    return (
      <option className="dropdown-item" key={index}>
        {item.value}
      </option>
    );
  });

  return (
    <div className="Transaction2">
      <h2>Transaction</h2>
      <form className="form">
        <div className="row">
          <div className="form-group">
            <label>Transfer Type</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              name="transferType"
              placeholder="Transfer-Type"
              value={Transaction.transferType}
              disabled
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label>Message Code</label>
            <select className="form-control" name="messageCode" onChange={handleInputChange}>
              {displayMessageCodes}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label>Currency</label>
            <select className="form-control" name="currency" onChange={handleInputChange} >
              {displayCurrencies}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={Transaction.amount}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label>Amount with Transfer Fee</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              name="addTransferFee"
              value={Transaction.addTransferFee}
              placeholder="0"
              disabled
              onChange={handleInputChange}
            />
            <p>(+0.25% of amount)</p>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label>Clear Balance</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              name="clearBalance"
              value={Transaction.clearBalance}
              placeholder="Clear Balance"
              disabled
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Transaction2;
