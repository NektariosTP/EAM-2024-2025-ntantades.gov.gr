import React, { useState, useRef } from "react";
import ParentEditForm1 from "./ParentEditForm1";
import ParentEditForm2 from "./ParentEditForm2";
import ParentEditForm3 from "./ParentEditForm3";
import ParentEditForm4 from "./ParentEditForm4";
import { useNavigate } from "react-router-dom";
import ParentProfileSidebar from "../ParentProfile/ParentProfileSidebar";
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
      <ParentProfileSidebar />
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
          Στοιχεία Παιδιού
        </div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    
      <div className="tabs-content">
        
        {activeTab === "personal" && <ParentEditForm1 ref={formRefs.personal} />}
        {activeTab === "contact" && <ParentEditForm2 ref={formRefs.contact} />}
        {activeTab === "certificates" && <ParentEditForm3 ref={formRefs.certificates} />}
        {activeTab === "cv" && <ParentEditForm4 ref={formRefs.cv} />}
      </div>
      </div>
      <div className="idiotika-sidebar-profile">
            <div className="sidebar-profile-pic">
                <div className="profile-image">Προσθέστε μια Εικόνα!</div>
                <button className="edit-myprofile-button" 
                onClick={() => navigate("/Goneis/Profil/Epeksergasia_Stoixeion")}>Επεξεργασία Στοιχείων</button>
            </div>
            <div className="sidebar-content-profile">
                <h3>Το προφίλ μου</h3>
                <p><strong>Άννα Παυλάκου, 33</strong></p>
                <p>Επαγγελματική κατάσταση: <br /><em>Ιδιωτικός τομέας</em></p>
                <p>Περιοχή: <br /><em>Καλλιθέα, Αθήνα</em></p>
                <hr />
                <p><strong>Η Νταντά σας</strong></p>
                <p>Όνομα Νταντάς: Χρήστος Μπίκος</p>
                <p>Περίοδος Συνεργασίας: 20/11/2023 έως 20/5/2024</p>
                <p>Ημέρες: Δευ, Τρι, Τετ - 8πμ έως 2μμ</p>
                <hr />
                <p>Δικαιούχος λήψης «voucher» ύψους 500 € μηνιαίως</p>
            </div>
            </div>
        </div>
    
  );
}

export default NannyProfileTabs;
