import '../Css/Transaction1.css';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getBanks } from "../Functions/Transaction1.js";
import { changeData } from "../Store/Transaction1/action";
import { useDispatch, useSelector } from "react-redux";

function Transaction1() {

  const dispatch = useDispatch();
  var transactionConstant = useSelector((x) => x.Transaction1Reducer);

  useEffect(() => {
    var e = {
      target: {
        value: "Aamir Iqbal",
        name: "senderAccountName",
        code: ""
      },
    };
    dispatch(changeData(e));

    e.target.value = "INR";
    e.target.name = "currencyType";
    dispatch(changeData(e));

    e.target.value = "112453";
    e.target.name = "balanceAvailable";
    dispatch(changeData(e));
  }, [dispatch]);

  const handleInputChange = (e) => {
    if(e.target.name === "institutionName") {
      e.target.code = getBanks()[e.target.selectedIndex].code;
    }
    dispatch(changeData(e));
  }

  const history = useHistory();
  const handleSubmit = () => {
      history.push("/transaction2");
  }
  const bankOptions = getBanks().map((item, index) => {
    return <option value={item.value} key={item.code}>{item.name}</option>
  });
  return (
    <div className="Transaction1">
      <h2>Transaction - I</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
        <div className="form-group">
          <label>Sender Account Name:</label>
          <input
            disabled
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={transactionConstant.senderAccountName}
            onChange={handleInputChange}
          />
          </div>
        </div>
        <div className="row">
          
        <div className="form-group">
          <label>
            Balance Available:
          </label>
          <input
            disabled
            type="text"
            id="disabledTextInput"
            className="form-control"
            value={transactionConstant.balanceAvailable}
            onChange={handleInputChange}
          />
          </div>
        </div>
        <div className="row">
          
        <div className="form-group">
          <label>Institution Name:</label>
          <select className="form-control" name="institutionName"
            value={transactionConstant.institutionName}
            onChange={handleInputChange}>
            {bankOptions}
          </select>
          </div>
        </div>
        <div className="row">
          
        <div className="form-group">
          <label>Reciever Account Name:</label>
          <input
            type="text"
            name="recieverName"
            className="form-control"
            placeholder="Reciever Account Name"
            value={transactionConstant.recieverAccountName}
            onChange={handleInputChange}
          />
          </div>
        </div>
        <div className="row">
          
        <div className="form-group">
          <label>Reciever Account Number:</label>
          <input
            type="number"
            pattern="[0-9]*"
            name="recieverNumber"
            className="form-control"
            placeholder="Reciever Account Number"
            value={transactionConstant.recieverAccountNumber}
            maxLength="12"
            minLength="12"
            onChange={handleInputChange}
          />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
          <label>BIC:</label>
          <input
            disabled
            type="text"
            name="BIC"
            id="disabledTextInput"
            className="form-control"
            value={transactionConstant.BIC}
          />
          </div>
        </div>
        <div className="button-row">
          <button type="submit" className="button-Transaction">
            Next
          </button>
        </div>
        {/* {console.log(state)} */}
      </form>
    </div>
  );
}
export default Transaction1;