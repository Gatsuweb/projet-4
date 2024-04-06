import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import "../style/Annonces.css";

function Annonces() {
    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/annonce`)
            .then((response) => {
                console.info(response.data);
                setAnnonces(response.data);
            })
            .catch((error) => {
                console.error("Fetching failed", error);
            });
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${day}/${month}/${year}`;
      };
    return(
        <section className='annonce-container'>
            <div>
                <NavBar />
            </div>
            <div className='annonces'>
                <ul className='data-annonces'>
                    <li>
                        <h3>Titre</h3>
                        <h3>Date</h3>
                        <h3>Ville</h3>
                        <h3>Niveau</h3>
                        <h3>Durée</h3>
                    </li>

            {annonces.map((annonce) => (
                    <li key={annonce.id}>
                    <h3>{annonce.title}</h3>
                    <p>{formatDate(annonce.date)}</p>
                    <p>{annonce.location}</p>
                    <p>{annonce.user_level}</p>
                    <p>{annonce.duration} heure(s)</p>
                </li>
                    ))}
                  </ul>
            </div>
        </section>
    );
}

export default Annonces;
