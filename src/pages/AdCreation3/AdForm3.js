import React from 'react';
import './AdForm3.css';
import { useNavigate } from "react-router-dom";

function AdForm3() {
  const navigate = useNavigate();
  return (
    <div className="form-container-ad3">
      <h2>Η αγγελία σας υποβλήθηκε επιτυχώς! <img src="/green_tick_nanny.jpg" alt="View Icon" className="tick-icon" /> </h2>
      <div className="submit-box-ad3">
        <p> Η αγγελία σας υποβλήθηκε επιτυχώς και πλέον εμφανίζεται και στους γονείς. Μπορείτε να 
            δείτε ξανά την αγγελία σας πατώντας “Προεπισκόπηση Αγγελίας”.</p>

        <p> Εάν δεν είστε σίγουροι για την αγγελία σας, τότε μπορείτε στο μέλλον να 
        την αλλάξετε πατώντας “Τροποποίηση Στοιχείων” στο προφίλ σας</p>
        
        <div className="button-group-nannies-ad3">
          <button type="button" className="back-button" onClick={(e) => { 
              e.preventDefault(); 
              alert("This is the view button!"); 
            }}>
            Προεπισκόπηση Αγγελίας
          </button>
          <button type="button" className="view-button" onClick={() => navigate("/Ntantades/MyProfile")}>
            Μετάβαση στο Προφίλ μου
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdForm3;