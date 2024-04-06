import "../style/IconesHome.css";
import Aventure from "../assets/aventure.png";
import Ville from "../assets/ville.png";
import Randonnee from "../assets/randonnee.png";


function IconesHomes() {
    return(
        <>
<div className="icone-container"> 
          <img src={Ville} alt="logo ville" className="icone"/>
          <img src={Aventure} alt="logo aventure" className="icone"/>
          <img src={Randonnee} alt="logo rando" className="icone"/>
          </div>
          <div className="textIcone">
            <h3>Renseignez votre ville</h3>
            <h3>Trouvez un groupe</h3>
            <h3>Partez à l'aventure</h3>
          </div>
        </>
    )
}

export default IconesHomes;