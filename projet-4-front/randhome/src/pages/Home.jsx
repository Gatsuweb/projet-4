import "../style/Home.css";
import NavBar from "../components/NavBar";
import Logo from "../assets/logoproj.svg";
import Aventure from "../assets/aventure.png";
import Ville from "../assets/ville.png";
import Randonnee from "../assets/randonnee.png";

function Home() {
    return(
      <>
        <section id="home-container">
          <header>
            <NavBar />
          </header>
          <main className="main-container">
              <img src={Logo} alt="logo" id="logo" />
              <h1 id="title">
                HIKE CONNECT
              </h1>
              <h3 id="resume">
                Envie de partir à l'aventure ? <br />Rejoins nous et trouve ton partenaire de marche !
              </h3>
              <button className="btn-inscription">S'INSCRIRE</button>
          </main>
        </section>
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
    );
  }

export default Home;