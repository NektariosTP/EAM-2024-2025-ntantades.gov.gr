import React from "react";
import "./Plhrwmh_Epivevaiwsh_Container.css";

export default function Plhrwmh_Epivevaiwsh_Container() {
  const handleIstorikoPlhrwmwn = () => {
    window.location.href = "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Oloklhrwmenes";
  }

  const handleMain = () => {
    window.location.href = "/";
  }
  
  
  return (
    <div className="plhrwmh-container">
      {/* Τίτλος στο κέντρο */}
      <h1 className="plhrwmh-title-epi">
        Η Μηνιαία Πληρωμή και η Ενεργοποίηση του Voucher Ολοκληρώθηκαν Επιτυχώς
        <span className="success-icon">✔</span>
      </h1>

      {/* Κείμενο και πληροφορίες στην αριστερή πλευρά */}
      <div className="content-left">
        <p className="info-text-epi">
          Θα λάβετε στο email σας την απόδειξη πληρωμής σε μορφή PDF,<br />
          συμπεριλαμβανομένου όλων των σχετικών πληροφοριών.
        </p>
        <a href="/miniaia_plirwmi_mevoucher.pdf" download className="pdf-link">
          <img src="/download.jpg" alt="Download Icon" className="download-icon" />
          miniaia_plirwmi_mevoucher.pdf
        </a>
        <p className="waiting-text">
          Αναμονή για την επιβεβαίωση του επαγγελματία{" "}
          <img src="/wait.png" alt="Wait Icon" className="wait-icon" />
        </p>
        <p className="info-text-epi">
          Θα σας αποσταλεί ενημερωτικό e-mail που θα επιβεβαιώνει <br />
          την ολοκλήρωση της διαδικασίας πληρωμής του <br />
          επαγγελματία μέσω του voucher.
        </p>
      </div>

      {/* Κουμπιά στο κέντρο */}
      <div className="buttons-container">
        <button className="btn-history" onClick={handleIstorikoPlhrwmwn}>Ιστορικό Πληρωμών</button>
        <button className="btn-back" onClick={handleMain}>Επιστροφή στην αρχική</button>
      </div>
    </div>
  );
}
