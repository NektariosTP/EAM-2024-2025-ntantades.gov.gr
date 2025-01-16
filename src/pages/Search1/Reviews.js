import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reviews.css";

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "Ελένη Ανδρέου",
            location: "Χαλάνδρι",
            rating: 4.2,
            feedback: "Η Ελένη είναι υπεύθυνη, στοργική και δημιουργική. Εμπιστευόμαστε απόλυτα τη φροντίδα της!",
        },
        {
            id: 2,
            name: "Νίκος Αθανασίου",
            location: "Καισαριανή",
            rating: 3.9,
            feedback: "Βρήκαμε την τέλεια νταντά μέσω της ιστοσελίδας. Ο Νίκος φροντίζει το παιδί μας με αγάπη και προσοχή!",
        },
        {
            id: 10,
            name: "Ιωάννα Κωνσταντίνου",
            location: "Πάτρα",
            rating: 4.7,
            feedback: "Η Ιωάννα από την πλατφόρμα σας ήταν άψογη! Υπεύθυνη, γλυκιά και πάντα συνεπής.",
        },
        {
            id: 9,
            name: "Αλέξανδρος Παπαδόπουλος",
            location: "Θεσσαλονίκη",
            rating: 4.5,
            feedback: "O Αλέξανδρος είναι εξαιρετικός! Το παιδί μου τον λατρεύει και είναι πάντα πρόθυμος να βοηθήσει.",
        },
        {
            id: 7,
            name: "Κατερίνα Λαμπροπούλου",
            location: "Γαλάτσι",
            rating: 4.0,
            feedback: "Η Κατερίνα ήταν καταπληκτική! Το παιδί μας νιώθει ασφαλές και χαρούμενο μαζί της.",
        },
        {
            id: 8,
            name: "Παναγιώτης Μιχαηλίδης",
            location: "Θεσσαλονίκη",
            rating: 4.2,
            feedback: "Ο Παναγιώτης είναι έμπειρος και πολύ φιλικός! Εξαιρετική επιλογή για τους γονείς.",
        },
    ];

    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const handleReviewClick = (id) => {
        localStorage.setItem("nannyId", id);
        navigate(`/Goneis/Aggelies/Profile`);
    };

    return (
        <div className="carousel">
            <h2 className="search-h2">Κριτικές άλλων γονέων για τις Νταντάδες</h2>
            <div className="carousel-container">
                <button className="arrow-carousel" onClick={handlePrev}>
                    &lt;
                </button>
                <div className="review-cards">
                    {[0, 1, 2].map((offset) => {
                        const index = (currentIndex + offset) % reviews.length;
                        const review = reviews[index];
                        return (
                            <div
                                key={review.id}
                                className="review-card"
                                onClick={() => handleReviewClick(review.id)}
                            >
                                <img
                                    className="avatar"
                                    src={`/nanny${review.id}.jpg`}
                                    alt={`Avatar of ${review.name}`}
                                />
                                <h3 className="review-name-search1"> {review.name}</h3>
                                <p className="location">{review.location}</p>
                                <p className="rating">⭐ {review.rating}</p>
                                <p className="feedback">{review.feedback}</p>
                            </div>
                        );
                    })}
                </div>
                <button className="arrow-carousel" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Reviews;
