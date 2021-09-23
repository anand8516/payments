import '../Css/CustomerProfile.css';
import SessionCheck from '../Auxillary/SessionCheck';
import { useEffect, useState } from 'react';
import { getUrl } from '../Functions/Transaction';
import BackHeader from '../Components/Headers/BackHeader';
import profile from '../Icons/profile.png';

function CustomerProfile() {
  var [custDetails, setCustDetails] = useState({});
  useEffect(()=>{
    var jwtStored = localStorage.getItem("jwt")
        var options = {
            method : 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer "+jwtStored }
        }
        fetch(getUrl()+"/customer/user", options).then(response=>response.json())
        .then(result=>{
          setCustDetails(result.data);
          console.log(result.data)
        })
  }, [])

  const DisplayProperty = (props)=>{
    return(
      <div className="CustomerProfileSection">
        <div className="CustomerProfileKey">{props.keys}</div>
        <div className="CustomerProfileValue">{props.value==""?"--":props.value}</div>
      </div>
    )
  }

  return (
    <SessionCheck>
    <div className="CustomerProfile">
      <BackHeader heading="Profile"/>
      <img src={profile} className="CustomerProfileIcon"/>
      <DisplayProperty keys="Name" value={custDetails.accountholdername}/>
      <DisplayProperty keys="Id" value={custDetails.customerid}/>
      <DisplayProperty keys="City" value={custDetails.customercity}/>
      <DisplayProperty keys="Address" value={custDetails.customeraddress}/>
      <DisplayProperty keys="Balance(INR)" value={custDetails.clearbalance}/>
      <DisplayProperty keys="Over-draft" value={custDetails.overdraftflag?"Applicable":"Not Applicable"}/>
            {/* <div class="CustomerProfileText">Name : {custDetails.accountholdername}</div>
            <div class="CustomerProfileText">Id : {custDetails.customerid}</div>
            <div class="CustomerProfileText">City : {custDetails.customercity}</div>
            <div class="CustomerProfileText">Address: {custDetails.customeraddress}</div>
            <div class="CustomerProfileText">Balance : INR {custDetails.clearbalance}/-</div>
            <div class="CustomerProfileText">Over-Draft : {}</div> */}
          </div>
    </SessionCheck>
  );
}

export default CustomerProfile;
