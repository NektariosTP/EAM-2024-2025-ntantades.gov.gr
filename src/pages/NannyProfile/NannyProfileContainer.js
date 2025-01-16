import React, { useState } from "react";
import "./NannyProfileContainer.css"
import { useNavigate } from "react-router-dom";
import NannyProfileSidebar from "./NannyProfileSidebar";

export default function NannyProfileContainer() {
  const navigate = useNavigate();
  const currentPayments = [
    {
      date: "Eνεργή",
      status: "20/11/2023 έως 20/5/2024",
      name: "Νεκτάριος Παπάζογλου",
      description: "Φύλαξη 1 παιδιού, πλήρης απασχόληση",
    },
  ];
  const [appointments, setAppointments] = useState([
    {
      date: "15/5/24",
      location: "Διαδικτυακό",
      name: "Χρήστος Παπαδόπουλος",
      time: "15/5/24, 5:00 μμ",
      status: "Προγραμματισμένο",
    },
    {
      date: "13/5/24",
      location: "Δια ζώσης",
      name: "Ελένη Ανδρέου",
      time: "13/5/24, 3:00 μμ",
      status: "Προγραμματισμένο",
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      date: "11 ΜΑΙ",
      time: "12:53μμ",
      message: " Ο/Η γονέας Άννα Παπαδοπούλου έκανε μια αίτηση για ραντεβού",
    },
    {
      date: "9 ΜΑΙ",
      time: "11:43πμ",
      message: "Η Ενεργοποίηση του Ψηφιακού Voucher από τον/την γονέα Νεκτάριο Παπάζογλου επιβεβαιώθηκε",
    },
  ]);

  const removeAppointment = (indexToRemove) => {
    const updatedAppointments = appointments.filter((_, index) => index !== indexToRemove);
    setAppointments(updatedAppointments);
  };


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
          <h2 className="idiotika-title-profile" >Ενεργή Συνεργασία </h2>
          {currentPayments.map((payment, index) => (
          <div className="idiotika-list-profile">
            <div key={index} className="idiotika-item-profile">
              <div className="idiotika-date-container-profile">
                <div className="idiotika-date-block-profile">
                  {payment.date.replace(' ', '\n')}
                </div>
              </div>
              <div className="idiotika-contentt-profile">
                <p className="normal-text">
                  Όνομα γονέα: <span className="idiotika-nanny-name-profile">{payment.name}</span>
                  </p>
                  <p className="normal-text">
                  Συνοπτική Περιγραφή: {payment.description}
                  </p>
                <p className="normal-text">
                  Περίοδος Συνεργασίας: {payment.status}
                  </p>
              </div>
              <div className="idiotika-action-buttons-profile">
                <button className="idiotika-action-details-profile" 
                onClick={() => navigate("/Ntantades/Profil/Synergasies/Leptomereies_Active")}>
                  Λεπτομέρειες
                </button>
                <button className="idiotika-action-profile" onClick={() => openPopup(payment.name)}>
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
        <h2 className="idiotika-title-profile">Προσεχώς Ραντεβού</h2>
        {appointments.map((appointment, index) => (
        <div className="idiotika-list-profile" key={index}>
            <div className="idiotika-item-profile">
            <div className="idiotika-date-container-profile">
                <div className="idiotika-date-block-profile">
                {appointment.date.replace(" ", "\n")}
                </div>
            </div>
            <div className="idiotika-contentt-profile">
                <p className="bold-text-profile">
                Ραντεβού:{" "}
                <span className="idiotika-nanny-name-profile">
                    {appointment.location}
                </span>
                </p>
                <p className="normal-text">Νταντά: {appointment.name}</p>
                <p className="normal-text">Ημερομηνία & Ώρα: {appointment.time}</p>
                <p className="normal-text">Κατάσταση: {appointment.status}</p>
            </div>
            <div className="idiotika-action-buttons-profile">
                <button
                className="idiotika-action-profile"
                onClick={() => openPopup(appointment.name)}
                >
                <span className="idiotika-envelope-icon">✉️</span> Στείλτε μήνυμα
                </button>
            </div>
            </div>
            <div className="idiotika-buttons-profile">
            <button
                className="edit-button-profile"
                onClick={() => { navigate("/Ntantades/Profil/Rantevou/Epeksergasia")}}>
                Επαναπρογραμματισμός
            </button>
            <button
                className="cancel-button-profile"
                onClick={() => removeAppointment(index)}
            >
                Ακύρωση Ραντεβού
            </button>
            </div>
        </div>
        ))}

        <div className="view-all-appointments">
            <a href="/Ntantades/Profil/Rantevou">Όλα τα προσεχώς ραντεβού μου</a>
        </div>

        <h2 className="idiotika-title-profile">Ειδοποιήσεις</h2>
        {notifications.map((notification, index) => (
        <div className="idiotika-list-notifications" key={index}>
            <div className="idiotika-item-notifications">
            <div className="idiotika-date-block-notifications">
                <div className="date">{notification.date}</div>
                <div className="time">{notification.time}</div>
            </div>
            <div className="idiotika-content-notifications">
                <p className="notification-message">{notification.message}</p>
            </div>
            </div>
        </div>
        ))}

        <div className="view-all-notifications">
            <a href="/Ntantades/Profil/Eidopoiseis">Όλες οι ειδοποιήσεις μου</a>
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
            onClick={() => navigate("/Ntantades/Profil/Dimiourgia_Aggelias")}>Επεξεργασία Αγγελίας</button>
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