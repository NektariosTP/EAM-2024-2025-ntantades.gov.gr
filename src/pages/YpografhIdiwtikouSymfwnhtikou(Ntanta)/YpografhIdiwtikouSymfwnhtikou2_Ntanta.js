import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IdiwtikoSymfwnhtikoProgressBar from "../YpografhIdiwtikouSymfwnhtikou(Goneas)/IdiwtikoSymfwnhtikoProgressBar2";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import React from "react";
import "../YpografhIdiwtikouSymfwnhtikou(Goneas)/YpografhIdiwtikouSymfwnhtikou2.css";

export default function YpografhIdiwtikouSymfwnhtikou2_Ntanta() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/idiotiko_symfwnhtiko.pdf"; // Διαδρομή του αρχείου
    link.download = "idiotiko_symfwnhtiko.pdf"; // Όνομα αρχείου λήψης
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProfile = () => {
    window.location.href = "/Ntantades/Profil";
};

const handleMain = () => {
  window.location.href = "/";
};

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Breadcrumb />
      <IdiwtikoSymfwnhtikoProgressBar />

      <div className="container-symf">
        {/* Τίτλος */}
        <h1 className="title-symf">
          Το Ιδιωτικό Συμφωνητικό Συνεργασίας Υπογράφηκε Επιτυχώς
          <span className="success-icon">✔</span>
        </h1>

        {/* Περιγραφή */}
        <p className="description-symf">
          Θα λάβετε στο email σας το υπογεγραμμένο συμφωνητικό σε μορφή PDF,<br />
          συμπεριλαμβανομένου της ψηφιακής σας υπογραφής και όλων των σχετικών πληροφοριών.
        </p>

        {/* Λήψη PDF */}
        <a href="#" className="download-link" onClick={handleDownload}>
          <img src="/download.jpg" alt="Download Icon" className="download-icon" />
          Idiotiko_symfwnhtiko.pdf
        </a>

        {/* Αναμονή */}
        <h2 className="sub-title-symf">
          Η συνεργασία είναι έτοιμη να ξεκινήσει!
          <img src="/hands.jpg" alt="hands Icon" className="hands-icon" />
        </h2>

        {/* Επιπλέον πληροφορίες */}
        <div className="sub-content-symf">
          <p className="sub-description-symf">
            Μετά την λήξη κάθε μήνα παροχής φροντίδας, θα λαμβάνετε στο τραπεζικό λογαριασμό<br />
            που δηλώσατε το επιχορηγούμενο voucher από τον γονέα, εύκολα και άμεσα.
            <img src="/pay.png" alt="Payment Icon" className="pay-image" />
          </p>

          {/* Εικόνα επιβεβαίωσης */}
          <img src="/conf.webp" alt="Confirmation Icon" className="confirm-image1" />
        </div>

        {/* Κουμπιά */}
        <div className="button-section-ntanta">
          <button className="button-return-button-ntanta" onClick={handleMain}>Επιστροφή στην αρχική</button>
          <button className="button-return-button-ntanta" onClick={handleProfile}>Μετάβαση στο Προφίλ μου</button>
        </div>
      </div>

      <NavMenu />
      <Footer />
    </div>
  );
}
