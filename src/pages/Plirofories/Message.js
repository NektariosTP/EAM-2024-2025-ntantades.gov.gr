import React from "react";
import { useNavigate } from "react-router-dom";
import "./Message.css";

function Message() {
  const navigate = useNavigate();

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
          <li>● <a href="#">Οδηγίες</a></li>
          <li>● <a href="#">FAQ Γονέων</a></li>
          <li>● <a href="#">FAQ Νταντάδων</a></li>
        </ul>

        <button className="return-button" onClick={() => navigate('/')}>Επιστροφή στην αρχική</button>
      </div>
    </div>
  );
}

export default Message;