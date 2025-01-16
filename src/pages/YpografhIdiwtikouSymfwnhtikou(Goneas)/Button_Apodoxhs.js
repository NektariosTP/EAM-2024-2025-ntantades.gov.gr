import React, { useState, useEffect } from "react";
import "./Button_Apodoxhs.css";

export default function ButtonApodoxhs({ onAccept }) {
    const [isChecked, setIsChecked] = useState(false);

    // Φόρτωση κατάστασης από το localStorage κατά την αρχική φόρτωση
    useEffect(() => {
        const savedState = localStorage.getItem("isChecked");
        if (savedState !== null) {
            const parsedState = JSON.parse(savedState);
            setIsChecked(parsedState);
            onAccept(parsedState); // Ενημερώνει για την κατάσταση του checkbox
        }
    }, [onAccept]);

    const handleCheckboxClick = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        localStorage.setItem("isChecked", JSON.stringify(newState)); // Αποθήκευση στο localStorage
        onAccept(newState); // Ενημερώνει για την αλλαγή
    };

    return (
        <div className="button-apodoxhs-container">
            <div
                className={`checkbox ${isChecked ? "checked" : ""}`}
                onClick={handleCheckboxClick}
            >
                {isChecked && <span className="checkmark">✔</span>}
            </div>
            <label className="checkbox-label1">
                Αποδέχομαι τους όρους της συμφωνίας και τις προϋποθέσεις και <br />
                επιβεβαιώνω ότι έχω διαβάσει και κατανοήσει πλήρως το περιεχόμενό της.
            </label>
        </div>
    );
}
