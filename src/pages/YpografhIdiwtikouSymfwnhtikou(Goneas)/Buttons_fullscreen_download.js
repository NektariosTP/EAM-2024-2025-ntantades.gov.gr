import React from "react";
import "./Buttons_fullscreen_download.css"; 

function OptionsButton({ pdfUrl }) {
    // Πλήρης οθόνη
    const openFullScreen = () => {
        if (pdfUrl) {
            const win = window.open(pdfUrl, "_blank");
            if (win) {
                win.document.title = "Πλήρης Οθόνη";
                win.document.documentElement.requestFullscreen()
                    .catch(err => console.error("FullScreen error: ", err));
            } else {
                alert("Επιτρέψτε τα αναδυόμενα παράθυρα για να δείτε το αρχείο σε πλήρη οθόνη.");
            }
        } else {
            alert("Δεν έχει επιλεγεί αρχείο προς προβολή.");
        }
    };

    // Λήψη
    const handleDownload = () => {
        if (pdfUrl) {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = "document.pdf";
            link.click();
        } else {
            alert("Δεν υπάρχει αρχείο προς λήψη.");
        }
    };

    // Εκτύπωση
    const handlePrint = () => {
        if (pdfUrl) {
            const win = window.open(pdfUrl, "_blank");
            win.focus();
            win.print();
        } else {
            alert("Δεν υπάρχει αρχείο προς εκτύπωση.");
        }
    };

    return (
        <div className="options-button-container-FD">
            <button className="options-button-FD" onClick={openFullScreen}>
                <img src="/fullscreen.webp" alt="Fullscreen" className="option-icon" />
                <p className="option-FD">Πλήρης Οθόνη</p>
            </button>
            <button className="options-button-FD" onClick={handleDownload}>
                <img src="/download.jpg" alt="Download" className="option-icon" />
                <p className="option-FD">Λήψη</p>
            </button>
            <button className="options-button-FD" onClick={handlePrint}>
                <img src="/print.jpg" alt="Print" className="option-icon" />
                <p className="option-FD">Εκτύπωση</p>
            </button>
        </div>
    );
}

export default OptionsButton;