import React from "react";
import { useNavigate } from "react-router-dom";
import "./Suggestions.css";

function Suggestions() {
    const navigate = useNavigate();

    const nannies = [
        { id: 3, name: "Αντώνης Γεωργακόπουλος", location: "Καλαμάτα", rating: 3.9, img: "nanny3.jpg" },
        { id: 4, name: "Χριστίνα Οικονόμου", location: "Ηλιούπολη", rating: 4.2, img: "nanny5.jpg" },
        { id: 1, name: "Ελένη Ανδρέου", location: "Χαλάνδρι", rating: 4.2, img: "nanny1.jpg" },
        { id: 2, name: "Νίκος Αθανασίου", location: "Καισαριανή", rating: 3.9, img: "nanny2.jpg" },
        { id: 5, name: "Δημήτρης Σπυρόπουλος", location: "Αθήνα", rating: 4.8, img: "nanny4.jpg" },
        { id: 6, name: "Σοφία Χατζηγεωργίου", location: "Βόλος", rating: 4.6, img: "nanny6.jpg" },
        { id: 7, name: "Κατερίνα Λαμπροπούλου", location: "Κομοτηνή", rating: 4.2, img: "nanny7.jpg" },
        { id: 8, name: "Παναγιώτης Μιχαηλίδης", location: "Τρίκαλα", rating: 4.2, img: "nanny8.jpg" },
    ];

    const handleNannyClick = (id) => {
        navigate(`/profile/${id}`); // Redirect to the nanny's profile page
    };

    const handleViewMore = () => {
        navigate('/Search2'); // Redirect to the page that lists all nannies
    };

    return (
        <div className="suggestions-container">
            <h2>Δημοφιλείς Νταντάδες</h2>
            <div className="nannies-grid">
                {nannies.map((nanny) => (
                    <div key={nanny.id} className="nanny-card" onClick={() => handleNannyClick(nanny.id)}>
                        <img className="avatar" src={nanny.img} alt={nanny.name} />
                        <h3>{nanny.name}</h3>
                        <p>{nanny.location}</p>
                        <p>⭐ {nanny.rating}</p>
                    </div>
                ))}
            </div>
            <button className="view-more-button" onClick={handleViewMore}>
                Προβολή 3260 Νταντάδων
            </button>
        </div>
    );
}

export default Suggestions;
