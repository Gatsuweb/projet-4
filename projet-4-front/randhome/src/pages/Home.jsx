import "../style/Home.css";
import NavBar from "../components/NavBar";
import MainHome from "../components/MainHome";
import IconesHomes from "../components/IconesHome";

function Home() {
    return(
      <>
        <section id="home-container">
          <header>
            <NavBar />
          </header>
          <MainHome />
          
        </section>
        <IconesHomes />
        </>
    );
  }

export default Home;