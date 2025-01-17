import React, { useState } from "react";
import "./NannyEditAgreementForm2.css"
import { useNavigate } from "react-router-dom";
import NannyProfileSidebar from "../NannyProfile/NannyProfileSidebar";
import "../EditAgreement2/EditAgreementForm2.css"

export default function NannyEditAgreementForm2() {
  const navigate = useNavigate();


  const handlePrint = () => {
    alert("Εκτύπωση σε εξέλιξη...");
  };

    const handleDownload = () => {
        alert("Λήψη αρχείου σε εξέλιξη...");
    };

  return (
    <div className="idiotika-layout-profile">
      <NannyProfileSidebar />
      <div className="container-editagreement">
        <h1 className="title-editagreement">Επεξεργασία Συνεργασίας</h1>
                <h2 className ="form-title-editagreement"> Λεπτομέρειες Ιδωτικού Συμφωνητικού</h2>

                <form className="payment-form-editagreement">
                <div className="form-group-editagreement">
                    <label>Κατάσταση:</label>
                    <input type="text" value="Ενεργή" readOnly />
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
        </div>

      <div className="idiotika-sidebar-profile">
          <div className="sidebar-profile-pic">
            <div className="profile-image">Εικόνα Νταντάς</div>
            <button className="edit-myprofile-button"
            onClick={() => navigate("/Ntantades/Profil/Epeksergasia_Stoixeion")}>Επεξεργασία Στοιχείων</button>
            <button className="edit-ad-button"
            onClick={() => navigate("/Ntantades/Dimiourgia_Aggelias")}>Επεξεργασία Αγγελίας</button>
          </div>
          <div className="sidebar-content-profile">
            <h3>Το προφίλ μου</h3>
            <p><strong>Χρήστος Νίκας, 22</strong></p>
            <p>
              <strong>Διαθέσιμες Ώρες:</strong>
              <br />
              Δε, Τρ: 8:00 πμ - 5:00 μμ
              <br />
              Πε, Παρ: 8:00 πμ - 2:00 μμ
            </p>
            <p>
              <strong>Περιοχή:</strong>
              <br />
              Μοσχάτο <br />
              Καλλιθέα
            </p>
            <p>
              <strong>Εκπαίδευση:</strong>
              <br />
              Πτυχίο ΑΕΙ Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία
            </p>
            <p>
              <strong>Αξιολογήσεις:</strong>
              <br />
              5.0 ★★★★★ (7)
            </p>
          </div>
        </div>
        </div>
  );
}