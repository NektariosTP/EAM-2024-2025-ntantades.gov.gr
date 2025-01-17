import React, { useState, useRef } from "react";
import NannyEditForm1 from "./NannyEditForm1";
import NannyEditForm2 from "./NannyEditForm2";
import NannyEditForm3 from "./NannyEditForm3";
import NannyEditForm4 from "./NannyEditForm4";
import { useNavigate } from "react-router-dom";
import NannyProfileSidebar from "../NannyProfile/NannyProfileSidebar";
import "./Tabs.css";

function NannyProfileTabs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");
  const [errorMessage, setErrorMessage] = useState("");
  const formRefs = {
    personal: useRef(),
    contact: useRef(),
    certificates: useRef(),
    cv: useRef(),
  };

  const handleTabClick = (tab) => {
    // Validate the current form before switching tabs
    const currentFormRef = formRefs[activeTab].current;
    if (currentFormRef && !currentFormRef.validateForm()) {
      setErrorMessage("Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία πριν συνεχίσετε.");
      return;
    }

    setErrorMessage("");
    setActiveTab(tab);
  };

  return (
    <div className="idiotika-layout-profile">
      <NannyProfileSidebar />
    <div className="tabs-container">
      <h1> Επεξεργασία Στοιχείων</h1>
      <div className="tabs-header">
        <div
          className={`tab ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => handleTabClick("personal")}
        >
          Προσωπικά Στοιχεία
        </div>
        <div
          className={`tab ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => handleTabClick("contact")}
        >
          Στοιχεία Επικοινωνίας
        </div>
        <div
          className={`tab ${activeTab === "certificates" ? "active" : ""}`}
          onClick={() => handleTabClick("certificates")}
        >
          Πιστοποιητικά
        </div>
        <div
          className={`tab ${activeTab === "cv" ? "active" : ""}`}
          onClick={() => handleTabClick("cv")}
        >
          Βιογραφικό
        </div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    
      <div className="tabs-content">
        
        {activeTab === "personal" && <NannyEditForm1 ref={formRefs.personal} />}
        {activeTab === "contact" && <NannyEditForm2 ref={formRefs.contact} />}
        {activeTab === "certificates" && <NannyEditForm3 ref={formRefs.certificates} />}
        {activeTab === "cv" && <NannyEditForm4 ref={formRefs.cv} />}
      </div>
      </div>
      <div className="idiotika-sidebar-profile">
          <div className="sidebar-profile-pic">
            <div className="profile-image">Εικόνα Νταντάς</div>
            <button className="edit-myprofile-button"
            onClick={() => navigate("/Ntantades/Profil/Epeksergasia_Stoixeion")}>Επεξεργασία Στοιχείων</button>
            <button className="edit-ad-button"
            onClick={() => navigate("/Ntantades/Dimiourgia_Aggelias")}>Επεξεργασία Αγγελίας</button>
          </div>
          <div className="sidebar-content-profile">
            <h3>Το προφίλ μου</h3>
            <p><strong>Χρήστος Νίκας, 22</strong></p>
            <p>
              <strong>Διαθέσιμες Ώρες:</strong>
              <br />
              Δε, Τρ: 8:00 πμ - 5:00 μμ
              <br />
              Πε, Παρ: 8:00 πμ - 2:00 μμ
            </p>
            <p>
              <strong>Περιοχή:</strong>
              <br />
              Μοσχάτο <br />
              Καλλιθέα
            </p>
            <p>
              <strong>Εκπαίδευση:</strong>
              <br />
              Πτυχίο ΑΕΙ Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία
            </p>
            <p>
              <strong>Αξιολογήσεις:</strong>
              <br />
              5.0 ★★★★★ (7)
            </p>
          </div>
        </div>
    </div>
    

    
  );
}

export default NannyProfileTabs;
