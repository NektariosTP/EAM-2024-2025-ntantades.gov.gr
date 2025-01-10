import React from 'react';
import './NannyForm6.css';
import { useNavigate } from "react-router-dom";

function NannyForm6() {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <h2>Η εγγραφή σας ολοκληρώθηκε επιτυχώς <img src="/green_tick_nanny.jpg" alt="Checkmark Icon" className="checkmark6-icon" /> </h2>
      <div className="submit-box6">
        <p> Θα λάβετε στο email σας το σχετικό έγγραφο σε μορφή PDF, 
        συμπεριλαμβανομένου όλων των σχετικών πληροφοριών.</p>
        <div className="popup-button-group6">
          <a href="/epivevaiwsh_eggrafhs_ntanta.pdf" download className="pdf_confirm-nanny-link">
            <img src="/download.jpg" alt="Download Icon" className="download6-icon" />
            epivevaiwsh_eggrafhs.pdf
          </a>
        </div>
        
        <div className="button-group6-nannies">
          <button type="button" className="back-button" onClick={() => navigate("/")}>
            Επιστροφή στην Αρχική
          </button>
          <button type="button" className="view-button" onClick={() => navigate("/Ntantades/Profile")}>
            Μετάβαση στο Προφίλ μου
          </button>
          <button type="button" className="submit-button" onClick={() => navigate("/Ntantades/Dimiourgia_Aggelias")}>
            Δημιουργία Αγγελίας
          </button>
        </div>
      </div>
    </div>
  );
};

export default NannyForm6;
