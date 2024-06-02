import hifive from '../images/hifive.png';
import './header.css';


export default function App() {
  return (
    <div className="Header">
      <img className="hifive" src={hifive} alt="logo" />
      <button className="LoginBtn">Login</button>
    </div>
  );
}