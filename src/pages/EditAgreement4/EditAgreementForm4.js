import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Προσθήκη πλοήγησης
import "./EditAgreementForm4.css";

function EditAgreementForm4() {
    const navigate = useNavigate(); // Εργαλείο πλοήγησης

    // Αποθήκευση της κατάστασης
    const handleCompletion = () => {
       window.location.href = `${window.location.origin}/Goneis/Profil/Synergasies/Leptomereies_Complete/Oloklirosi`;
    };

    const handlePrint = () => {
        alert("Εκτύπωση σε εξέλιξη...");
    };

    const handleDownload = () => {
        alert("Λήψη αρχείου σε εξέλιξη...");
    };

    return (
        <div className="container-editagreement">
            <h1 className="title-editagreement">Επεξεργασία Συνεργασίας</h1>
            <h2 className ="form-title-editagreement"> Επεξεργασία Λεπτομερειών Ιδωτικού Συμφωνητικού</h2>

            <form className="payment-form-editagreement">
                <div className="form-group-editagreement">
                    <label>Κατάσταση:</label>
                    <input type="text" value="Ολοκληρωμένη" readOnly />
                </div>
                <div className="form-group-editagreement">
                    <label>Ονοματεπώνυμο Γονέα</label>
                    <input type="text" value="Νεκτάριος Παπάζογλου" readOnly />
                </div>
                <div className="form-group-editagreement">
                    <label>Ονοματεπώνυμο Παιδιού</label>
                    <input type="text" value="Γεωργία Παπάζογλου" readOnly />
                </div>
                <div className="form-group-editagreement">
                    <label>Ονοματεπώνυμο Επαγγελματία</label>
                    <input type="text" value="Χρήστος Μπίκος" readOnly />
                </div>

                <div className="form-group-editagreement">
                    <label>Ημερομηνία έναρξης συνεργασίας</label>
                    <input type="text" value="20/11/2023" readOnly />
                </div>

                <div className="form-group-editagreement">
                    <label>Ημερομηνία λήξης συνεργασίας</label>
                    <input type="text" value="20/5/2024" readOnly />
                </div>
                <div className="form-group-editagreement">
                    <label>Χρόνος Απασχόλησης</label>
                    <table className="work-hours-table">
                        <thead>
                            <tr>
                                <th>Ημέρα</th>
                                <th>Δευτέρα</th>
                                <th>Τρίτη</th>
                                <th>Τετάρτη</th>
                                <th>Πέμπτη</th>
                                <th>Παρασκευή</th>
                                <th>Σάββατο</th>
                                <th>Κυριακή</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>από 11:00 πμ έως 2:00 μμ</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="form-group-editagreement">
                    <label>Ποσό Επιχορηγούμενου Voucher</label>
                    <input type="text" value="500 ευρώ" readOnly />
                </div>
            </form>

            <div className="action-buttons-editagreement">
                <button className="download-btn-editagreement" onClick={handleDownload}>
                    Λήψη
                <img src="/download.jpg" alt="Download" className="button-edit-agreement-icon" />
                </button>
                <button className="print-btn-editagreement" onClick={handlePrint}>
                    Εκτύπωση
                <img src="/print.jpg" alt="Print" className="button-edit-agreement-icon" />
                </button>
            </div>

            <div className="button-section-forma4-editagreement">
                <button className="next-btn-forma4-editagreement" onClick={handleCompletion}>
                    Επιβεβαίωση Ολοκλήρωσης της Συνεργασίας</button>
            </div>
        </div>
    );
}

export default EditAgreementForm4;