import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Buttons_Akyrwsh_Ypovolh.css";

export default function ButtonsAkyrwshYpovolh({ onSubmit, isDisabled, tooltip, onSave, onAkyrwsh }) {
    const navigate = useNavigate();
    const location = useLocation();


    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(); // Εκτέλεση της λειτουργίας υποβολής
        }
        // Χρησιμοποιώντας το window.location για πλήρη επαναφόρτωση
        window.location.href = `${window.location.pathname}/Epivevaiwsh`;
    };

    const handleAkyrwsh = () => {
        if (onAkyrwsh) {
            onAkyrwsh(); // Διαγραφή δεδομένων μέσω της onAkyrwsh
        }
        if (window.location.pathname === "/ypografh_idiwtikou_symfwnhtikou") {
            window.location.href = "/Goneis/Profil";
        } else {
            window.location.href = "/Ntantades/Profil";
        }
    };
    
    const handleSave = () => {
        if (onSave) {
            onSave(); // Διαγραφή δεδομένων μέσω της onAkyrwsh
        }
        if (window.location.pathname === "/ypografh_idiwtikou_symfwnhtikou") {
            window.location.href = "/Goneis/Profil";
        } else {
            window.location.href = "/Ntantades/Profil";
        }
    };
    


    return (
        <div className="buttons-container1">
            <button className="button-ypovolh cancel1" onClick={handleAkyrwsh}>Ακύρωση</button>
            <button className="button-ypovolh save1" onClick={handleSave}>Προσωρινή Αποθήκευση </button>
            <div className="submit-container">
                <button
                    onClick={handleSubmit}
                    disabled={isDisabled}
                    className={`submit-button1 ${isDisabled ? "disabled" : ""}`}
                >
                    Υποβολή
                </button>
                {isDisabled && tooltip && (
                    <div className="error-message1">
                        {tooltip.split('.').map((line, index) => (
                            <p key={index}>{line.trim()}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
