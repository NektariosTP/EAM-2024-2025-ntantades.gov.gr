import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Filtered.css";

function Filtered() {
    const navigate = useNavigate();
    const [experienceRange, setExperienceRange] = useState([0, 30]);

    const filtered_nannies = [
        { id: 3, name: "Αντώνης Γεωργακόπουλος", location: "Καλαμάτα", rating: 3.9, review_count: 1, img: "/nanny3.jpg", degree: "test", age: 1, years_exp: 1, info: "test" },
        { id: 4, name: "Χριστίνα Οικονόμου", location: "Ηλιούπολη", rating: 4.2, review_count: 8, img: "/nanny4.jpg", degree: "Τμήμα Μαιευτικής - ΠΑΔΑ", age: 28, years_exp: 4,
            info: "Είμαι η Χριστίνα Οικονόμου, απόφοιτη του Τμήματος Μαιευτικής του ΠΑΔΑ, και ζω στην Ηλιούπολη. Με εμπνέει η φροντίδα των παιδιών και πιστεύω ότι κάθε παιδί αξίζει ένα ζεστό και ασφαλές περιβάλλον για να αναπτυχθεί. Οι εξαιρετικές κριτικές από γονείς που με εμπιστεύτηκαν με ενθαρρύνουν να δίνω πάντα τον καλύτερό μου εαυτό. Αν χρειάζεστε μια υπεύθυνη και έμπειρη νταντά, θα χαρώ πολύ να συνεργαστούμε!" },
        { id: 1, name: "Ελένη Ανδρέου", location: "Χαλάνδρι", rating: 4.2, review_count: 2, img: "/nanny1.jpg", degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", age: 21, years_exp: 2,
            info: "Γεια σας! Είμαι η Ελένη, 21 ετών, και διαθέτω πιστοποιητικό από ασύγχρονο πρόγραμμα εκπαίδευσης για τη φροντίδα παιδιών. Είμαι υπεύθυνη, αξιόπιστη και με αγάπη για τα παιδιά, έτοιμη να προσφέρω τη φροντίδα που χρειάζονται με προσοχή και σεβασμό. Είμαι διαθέσιμη να φροντίσω τα παιδιά σας με επαγγελματισμό και ενθουσιασμό!" },
        { id: 2, name: "Νίκος Αθανασίου", location: "Καισαριανή", rating: 3.9, review_count: 1, img: "/nanny2.jpg", degree: "test", age: 24, years_exp: 3,
            info: "Ονομάζομαι Νίκος Αθανασίου, είμαι 24 ετών και έχω 3 χρόνια εμπειρίας στη φροντίδα παιδιών. Παρά το νεαρό της ηλικίας μου, έχω αναπτύξει τη γνώση και την υπευθυνότητα που απαιτεί αυτή η δουλειά. Αν και οι κριτικές μου είναι λίγες προς το παρόν, είμαι αφοσιωμένος στο να προσφέρω την καλύτερη φροντίδα και να δημιουργώ ένα ασφαλές και ευχάριστο περιβάλλον για τα παιδιά. Με βασικό μου στόχο την ευημερία τους, θα χαρώ να συνεργαστούμε και να σας δείξω την αφοσίωσή μου στη δουλειά μου." },
        { id: 5, name: "Δημήτρης Σπυρόπουλος", location: "Αθήνα", rating: 4.8, review_count: 32, img: "/nanny5.jpg", degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", age: 58, years_exp: 20,
            info: "Είμαι ο Δημήτρης Σπυρόπουλος, 58 ετών, με περισσότερα από 20 χρόνια εμπειρίας στη φροντίδα παιδιών. Έχω ολοκληρώσει το Ασύγχρονο Πρόγραμμα Εκπαίδευσης και πιστεύω στην αξία της υπευθυνότητας και της συνέπειας στη δουλειά μου. Με βαθμολογία 4.8/5 από 32 αξιολογήσεις γονέων, νιώθω περήφανος που οι οικογένειες με εμπιστεύονται. Με αγάπη για τα παιδιά και στόχο τη δημιουργία ενός ασφαλούς και υποστηρικτικού περιβάλλοντος, θα χαρώ να σας βοηθήσω με τη φροντίδα των μικρών σας." },
        { id: 6, name: "Σοφία Χατζηγεωργίου", location: "Βόλος", rating: 4.6, review_count: 27, img: "/nanny6.jpg", degree: "Τμήμα Προσχολικής Αγωγής - ΠΑΔΑ", age: 35, years_exp: 7, info: "Υπεύθυνη και έμπειρη, προσφέρω ασφαλή και χαρούμενη απασχόληση για τα παιδιά σας." },
        { id: 7, name: "Κατερίνα Λαμπροπούλου", location: "Κομοτηνή", rating: 4.2, review_count: 1, img: "/nanny7.jpg", degree: "test", age: 1, years_exp: 1, info: "test" },
        { id: 8, name: "Παναγιώτης Μιχαηλίδης", location: "Τρίκαλα", rating: 4.2, review_count: 1, img: "/nanny8.jpg", degree: "test", age: 1, years_exp: 1, info: "test" },
    ];

    const handleExperienceChange = (e) => {
        const newRange = [...experienceRange];
        const { name, value } = e.target;
        
        // Update either min or max range based on which slider is moved
        if (name === "min") {
            newRange[0] = Math.min(parseInt(value), experienceRange[1]);
        } else {
            newRange[1] = Math.max(parseInt(value), experienceRange[0]);
        }

        setExperienceRange(newRange);
    };

    const filteredResults = filtered_nannies.filter(
        (nanny) => nanny.years_exp >= experienceRange[0] && nanny.years_exp <= experienceRange[1]
    );

    const handleNannyClick = (id) => {
        navigate(`/profile/${id}`); // Redirect to the nanny's profile page
    };

    return (
        <div className="filtered-container">
            <div className="filters-section">
                <h3>Φίλτρα</h3>
                <div className="filter-group">
                    <label>Περιοχή:</label>
                    <select onChange={(e) => console.log(`/Goneis/Aggelies?query=${e.target.value}`)}>
                        <option value="">Επιλέξτε Περιοχή</option>
                        <option value="Αθήνα">Αθήνα</option>
                        <option value="Χαλάνδρι">Χαλάνδρι</option>
                        <option value="Καλαμάτα">Καλαμάτα</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Χρόνια Εμπειρίας: {experienceRange[0]} - {experienceRange[1]}</label>
                    <div className="experience-slider">
                        <input
                            type="range"
                            name="min"
                            min="0"
                            max="30"
                            value={experienceRange[0]}
                            onChange={handleExperienceChange}
                            className="slider"
                        />
                        <input
                            type="range"
                            name="max"
                            min="0"
                            max="30"
                            value={experienceRange[1]}
                            onChange={handleExperienceChange}
                            className="slider"
                        />
                    </div>
                </div>
            </div>
            <div className="profiles-section">
            <div className="filtered-grid">
                {filteredResults.map((nanny) => (
                    <div key={nanny.id} className="filtered-card" onClick={() => handleNannyClick(nanny.id)}>
                        <img className="avatar" src={nanny.img} alt={nanny.name} />
                        <div className="card-content">
                            <h3>{nanny.name}</h3>
                            <div className="rating">
                                <span>⭐ {nanny.rating.toFixed(1)}</span>
                                <span className="stars">({nanny.review_count})</span>
                            </div>
                            <p className="degree">🎓 {nanny.degree}</p>
                            <p className="info">{nanny.info}</p>
                            <div className="details">
                                <span>{nanny.location}</span>
                                <span>{nanny.age} ετών</span>
                                <span>{nanny.years_exp} χρόνια εμπειρίας</span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Filtered;
