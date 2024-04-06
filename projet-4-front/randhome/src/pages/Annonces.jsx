import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import "../style/Annonces.css";

function Annonces() {
    const [annonces, setAnnonces] = useState([]);
    const [selectedAnnonce, setSelectedAnnonce] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    const openModal = (annonce) => {
        setSelectedAnnonce(annonce);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedAnnonce(null);
        setModalOpen(false);
    };

    return (
        <section className='annonce-container'>
            <div>
                <NavBar />
            </div>
            <div className='annonces'>
                <h1 className='title-annonces'>ANNONCES</h1>
                <ul className='data-annonces'>
                    <li>
                        <h3 className='h3-annonces'>Titre</h3>
                        <h3 className='h3-annonces'>Date</h3>
                        <h3 className='h3-annonces'>Ville</h3>
                        <h3 className='h3-annonces'>Niveau</h3>
                        <h3 className='h3-annonces'>Durée</h3>
                    </li>

                    {annonces.map((annonce) => (
                        <li key={annonce.id} onClick={() => openModal(annonce)}>
                            <h3 className='h3-annonces'>{annonce.title}</h3>
                            <p className='h3-annonces'>{formatDate(annonce.date)}</p>
                            <p className='h3-annonces'>{annonce.location}</p>
                            <p className='h3-annonces'>{annonce.user_level}</p>
                            <p className='h3-annonces'>{annonce.duration} heure(s)</p>
                        </li>
                    ))}
                </ul>
            </div>
            {modalOpen && selectedAnnonce && (
                <div>
                    <div className="backdrop"></div>
                    <div className="modal">
                        <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-content">
                        <div className='modal-header'>
                            <h2>{selectedAnnonce.title}</h2>
                            <h4>Ville: {selectedAnnonce.location}</h4>
                        </div>
                        <p className='modal-desc'>{selectedAnnonce.description}</p>
                    </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Annonces;
