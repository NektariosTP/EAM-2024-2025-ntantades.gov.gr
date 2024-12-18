import React from "react";
import "./Buttons.css";

function Buttons() {
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
                    <p>Χρειάζεστε νταντά για το παιδί σας;<br />Προυποθέσεις Συμμετοχής</p>
                    <button className="action-button" onClick={() => alert("Γονέας clicked!")}>Γονέας</button>
                </div>

                {/* Δεξί Section */}
                <div className="button-section">
                    <p>Αναζητείτε εργασία ως νταντά;<br />Προυποθέσεις Συμμετοχής</p>
                    <button className="action-button" onClick={() => alert("Γονέας clicked!")}>Νταντά</button>
                </div>
            </div>
        </div>
    );
}

export default Buttons;