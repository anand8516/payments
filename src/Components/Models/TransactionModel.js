import '../ModelsCSS/TransactionModel.css';

function TransactionModel(props) {
  return (

    <div className="TransactionModel">
      {/* Transaction id and date */}
      <div className="TransactionModelCard TransactionModelCardStart">
        <div className="TransactionModelSmaller bold">Transaction ID</div>
        <div className="TransactionModelRow TransactionModelSpaceBetween">
          <div className="TransactionModelSmall">{props.data.transactionid}</div>
          <div className="TransactionModelSmall bold">{props.data.transferdate.split("T")[0]}</div>
        </div>
      </div>
      {/* Paid to */}
      <div className="TransactionModelCard">
        <div className="TransactionModelSmaller bold">Paid to</div>
        <div className="TransactionModelRow TransactionModelSpaceBetween">
          <div className="TransactionModelSmall"><b>name :</b> {props.data.receiveraccountholdername}</div>
          <div className="TransactionModelSmallest bold"><b>BIC :</b> {props.data.receiverBIC.bic}</div>
        </div>
        <div className="TransactionModelRow TransactionModelSpaceBetween">
          <div className="TransactionModelSmaller"><b>account-no. :</b> {props.data.receiveraccountholdernumber}</div>
          <div className="TransactionModelSmallest bold">{props.data.receiverBIC.bankname}</div>
        </div>
      </div>
      {/* Payment and additional details */}
      <div className="TransactionModelCard TransactionModelCardEnd">
        <div className="TransactionModelSmaller bold">Payment</div>
        <div className="TransactionModelRow TransactionModelSpaceBetween">
          <div className="TransactionModelSmall"><b>currency :</b> {props.data.currencycode.currencycode}</div>
          <div className="TransactionModelSmall bold">&#8377; {props.data.inramount}</div>
        </div>
        
        <div className="TransactionModelRow TransactionModelSpaceBetween">
          <div className="TransactionModelSmall"><b>amount :</b> {props.data.currencyamount}</div>
          <div className="TransactionModelSmall"><b>m-code :</b> {props.data.messagecode.messagecode}</div>
        </div>
        <div className="TransactionModelSmaller TransactionModelCenter">{props.data.messagecode.instruction}</div>
      </div>
    </div>
  );
}

export default TransactionModel;
