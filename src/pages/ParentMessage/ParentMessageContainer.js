import React, { useState } from "react";
import "./ParentMessageContainer.css"
import { useNavigate } from "react-router-dom";
import ParentProfileSidebar from "../ParentProfile/ParentProfileSidebar";

export default function ParentMessageContainer() {
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
      <ParentProfileSidebar />
      <div className="idiotika-main-content">
      <div className="idiotika-container-profile">

      <div className="messages-container">
        <h2 className="messages-title">Τα μηνύματά μου</h2>
        {[
          { sender: "Mαρία Κουζέλη", preview: "Καλησπέρα σας, την Τρίτη θα με βόλευε και εμένα!", time: "1 ώρα" },
          { sender: "Χρήστος Μπίκος", preview: "Τέλεια, θα έρθω μια ώρα νωρίτερα!", time: "6 ημέρες" },
          { sender: "Μάρκος Τσαγκαράκης", preview: "Εννοείται, καλή συνέχεια", time: "1 εβδομάδα" },
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
    </div>
  );
}