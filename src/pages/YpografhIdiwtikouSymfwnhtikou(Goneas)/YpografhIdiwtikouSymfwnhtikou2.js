import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IdiwtikoSymfwnhtikoProgressBar from "./IdiwtikoSymfwnhtikoProgressBar2";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

import React from "react";
import "./YpografhIdiwtikouSymfwnhtikou2.css";

export default function YpografhIdiwtikouSymfwnhtikou2() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/idiotiko_symfwnhtiko.pdf"; // Διαδρομή του αρχείου
    link.download = "idiotiko_symfwnhtiko.pdf"; // Όνομα αρχείου λήψης
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  

  const handleProfile = () => {
        window.location.href = "/Goneis/Profil";
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
          Αναμονή για την υπογραφή του επαγγελματία
          <img src="/wait.png" alt="Wait Icon" className="wait-icon" />
        </h2>

        {/* Επιπλέον πληροφορίες */}
        <div className="sub-content-symf">
          <p className="sub-description-symf">
            Θα χρειαστεί να αναμένετε για την υπογραφή του επαγγελματία, ώστε να ξεκινήσει η συνεργασία.<br />
            Μόλις ολοκληρωθεί αυτή η διαδικασία θα λάβετε σχετική ενημέρωση μέσω email και<br />
            το παιδί σας θα απολαύσει την φροντίδα που του αξίζει!
          </p>

          {/* Εικόνα επιβεβαίωσης */}
          <img src="/conf.webp" alt="Confirmation Icon" className="confirm-image1" />
        </div>

        {/* Κουμπιά */}
        <div className="button-section-symf">
          <button className="button-return-button-symf" onClick={handleMain}>Επιστροφή στην αρχική</button>
          <button className="button-return-button-symf" onClick={handleProfile}>Μετάβαση στο Προφίλ μου</button>
        </div>
      </div>

      <NavMenu />
      <Footer />
    </div>
  );
}
