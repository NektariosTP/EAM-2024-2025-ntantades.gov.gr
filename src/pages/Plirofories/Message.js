import React from "react";
import { useNavigate } from "react-router-dom";
import "./Message.css";

function Message() {
  const navigate = useNavigate();

  const handleOdigies = () => {
    window.open("https://ntantades.gov.gr/pdf/odigies_gia_mitroo_epimelitwn.pdf", "_blank");
  };

  const handleFAQGoneis = () => {
    window.open("https://ntantades.gov.gr/pdf/FAQ_%CE%A9%CE%A6%CE%95%CE%9B%CE%9F%CE%A5%CE%9C%CE%95%CE%9D%CE%9F%CE%99_new_17.1.2024.pdf", "_blank");
  }

  const handleFAQNtantades = () =>{
    window.open("https://ntantades.gov.gr/pdf/FAQ_%CE%B5%CF%80%CE%B9%CE%BA%CE%B1%CE%B9%CF%81%CE%BF%CF%80%CE%BF%CE%B9%CE%B7%CE%BC%CE%AD%CE%BD%CE%BF_%CE%B5%CF%80%CE%B9%CE%BC%CE%B5%CE%BB%CE%B7%CF%84%CE%AD%CF%82.17.1.2024.pdf", "_blank");
  }

  return (
    <div className="message-container">
      <h2>Πληροφορίες</h2>
      <hr />

      <div className="info-section">
        <p><strong>● Τι είναι το πρόγραμμα "Νταντάδες της Γειτονιάς";</strong></p>
        <p>
          Το πρόγραμμα «Νταντάδες της Γειτονιάς» στηρίζει οικογένειες με παιδιά
          ηλικίας <strong>2 μηνών έως 2,5 ετών</strong>, προσφέροντας οικονομική
          ενίσχυση μέσω <strong>ψηφιακού voucher</strong> για κατ’ οίκον φροντίδα από
          <strong> πιστοποιημένες νταντάδες</strong>.
        </p>

        <p><strong>● Ποιοι γονείς δικαιούνται να συμμετάσχουν στο πρόγραμμα "Νταντάδες της Γειτονιάς";</strong></p>
        <p>
          Εργαζόμενες και άνεργες μητέρες, εργαζόμενοι πατέρες και κάθε εργαζόμενο
          πρόσωπο στο οποίο έχει ανατεθεί η αποκλειστική επιμέλεια βρέφους ή νηπίου.
          <br />
          <a href="/Goneis">Δείτε τις πλήρεις προϋποθέσεις</a>
        </p>

        <p><strong>● Ποιοι δικαιούνται να εργαστούν ως νταντάδες στο πρόγραμμα "Νταντάδες της Γειτονιάς";</strong></p>
        <p>
          Οποιοσδήποτε άνω των 18, κάτοχος τίτλου σπουδών και πιστοποιητικού πρώτων
          βοηθειών.
          <br />
          <a href="/Ntantades">Δείτε τις πλήρεις προϋποθέσεις</a>
        </p>

        <ul className="extra-links">
          <li>● <a href="#" onClick={handleOdigies}>Οδηγίες</a></li>
          <li>● <a href="#" onClick={handleFAQGoneis}>FAQ Γονέων</a></li>
          <li>● <a href="#" onClick={handleFAQNtantades}>FAQ Νταντάδων</a></li>
        </ul>

        <button className="return-button" onClick={() => navigate('/')}>Επιστροφή στην αρχική</button>
      </div>
    </div>
  );
}

export default Message;