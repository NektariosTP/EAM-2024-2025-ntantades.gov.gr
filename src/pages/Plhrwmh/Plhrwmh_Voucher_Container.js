import React from "react";
import { useNavigate } from "react-router-dom"; // Προσθήκη πλοήγησης
import OptionsButton from "../YpografhIdiwtikouSymfwnhtikou(Goneas)/Buttons_fullscreen_download";
import "./Plhrwmh_Voucher_Container.css";

export default function Plhrwmh_Voucher_Container() {
    const navigate = useNavigate(); // Εργαλείο πλοήγησης

    // Μετάβαση στη σελίδα Voucher
    const handleVoucherActivation = () => {
        window.location.href = `/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws_Voucher/Epivevaiwsh`;
    };

    // Διαγραφή της κατάστασης
    const handleCancel = () => {
        window.location.href = "/Goneis/Profil";
    };

    return (
        <div className="container_ApodoxhPlhrwmhs">
            {/* Τίτλος */}
            <h1 className="title_ApodoxhPlhrwmhs">Ενεργοποίηση Voucher</h1>

            {/* Φόρμα */}
            <form className="voucher-form_ApodoxhPlhrwmhs">
                {/* Ονοματεπώνυμο */}
                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Ονοματεπώνυμο Γονέα</label>
                    <input type="text" value="Νεκτάριος Παπάζογλου" readOnly />
                </div>

                {/* Τύπος Απασχόλησης */}
                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Τύπος Απασχόλησης</label>
                    <input type="text" value="Πλήρης" readOnly />
                </div>

                {/* Ποσό Voucher */}
                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Ποσό Επιχορηγούμενου Voucher</label>
                    <input type="text" value="500,00 ευρώ" readOnly />
                </div>
            </form>

            <h2 className="preview-title">Προεπισκόπηση Μηνιαίας Πληρωμής</h2>
            <div className="pdf-preview">
                <p>PDF εγγράφου</p>
            </div>

            <OptionsButton/>

            {/* Κουμπιά */}
            <div className="button-section-voucher">
                <button className="cancel-btn-voucher" onClick={handleCancel}>Ακύρωση</button>
                <button className="submit-btn-voucherr" onClick={handleVoucherActivation}>Πληρωμή</button>
            </div>
        </div>
    );
}
