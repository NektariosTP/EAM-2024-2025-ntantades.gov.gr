import React, { useState } from "react";
import "./NannyEditAgreementForm1.css"
import { useNavigate } from "react-router-dom";
import NannyProfileSidebar from "../NannyProfile/NannyProfileSidebar";

export default function NannyEditAgreementForm1() {
  const navigate = useNavigate();
  const currentPayments = [
    {
      date: "Eνεργή",
      status: "20/11/2023 έως 20/5/2024",
      name: "Νεκτάριος Παπάζογλου",
      description: "Φύλαξη 1 παιδιού, πλήρης απασχόληση",
    },
  ];


  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const openPopup = (nannyName) => {
    setSelectedNanny(nannyName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedNanny(null);
    setMessage("");
  };

  const sendMessage = () => {
    setShowPopup(false);
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000);
    setMessage("");
  };

  return (
    <div className="idiotika-layout-profile">
      <NannyProfileSidebar />
      <div className="idiotika-container-editagreement">
        <h1 className="idiotika-title-editagreement">Οι Συνεργασίες Μου</h1>
          <h2>Ενεργή Συνεργασία </h2>
          {currentPayments.map((payment, index) => (
          <div className="idiotika-list-editagreement">
            <div key={index} className="idiotika-item-editagreement">
              <div className="idiotika-date-container-editagreement">
                <div className="idiotika-date-block-editagreement">
                  {payment.date.replace(' ', '\n')}
                </div>
              </div>
              <div className="idiotika-contentt-editagreement">
                <p className="normal-text">
                  Όνομα Γονέα: <span className="idiotika-nanny-name-editagreement">{payment.name}</span>
                  </p>
                  <p className="normal-text">
                  Συνοπτική Περιγραφή: {payment.description}
                  </p>
                <p className="normal-text">
                  Περίοδος Συνεργασίας: {payment.status}
                  </p>
              </div>
              <div className="idiotika-action-buttons-editagreement">
                <button className="idiotika-action-details-editagreement" 
                onClick={() => navigate("/Ntantades/Profil/Synergasies/Leptomereies_Active")}>
                  Λεπτομέρειες
                </button>
                <button className="idiotika-action-editagreement" onClick={() => openPopup(payment.name)}>
                  <span className="idiotika-envelope-icon">✉️</span> Στείλτε μήνυμα
                </button>
              </div>
            </div>
          </div>
          ))}

        

        {showPopup && (
          <div className="idiotika-popup-overlay">
            <div className="idiotika-popup-content">
              <h2>Αποστολή Μηνύματος</h2>
              <p>Προς: {selectedNanny}</p>
              <textarea 
                placeholder="Γράψτε το μήνυμά σας εδώ..." 
                className="idiotika-popup-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
              ></textarea>
              <div className="char-counter">{message.length}/1000</div>
              <div className="idiotika-popup-buttons">
                <button className="idiotika-cancel-btn" onClick={closePopup}>Ακύρωση</button>
                <button className="idiotika-send-btn" onClick={sendMessage}>Αποστολή</button>
              </div>
            </div>
          </div>
        )}

        {showSuccessPopup && (
          <div className="idiotika-success-popup">
            <p>Το μήνυμα στάλθηκε επιτυχώς!</p>
          </div>
        )}
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