import { Link } from "react-router-dom";
import "../style/NavBar.css";
import Logo from "../assets/logoproj.svg";

function NavBar() {

  const linkStyle = {
    textDecoration: "none",
    color: 'white'
  };
    return (
      <div className="navbar-container">
        
          <ul className="ul-navG">
            <li><img src={Logo} alt="logo" id="logo-nav" /></li>
            <li className="li-anim">ACCUEIL</li>
            <Link to="/Annonces" style={linkStyle}>
            <li className="li-anim">TREKKING</li>
            </Link>
           </ul>
        
          <ul className="ul-navD">
            <li className="li-anim">ARTICLE</li>
            <li className="li-anim">PROFIL</li>
          </ul>
          <ul id="connect">
          <li>CONNEXION</li>
          </ul>
      </div>
    );
  }
  
  export default NavBar;