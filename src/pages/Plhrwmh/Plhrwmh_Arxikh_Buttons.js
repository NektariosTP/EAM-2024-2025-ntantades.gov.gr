import React from 'react';
import { useNavigate } from "react-router-dom"; // Προσθήκη πλοήγησης
import './Plhrwmh_Arxikh_Buttons.css';

const Plhrwmh_Arxikh_Buttons = () => {
  const navigate = useNavigate(); // Εργαλείο πλοήγησης
  
  const handleVoucherActivation = () => {
    window.location.href = "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws";
  };

  const handleIstorikoPlhrwmwn = () => {
    window.location.href = "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Oloklhrwmenes";
  }
  
  return (
    <div className="buttons-container">
      <button className="payment-button" onClick={handleIstorikoPlhrwmwn}>
        Ιστορικό Πληρωμών 
      </button>
      <button className="payment-button" onClick={handleVoucherActivation}>
        Πληρωμή Νταντάς 
      </button>
    </div>
  );
};

export default Plhrwmh_Arxikh_Buttons;
