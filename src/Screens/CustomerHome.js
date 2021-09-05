import { Link } from 'react-router-dom';
import '../Css/CustomerHome.css';
import CustomerProfile from './CustomerProfile';
import CustomerTransactions from './CustomerTransactions';
import Transaction1 from './Transaction1';


function CustomerHome() {
  return (
    <div className="CustomerHome">
    
     <div class="sidenav">
       
  <a href="CustomerProfile">Profile</a>
  <a href="CustomerTransactions">Transactions</a>
  <a href="Transaction1">Transfer</a>
  <Link href="#contact">Logout</Link>
</div>

<div class="main">
  <h2>Welcome Customer You are Logged In</h2>
  <p></p>
  <p>Welcome to DBS bank</p>
 
</div>
    </div>
  );
}

export default CustomerHome;
