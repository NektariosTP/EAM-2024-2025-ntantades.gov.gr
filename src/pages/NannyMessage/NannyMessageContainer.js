import React, { useState } from "react";
import "./NannyMessageContainer.css"
import { useNavigate } from "react-router-dom";
import NannyProfileSidebar from "../NannyProfile/NannyProfileSidebar";

export default function NannyMessageContainer() {
  const navigate = useNavigate();

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
      <div className="idiotika-main-content">
      <div className="idiotika-container-profile">

      <div className="messages-container">
        <h2 className="messages-title">Τα μηνύματά μου</h2>
        {[
          { sender: "Ελένη Ανδρέου", preview: "Καλησπέρα σας, θα μπορούσαμε να επαναπρογραμματίσουμε το ραντεβού μας για κάποια άλλη στιγμή;", time: "12 λεπ." },
          { sender: "Βασίλης Μιχαλακόπουλος", preview: "Ευχαριστώ πολύ, δυστυχώς οι ώρες δεν βολεύουν.", time: "2 ημέρες" },
          { sender: "Λάκης Λαλάκης", preview: "Τέλεια, ευχαριστώ για την εξυπηρέτηση.", time: "3 ημέρες" },
          { sender: "Μαρία Αντωνίου", preview: "Ενδιαφέρομαι για μια συνάντηση σχετικά με φύλαξη.", time: "5 ημέρες" },
        ].map((message, index) => (
          <div key={index} className="message-item">
            <div className="message-header">
              <span className="message-sender">{message.sender}</span>
              <span className="message-time">{message.time}</span>
            </div>
            <p className="message-preview">{message.preview}</p>
          </div>
        ))}
        <div className="no-more-messages">Δεν υπάρχουν άλλα μηνύματα</div>
      </div>
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
    </div>
  );
}