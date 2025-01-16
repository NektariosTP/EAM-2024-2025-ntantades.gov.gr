import React, { useState } from "react";
import "./EditAgreementForm1.css"
import { useNavigate } from "react-router-dom";
import ParentProfileSidebar from "../ParentProfile/ParentProfileSidebar";

export default function EditAgreementForm1() {
  const navigate = useNavigate();
  const currentPayments = [
    {
      date: "Eνεργή",
      status: "20/11/2023 έως 20/5/2024",
      name: "Χρήστος Μπίκος",
    },
  ];
  const finishedPayments = [
    {
      date: "Ολοκληρωμένη",
      status: "20/11/2023 έως 20/5/2024",
      name: "Χρήστος Μπίκος",
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
    <div className="idiotika-layout-editagreement">
      <ParentProfileSidebar />
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
                <p className="bold-text-editagreement">
                  Όνομα Νταντάς: <span className="idiotika-nanny-name-editagreement">{payment.name}</span>
                  </p>
                <p className="normal-text">
                  Περίοδος Συνεργασίας: {payment.status}
                  </p>
              </div>
              <div className="idiotika-action-buttons-editagreement">
                <button className="idiotika-action-details-editagreement" 
                onClick={() => navigate("/Goneis/Profil/Synergasies/Leptomereies_Active")}>
                  Λεπτομέρειες
                </button>
                <button className="idiotika-action-editagreement" onClick={() => openPopup(payment.name)}>
                  <span className="idiotika-envelope-icon">✉️</span> Στείλτε μήνυμα
                </button>
              </div>
            </div>
                <div className="idiotika-buttons-editagreement">
                <button className="edit-button-editagreement" 
                onClick={() => navigate("/Goneis/Profil/Synergasies/Leptomereies_Active/Epeksergasia")}>Επεξεργασία Συνεργασίας </button>
                <button className="cancel-button-editagreement"
                onClick={() => navigate("/Goneis/Profil/Synergasies/Leptomereies_Active/Liksi")}>Λήξη Συνεργασίας</button>
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
        <h2>Ολοκληρωμένη Συνεργασία</h2>
        {finishedPayments.map((payment, index) => (
          <div className="idiotika-list-editagreement">
            <div key={index} className="idiotika-item-editagreement">
              <div className="idiotika-date-container-editagreement">
                <div className="idiotika-date-block-editagreement">
                  {payment.date.replace(' ', '\n')}
                </div>
              </div>
              <div className="idiotika-contentt-editagreement">
                <p className="bold-text-editagreement">
                  Όνομα Νταντάς: <span className="idiotika-nanny-name-editagreement">{payment.name}</span>
                  </p>
                <p className="normal-text">
                  Περίοδος Συνεργασίας: {payment.status}
                  </p>
              </div>
              <div className="idiotika-action-buttons-editagreement">
                <button className="idiotika-action-details-editagreement"
                onClick={() => navigate("/Goneis/Profil/Synergasies/Leptomereies_Complete")}>
                  Λεπτομέρειες
                </button>
                <button className="idiotika-action-editagreement" onClick={() => openPopup(payment.name)}>
                  <span className="idiotika-envelope-icon">✉️</span> Στείλτε μήνυμα
                </button>
              </div>
            </div>
                <div className="idiotika-buttons-editagreement">
                <button className="finish-button-editagreement" 
                onClick={() => navigate("/Goneis/Profil/Synergasies/Leptomereies_Complete/Oloklirosi")}>Επιβεβαίωση Ολοκλήρωσης της Συνεργασίας </button>
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
            <div className="profile-image">Προσθέστε μια Εικόνα!</div>
            <button className="edit-myprofile-button" 
            onClick={() => navigate("/Goneis/Profil/Epeksergasia_Stoixeion")}>Επεξεργασία Στοιχείων</button>
        </div>
        <div className="sidebar-content-profile">
            <h3>Το προφίλ μου</h3>
            <p><strong>Άννα Παυλάκου, 33</strong></p>
            <p>Επαγγελματική κατάσταση: <br /><em>Ιδιωτικός τομέας</em></p>
            <p>Περιοχή: <br /><em>Καλλιθέα, Αθήνα</em></p>
            <hr />
            <p><strong>Η Νταντά σας</strong></p>
            <p>Όνομα Νταντάς: Χρήστος Μπίκος</p>
            <p>Περίοδος Συνεργασίας: 20/11/2023 έως 20/5/2024</p>
            <p>Ημέρες: Δευ, Τρι, Τετ - 8πμ έως 2μμ</p>
            <hr />
            <p>Δικαιούχος λήψης «voucher» ύψους 500 € μηνιαίως</p>
        </div>
      </div>
    </div>
  );
}