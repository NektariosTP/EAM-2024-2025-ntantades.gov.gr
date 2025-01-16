import React from "react";
import { useNavigate } from "react-router-dom";
import "./IstorikoNtantas_Rantevou_Epivevaiwsh.css";

export default function IstorikoNtantas_Rantevou_Epivevaiwsh_Container() {

  const handleProfile = () => {
    window.location.href = `${window.location.origin}/ntanta/profile`;
};

const handleMain = () => {
window.location.href = `${window.location.origin}/main`;
};

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/rantevou_gnwrimias.pdf"; // Διαδρομή του αρχείου
  link.download = "rantevou_gnwrimias.pdf"; // Όνομα αρχείου λήψης
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};  


  const appointmentDetails = JSON.parse(localStorage.getItem("latestConfirmedAppointment")) || {
    date: "",
    time: "",
    type: "",
    location: "",
    nannyName: "",
  };

  return (
    <div className="confirmation-container">
      <h2>Το Ραντεβού με Γονέα Επιβεβαιώθηκε Επιτυχώς<span className="success-icon">✔</span> </h2>
      <p>Ημερομηνία: {appointmentDetails.date}</p>
      <p>Ώρα: {appointmentDetails.time}</p>
      <p>Τύπος Ραντεβού: {appointmentDetails.type}</p>
      <p>
        Τοποθεσία: 
        {appointmentDetails.type === "Διαδικτυακό" ? (
          <a 
            href="https://zoom.us/j/1234567890?pwd=abcdef123456" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="zoom-link"
          >
            Zoom link
          </a>
        ) : (
          <a 
            href={`https://www.google.com/maps?q=${encodeURIComponent(appointmentDetails.location)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="location-link"
          >
            {appointmentDetails.location}
          </a>
        )}
      </p>
      <p>Ονοματεπώνυμο Γονέα: {appointmentDetails.nannyName}</p>
      <p className="confirmation-container">
      Θα λάβετε υπενθύμιση πριν από το ραντεβού στο e-mail σας. Αν χρειαστείτε αλλαγή ή ακύρωση,<br/>
        μπορείτε να το διαχειριστείτε μέσα από το{" "}
        <a href="/istorikoo/rantevou/prosexws">Ιστορικό Αιτήσεων</a> του λογαριασμού σας.
        </p>
      {/* Λήψη PDF */}
      <a href="#" className="download-link" onClick={handleDownload}>
          <img src="/download.jpg" alt="Download Icon" className="download-icon" />
          rantevou_gnwrimias.pdf
        </a>
      <div className="button-section4">
      <button className="button-return-button4" onClick={handleMain}>Επιστροφή στην αρχική</button>
          <button className="button-return-button4" onClick={handleProfile}>Μετάβαση στο Προφίλ μου</button>
      </div>
    </div>
  );
}
