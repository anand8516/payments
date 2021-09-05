import TransactionModel from '../Components/Models/TransactionModel';
import '../Css/CustomerTransactions.css';

function CustomerTransactions(props) {
  var data = [
    {
      senderId: "abcd",
      receiverId: "efgh",
      bankName: "ICIC",
      bankCode: "icic",
      amount: "100",
      currency: "INR",
    },
    {
      senderId: "ijkl",
      receiverId: "mnop",
      bankName: "HDFC",
      bankCode: "HDFV",
      amount: "1000",
      currency: "EUR",
    },
  ];

  const displayTransactions = data.map((item, index)=>{
    return <TransactionModel data={item}/>
  })

  return (
    <div className="CustomerTransactions">
      <div className="TransactionModel">
        {displayTransactions}
     </div>
    </div>
  );
}

export default CustomerTransactions;
