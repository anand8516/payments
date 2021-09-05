import {useHistory} from 'react-router-dom'
import '../Css/Home.css'
function Home() {
  const history = useHistory();

  const sendUser = (address) =>{
    history.push("/"+address)
  }

  return (
    <div className="Home">
      <h2>Welcome to <b>ABKB</b> Bank</h2>

      <button className="buttonHome" onClick={()=>sendUser("customerLogin")}>Customer Login</button>
      <button className="buttonHome" onClick={()=>sendUser("employeeLogin")}>Employee Login</button>
    </div>
  );
}

export default Home;
