import React from "react";
import { useNavigate } from "react-router-dom"; // Προσθήκη πλοήγησης
import "./IstorikoGonewn_Arxikh_Container.css";

export default function IstorikoGonewn_Arxikh_Container() {
  
  const navigate = useNavigate(); // Εργαλείο πλοήγησης
  
  // Μετάβαση στη σελίδα Ειδοποιήσεων
  const handleIstorikoEidopoihseis = () => {
      navigate("/Goneis/Profil/Istoriko_Gonea/Eidopoihseis"); 
  };

  // Μετάβαση στη σελίδα Αξιολογήσεων
  const handleIstorikoAksiologhseis = () => {
      navigate("/Goneis/Profil/Istoriko_Gonea/Aksiologhseis"); 
  };

  const handleIstorikoPlhrwmes = () => {
      navigate("/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Oloklhrwmenes");
  };

  const handleIstorikoSymfwnhtika = () => {
      navigate("/Goneis/Profil/Istoriko_Gonea/Idiwtika_Symfwnhtika_Oloklhrwmena");
  };
  
  const handleIstorikoAithseis = () => {
      navigate("/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes");
  };

  const handleIstorikoRantevou = () => {
      navigate("/Goneis/Profil/Istoriko_Gonea/Rantevou_Oloklhrwmena");
  };

  return (
    <div className="istoriko-container">
      <h1 className="istoriko-title">
        Ιστορικό Αιτήσεων
        <img src="/history.png" alt="History" className="history-img" />
      </h1>
      <div className="history-grid">
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoRantevou}>Ραντεβού με Επαγγελματίες</div>
            <div className="history-box-description">
              Ιστορικό προγραμματισμένων ή ολοκληρωμένων ραντεβού γνωριμίας με τους επαγγελματίες
            </div>
        </div>
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoAithseis}>Αιτήσεις Ενδιαφέροντος</div>
            <div className="history-box-description">
              Ιστορικό αιτήσεων ενδιαφέροντος συνεργασίας με τους επαγγελματίες
            </div>
        </div>
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoSymfwnhtika}>Ιδιωτικά Συμφωνητικά</div>
            <div className="history-box-description">
              Ιστορικό υπογεγραμμένων ιδιωτικών συμφωνητικών συνεργασίας με τους επαγγελματίες
            </div>
        </div>
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoPlhrwmes}>Πληρωμές</div>
            <div className="history-box-description">
              Ιστορικό πληρωμών επαγγελματιών και των ενεργοποιήσεων ψηφιακού voucher
            </div>
        </div>
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoAksiologhseis}>
              Αξιολογήσεις
            </div>
            <div className="history-box-description">
              Ιστορικό αξιολογήσεων των επαγγελματιών που έχετε συνεργαστεί
            </div>
        </div>
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoEidopoihseis}>
              Ειδοποιήσεις
            </div>
            <div className="history-box-description">
              Ιστορικό ειδοποιήσεων του προγράμματος
            </div>
        </div>
      </div>
    </div>
  );
}
