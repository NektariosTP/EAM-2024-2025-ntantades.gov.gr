import React from 'react';
import './NannyForm5.css';
import { useNavigate } from "react-router-dom";

function NannyForm5() {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <h2>5. Δημιουργία Λογαριασμού</h2>
      <div className="submit-box">
        <p>Είστε σίγουροι ότι θέλετε να ολοκληρώσετε την εγγραφή σας;</p>
        <div className="button-group5-nannies">
          <button type="button" className="back-button" onClick={() => navigate("/Ntantades/")}>
            Ακύρωση Εγγραφής
          </button>
          <button 
            className="view-button" 
            onClick={(e) => { 
              e.preventDefault(); 
              alert("This is the view button!"); 
            }}
          >
            Προεπισκόπηση Εγγραφής
          </button>
          <button type="button" className="submit-button" onClick={() => navigate("/Ntantades/Eggrafi/Epitixia_Eggrafis")}>
            Ολοκλήρωση Εγγραφής
          </button>
        </div>
      </div>

      <div className="button-group5-nannies-back">
        <button type="button" className="back-button" onClick={() => navigate("/Ntantades/Eggrafi/4")}>
          Πίσω
        </button>
      </div>
    </div>
  );
};

export default NannyForm5;