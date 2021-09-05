import '../Css/CustomerProfile.css';

function CustomerProfile() {


  const custdetails=[{customerid:"123",name:"Anand", overdrafttag:"",clearbalance:"100",customeraddress:"ABC street",customercity:"Pune",customertype:"A"}]

  /*const custmap=custdetails.map((item,index)={
   
  });*/
  return (
    <div className="CustomerProfile">
     
      <p class="fw-bold">Customer ID:{custdetails[0].customerid}</p>
  <p class="fw-bold">Customer name: {custdetails[0].name}</p>
<p class="fw-bold">clearbalance:{custdetails[0].clearbalance}</p>
<p class="fw-bold">Overdraft tag:{custdetails[0].overdrafttag}</p>
<p class="fw-bold">Customer Adress: {custdetails[0].customeraddress}</p>
<p class="fw-bold">Customer city{custdetails[0].customercity}</p>
<p class="fw-bold">Customer type:{custdetails[0].customertype}</p>
    </div>
  );
}

export default CustomerProfile;
