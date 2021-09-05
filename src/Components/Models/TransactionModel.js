import '../ModelsCSS/TransactionModel.css';

function TransactionModel(props) {
  return (
    
    <div className="TransactionModel">
      <div className="row">
            <label> Sender Id : {props.data.senderId} </label>
            <label>Receiver Id : {props.data.receiverId}</label>
            <label>Bank Name : {props.data.bankName}</label>
            <label>Bank Name : {props.data.bankName}</label>
      </div>

      <div className="row">
            <label>Bank Code : {props.data.bankCode}</label>
            <label>Amount : {props.data.amount}</label>
            <label>Currency : {props.data.currency} </label>
            <label>Bank Name : {props.data.bankName}</label>
      </div>
      <hr/>
    </div>
  );
}

export default TransactionModel;
