import React from "react";
import { useNavigate } from "react-router-dom";
import "./Buttons.css";

function Buttons() {
    const navigate = useNavigate(); // React Router navigation hook
    
    return (
        <div>
            <header className="image">
                <div className="overlay-text">
                    Κρατική Φροντίδα για<br />κάθε παιδί από ειδικούς!
                </div>
                <img src="/ntantades.jpg" alt="ntantades" className="ntant" />
            </header>

            {/* Buttons Container */}
            <div className="buttons-container">
                
                {/* Αριστερό Section */}
                <div className="button-section">
                    <p>Χρειάζεστε νταντά για το παιδί σας;</p>
                    <button className="action-button" onClick={() => navigate("/Goneis")}>Γονέας</button>
                </div>

                {/* Δεξί Section */}
                <div className="button-section">
                    <p>Αναζητείτε εργασία ως νταντά;</p>
                    <button className="action-button" onClick={() => navigate("/Ntantades")}>Νταντά</button>
                </div>
            </div>
        </div>
    );
}

export default Buttons;