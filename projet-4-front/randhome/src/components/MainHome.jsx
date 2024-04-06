import Logo from "../assets/logoproj.svg";
import "../style/MainHome.css";

function MainHome() {
    return(
      <>
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
      </>
    )
}

export default MainHome;