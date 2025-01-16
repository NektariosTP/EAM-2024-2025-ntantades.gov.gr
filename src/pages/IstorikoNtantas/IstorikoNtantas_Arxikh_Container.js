import React from "react";
import { useNavigate } from "react-router-dom"; // Προσθήκη πλοήγησης
import "../IstorikoGonewn/IstorikoGonewn_Arxikh_Container.css";

export default function IstorikoNtantas_Arxikh_Container() {
  
  const navigate = useNavigate(); // Εργαλείο πλοήγησης
  
  // Μετάβαση στη σελίδα Ειδοποιήσεων
  const handleIstorikoEidopoihseis = () => {
      navigate("/Ntantades/Profil/Istoriko_Ntanta/Eidopoihseis"); 
  };

  // Μετάβαση στη σελίδα Αξιολογήσεων
  const handleIstorikoAksiologhseis = () => {
      navigate("/Ntantades/Profil/Istoriko_Ntanta/Aksiologhseis"); 
  };

  const handleIstorikoPlhrwmes = () => {
      navigate("/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Oloklhrwmenes");
  };

  const handleIstorikoSymfwnhtika = () => {
      navigate("/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Oloklhrwmena");
  };
  
  const handleIstorikoAithseis = () => {
      navigate("/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Oloklhrwmenes");
  };

  const handleIstorikoRantevou = () => {
      navigate("/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Oloklhrwmena");
  };

  return (
    <div className="istoriko-container">
      <h1 className="istoriko-title">
        Ιστορικό Αιτήσεων
        <img src="/history.png" alt="History" className="history-img" />
      </h1>
      <div className="history-grid">
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoRantevou}>Ραντεβού με Γονείς</div>
            <div className="history-box-description">
              Ιστορικό προγραμματισμένων ή ολοκληρωμένων ραντεβού γνωριμίας με τους γονείς
            </div>
        </div>
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoAithseis}>Αιτήσεις Ενδιαφέροντος</div>
            <div className="history-box-description">
              Ιστορικό αιτήσεων ενδιαφέροντος συνεργασίας με τους γονείς
            </div>
        </div>
        <div className="history-box">
            <div className="history-box-title" onClick={handleIstorikoSymfwnhtika}>Ιδιωτικά Συμφωνητικά</div>
            <div className="history-box-description">
              Ιστορικό υπογεγραμμένων ιδιωτικών συμφωνητικών συνεργασίας με τους γονείς
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
              Ιστορικό αξιολογήσεων από τους γονείς που έχετε συνεργαστεί
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
