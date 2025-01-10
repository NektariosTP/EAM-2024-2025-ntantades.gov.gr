import React from "react";
import "./ProfileTop.css";

function ProfileTop() {
    return (
        <div className="profile-container" style={{ backgroundImage: 'url(/profile_background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="profile-content">
                <img className="profile-image" src="/nanny1.jpg" alt="nanny1" />
                <div className="profile-info">
                    <p className="nanny-name-profile">Ελένη Ανδρέου</p>
                    <p className="profile-details">21 ετών | 2 Χρόνια Εμπειρίας</p>
                    <p className="profile-program">Ασύγχρονο Πρόγραμμα Εκπαίδευσης</p>
                    <div className="profile-rating">
                        <span className="rating-score">4.2</span>
                        <div className="stars">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>☆</span>
                        </div>
                        <span className="rating-count">(2)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileTop;
