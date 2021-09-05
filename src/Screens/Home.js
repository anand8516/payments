import '../Css/Home.css';
import {useHistory} from 'react-router-dom'

function Home() {
  const history = useHistory();

  const sendUser = (address) =>{
    history.push("/"+address)
  }

  return (
    <div className="Home">
      <h2>Welcome to <b>ABKB</b> Bank</h2>

      <button onClick={()=>sendUser("customerLogin")}>Customer Login</button>
      <button onClick={()=>sendUser("employeeLogin")}>Employee Login</button>
    </div>
  );
}

export default Home;
