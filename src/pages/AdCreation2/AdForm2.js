import React from 'react';
import './AdForm2.css';
import { useNavigate } from "react-router-dom";

function NannyForm6() {
  const navigate = useNavigate();
  return (
    <div className="form-container-ad2">
      <h2>Η αγγελία σας αποθηκεύτηκε προσωρινά! <img src="/viewfile.png" alt="View Icon" className="view-icon" /> </h2>
      <div className="submit-box-ad2">
        <p> Μπορείτε να συνεχίσετε να επεξεργάζεστε τα στοιχεία σας αργότερα. Όταν τα 
            ολοκληρώσετε μπορείτε να πατήσετε “Οριστική Υποβολή”, ώστε η αγγελία σας να 
            εμφανίζεται στους γονείς.</p>
        <p>Προσοχή! Μέχρι να πατήσετε “Οριστική Υποβολή”, η αγγελία σας δεν θα
        εμφανίζεται στους γονείς.</p>
        
        <div className="button-group-nannies-ad2">
          <button type="button" className="back-button" onClick={() => navigate("/Ntantades/Dimiourgia_Aggelias")}>
            Συνέχεια Επεξεργασίας
          </button>
          <button type="button" className="view-button" onClick={() => navigate("/Ntantades/MyProfile")}>
            Μετάβαση στο Προφίλ μου
          </button>
        </div>
      </div>
    </div>
  );
};

export default NannyForm6;