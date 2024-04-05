import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

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

    return(
        <section>
            <div>
                <NavBar />
            </div>
            <div>
                <ul>
            {annonces.map((annonce) => (
                      <li
                        key={annonce.id}
                      >
                        {annonce.title}
                      </li>
                    ))}
                  </ul>
            </div>
        </section>
    );
}

export default Annonces;
