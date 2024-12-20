import React from "react";
import "./Guide.css";

function Guide() {
    return (
        <div className="guide-container">
            <h2>Πώς Δουλεύει</h2>
            <div className="guide-steps">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-text">
                        Έλεγχος των προϋποθέσεων συμμετοχής ανάλογα την ομάδα που ανήκεις.
                    </div>
                </div>
                <div className="arrow">→</div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-text">
                        Αναζήτηση και γνωριμία νταντάς με γονέα.
                    </div>
                </div>
                <div className="arrow">→</div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-text">
                        Έναρξη συνεργασίας, πληρωμή και απόλαυση της φροντίδας!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;
