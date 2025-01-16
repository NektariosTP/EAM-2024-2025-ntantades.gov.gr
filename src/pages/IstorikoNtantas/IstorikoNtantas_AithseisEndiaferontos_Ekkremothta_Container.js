import React, { useState, useEffect } from "react";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";
import "../IstorikoGonewn/IstorikoGonewn_AithseisEndiaferontos_Ekkremothta_Container.css";

export default function IstorikoNtantas_AithseisEndiaferontos_Ekkremothta_Container() {
  const initialRequests = [
    {
      date: "15/05/2024",
      status: "Σε εκκρεμότητα",
      name: "Χρήστος Τζαθάκης",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
    },
    {
      date: "15/05/2024",
      status: "Σε εκκρεμότητα",
      name: "Χρήστος Ανδρέου",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
    },
    {
      date: "15/05/2024",
      status: "Σε εκκρεμότητα",
      name: "Χρήστος Παύλου",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
    },
    {
      date: "15/05/2024",
      status: "Σε εκκρεμότητα",
      name: "Χρήστος Γεωργίου",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
    },
  ];

  const [sortOrder, setSortOrder] = useState("asc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredRequests, setFilteredRequests] = useState(() => {
    const savedRequests = JSON.parse(localStorage.getItem("pendingRequests_ntanta")) || initialRequests;
    return savedRequests;
  });
  const [completedRequests, setCompletedRequests] = useState(() => {
    return JSON.parse(localStorage.getItem("completedRequests_ntanta")) || [];
  });

  useEffect(() => {
    localStorage.setItem("pendingRequests_ntanta", JSON.stringify(filteredRequests));
  }, [filteredRequests]);

  useEffect(() => {
    localStorage.setItem("completedRequests_ntanta", JSON.stringify(completedRequests));
  }, [completedRequests]);

  const deleteRequest = (index) => {
    // Ανάκτηση των εκκρεμών και ολοκληρωμένων αιτήσεων από το localStorage
    const pendingRequests = JSON.parse(localStorage.getItem("pendingRequests_ntanta")) || [];
    const completedRequests = JSON.parse(localStorage.getItem("completedRequests_ntanta")) || [];

    // Επιλέγουμε την αίτηση που θα διαγραφεί και ενημερώνουμε την κατάστασή της
    const updatedRequest = { 
        ...pendingRequests[index], 
        status: "Απορρίφθηκε", 
        waited: false, 
        approved: false 
    };

    // Αφαιρούμε την αίτηση από τις εκκρεμότητες
    const updatedPendingRequests = pendingRequests.filter((_, i) => i !== index);

    // Προσθέτουμε την αίτηση στις ολοκληρωμένες
    const updatedCompletedRequests = [...completedRequests, updatedRequest];

    // Ενημέρωση του localStorage
    localStorage.setItem("pendingRequests_ntanta", JSON.stringify(updatedPendingRequests));
    localStorage.setItem("completedRequests_ntanta", JSON.stringify(updatedCompletedRequests));

    // Ενημέρωση του state
    setFilteredRequests(updatedPendingRequests);
    setCompletedRequests(updatedCompletedRequests);
};

  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const requestsPerPage = 5;

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const changeSortOrder = (order) => {
    setSortOrder(order);
    setShowDropdown(false);
  };

  const sortedRequests = [...filteredRequests].sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = sortedRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );
  const totalPages = Math.ceil(sortedRequests.length / requestsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const lastPage = () => setCurrentPage(totalPages);

  const openPopup = (nannyName) => {
    setSelectedNanny(nannyName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedNanny(null);
    setMessage("");
  };

  const sendMessage = () => {
    setShowPopup(false);
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000);
    setMessage("");
  };

  const confirmRequest = (index) => {
    // Retrieve pending and completed requests from local storage
    const pendingRequests = JSON.parse(localStorage.getItem("pendingRequests_ntanta")) || [];
    const completedRequests = JSON.parse(localStorage.getItem("completedRequests_ntanta")) || [];

    // Modify the selected request to mark it as approved
    const confirmedRequest = {
        ...pendingRequests[index],
        status: "Εγκρίθηκε",
        approved: true,
    };

    // Update pending and completed requests
    const updatedPendingRequests = pendingRequests.filter((_, i) => i !== index);
    const updatedCompletedRequests = [...completedRequests, confirmedRequest];

    // Save updated requests to local storage
    localStorage.setItem("pendingRequests_ntanta", JSON.stringify(updatedPendingRequests));
    localStorage.setItem("completedRequests_ntanta", JSON.stringify(updatedCompletedRequests));

    // Update state to reflect changes in UI
    setFilteredRequests(updatedPendingRequests);
    setCompletedRequests(updatedCompletedRequests);

    window.location.href = "/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Se_Ekkremothta/Epivevaiwsh";
};


  return (
    <div className="aitiseis-layout">
      <SidebarMenu_Ntanta />
      <div className="aitiseis-container">
        <h1 className="aitiseis-title">Αιτήσεις Ενδιαφέροντος</h1>
        <h2 className="aitiseis-subtitle">Σε εκκρεμότητα</h2>

        <IstorikoGonewn_Anazhthsh
          messages={initialRequests}
          setFilteredMessages={setFilteredRequests}
        />

        <div className="aitiseis-sort-dropdown-container">
          <div
            className="aitiseis-sort-dropdown-button"
            onClick={toggleDropdown}
          >
            Ημερομηνία({sortOrder === "asc" ? "Αύξουσα" : "Φθίνουσα"})
            <span className="dropdown-icon">☰</span>
          </div>
          {showDropdown && (
            <div className="aitiseis-sort-dropdown-menu">
              <div
                onClick={() => changeSortOrder("asc")}
                className="aitiseis-dropdown-item"
              >
                Ημερομηνία(Αύξουσα)
              </div>
              <div
                onClick={() => changeSortOrder("desc")}
                className="aitiseis-dropdown-item"
              >
                Ημερομηνία(Φθίνουσα)
              </div>
            </div>
          )}
        </div>

        <div className="aitiseis-list">
          {currentRequests.map((request, index) => (
            <div key={index} className="aitiseis-item">
              <div className="aitiseis-date-container">
                <div className="aitiseis-date-block">{request.date}</div>
              </div>
              <div className="aitiseis-content">
                <p className="bold-text">
                  Όνομα Γονέα: <span className="aitiseis-nanny-name">{request.name}</span>
                </p>
                <p className="normal-text">
                  Κατάσταση: {request.status}
                  <img src="/wait.png" alt="Wait Icon" className="idiotika-wait-icon" />
                </p>
                <p className="normal-text">Συνοπτική Περιγραφή: {request.description}</p>
              </div>
              <button
                className="aitiseis-action"
                onClick={() => openPopup(request.name)}
              >
                <span className="envelope-icon">✉️</span> Στείλτε μήνυμα
              </button>
              <div className="aitiseis-buttons">
                <button className="edit-button" onClick={() => confirmRequest(index)}>Επιβεβαίωση Αίτησης</button>
                <button className="delete-button" onClick={() => deleteRequest(index)}>Διαγραφή Αίτησης</button>
              </div>
            </div>
          ))}
        </div>

        {showPopup && (
          <div className="aitiseis-popup-overlay">
            <div className="aitiseis-popup-content">
              <h2>Αποστολή Μηνύματος</h2>
              <p>Προς: {selectedNanny}</p>
              <textarea
                placeholder="Γράψτε το μήνυμά σας εδώ..."
                className="aitiseis-popup-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
              ></textarea>
              <div className="char-counter">{message.length}/1000</div>
              <div className="aitiseis-popup-buttons">
                <button className="aitiseis-cancel-btn" onClick={closePopup}>
                  Ακύρωση
                </button>
                <button className="aitiseis-send-btn" onClick={sendMessage}>
                  Αποστολή
                </button>
              </div>
            </div>
          </div>
        )}

        {showSuccessPopup && (
          <div className="oloklhrwmena-success-popup">
            <p>Το μήνυμα στάλθηκε επιτυχώς!</p>
          </div>
        )}

        {/* Σελιδοποίηση */}
        <div className="pagination">
          <span onClick={prevPage}>{"<"}</span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              onClick={() => paginate(index + 1)}
              className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </span>
          ))}
          <span onClick={nextPage}>{">"}</span>
          <span onClick={lastPage}>{">>"}</span>
        </div>

        <p className="aitiseis-no-more">
          Δεν υπάρχουν άλλες αιτήσεις ενδιαφέροντος σε εκκρεμότητα
        </p>
      </div>
    </div>
  );
}
