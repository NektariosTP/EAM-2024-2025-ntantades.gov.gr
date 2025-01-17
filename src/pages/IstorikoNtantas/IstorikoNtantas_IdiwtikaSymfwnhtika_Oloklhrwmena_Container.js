import React, { useState } from "react";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";
import "../IstorikoGonewn/IstorikoGonewn_IdiwtikaSymfwnhtika_Oloklhrwmena_Container.css";

export default function IstorikoNtantas_IdiwtikaSymfwnhtika_Oloklhrwmena_Container() {
   const handleAnanewsh = () => {
    window.location.href = `${window.location.origin}/ypografh_idiwtikou_symfwnhtikou`;
   };
  
    const initialContracts = [
    {
      date: "18/11/2023",
      status: "Εγκρίθηκε",
      name: "Χρήστος Μπίκος",
      type: "Ανανέωση Ιδιωτικού Συμφωνητικού",
      approved: true,
    },
    {
      date: "11/11/2023",
      status: "Απορρίφθηκε",
      name: "Ιωάννα Παπαδοπούλου",
      type: "",
      approved: false,
    },
    {
      date: "9/11/2023",
      status: "Απορρίφθηκε",
      name: "Νικόλαος Παπαχρήστου",
      type: "",
      approved: false,
    },
  ];

  const getCompletedContracts = () => {
    // Λήψη αποθηκευμένων δεδομένων από το localStorage
    const savedContracts = JSON.parse(localStorage.getItem("completedContracts_ntanta")) || [];
    
    // Συνδυασμός των αρχικών δεδομένων και των αποθηκευμένων
    const mergedContracts = [...initialContracts, ...savedContracts];
    
    // Αφαίρεση διπλότυπων συμφωνητικών (π.χ., με βάση την ημερομηνία και το όνομα)
    const uniqueContracts = mergedContracts.reduce((acc, current) => {
      const exists = acc.find(
        (item) => item.name === current.name && item.date === current.date
      );
      if (!exists) acc.push(current);
      return acc;
    }, []);
  
    // Αποθήκευση του συγχωνευμένου αποτελέσματος στο localStorage
    localStorage.setItem("completedContracts_ntanta", JSON.stringify(uniqueContracts));
  
    return uniqueContracts;
  };
  
  // State για τα ολοκληρωμένα συμφωνητικά
  const [filteredContracts, setFilteredContracts] = useState(getCompletedContracts());
  

  const [sortOrder, setSortOrder] = useState("desc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [filterUnread, setFilterUnread] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("Ημερομηνία(Φθίνουσα)");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const contractsPerPage = 5;

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const changeSortOrder = (order) => {
    setSortOrder(order);
    setFilterUnread(false);
    setCurrentFilter(order === "asc" ? "Ημερομηνία(Αύξουσα)" : "Ημερομηνία(Φθίνουσα)");
    setShowDropdown(false);
  };

  const sortedContracts = [...filteredContracts].sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const indexOfLastContract = currentPage * contractsPerPage;
  const indexOfFirstContract = indexOfLastContract - contractsPerPage;
  const currentContracts = sortedContracts.slice(
    indexOfFirstContract,
    indexOfLastContract
  );
  const totalPages = Math.ceil(sortedContracts.length / contractsPerPage);

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

  const filterApproved = () => {
    const approvedContracts = getCompletedContracts().filter((contract) => contract.approved);
    setFilteredContracts(approvedContracts);
    setCurrentFilter("Εγκεκριμένα Ιδ.Συμφωνητικά");
    setShowDropdown(false);
  };

  const filterCancel = () =>{
    const notapprovedContracts = getCompletedContracts().filter((contract) => !contract.approved);
    setFilteredContracts(notapprovedContracts);
    setCurrentFilter("Απορριφθέντα Ιδ.Συμφωνητικά");
    setShowDropdown(false);
  }
  
  const showAllContracts = () => {
    setFilteredContracts(getCompletedContracts());
    setCurrentFilter("Όλα τα Ιδ.Συμφωνητικά");
    setShowDropdown(false);
  };

  return (
    <div className="oloklhrwmena-layout">
      <SidebarMenu_Ntanta />
      <div className="oloklhrwmena-container">
        <h1 className="oloklhrwmena-title">Ιδιωτικά Συμφωνητικά</h1>
        <h2 className="oloklhrwmena-subtitle">Ολοκληρωμένα</h2>

        <IstorikoGonewn_Anazhthsh
          messages={getCompletedContracts()}
          setFilteredMessages={setFilteredContracts}
        />

        <div className="oloklhrwmena-sort-dropdown-container">
          <div
            className="oloklhrwmena-sort-dropdown-button"
            onClick={toggleDropdown}>
            {currentFilter}
            <span className="dropdown-icon">☰</span>
          </div>
          {showDropdown && (
            <div className="oloklhrwmena-sort-dropdown-menu">
              <div
                onClick={() => changeSortOrder("asc")}
                className="oloklhrwmena-dropdown-item"
              >
                Ημερομηνία(Αύξουσα)
              </div>
              <div
                onClick={() => changeSortOrder("desc")}
                className="oloklhrwmena-dropdown-item"
              >
                Ημερομηνία(Φθίνουσα)
              </div>
              <div onClick={filterApproved} className="oloklhrwmena-dropdown-item">
                Εγκεκριμένα Ιδ.Συμφωνητικά
                </div>
                <div onClick={filterCancel} className="oloklhrwmena-dropdown-item">
                Απορριφθέντα Ιδ.Συμφωνητικά
                </div>
                <div onClick={showAllContracts} className="oloklhrwmena-dropdown-item">
                  Όλα τα Ιδ.Συμφωνητικά
                </div>
            </div>
          )}
        </div>

        <div className="oloklhrwmena-list">
          {currentContracts.map((contract, index) => (
            <div key={index} className="oloklhrwmena-item">
              <div className="oloklhrwmena-date-container">
                <div className="oloklhrwmena-date-block">
                  {contract.date.replace(" ", "\n")}
                </div>
              </div>
              <div className="oloklhrwmena-content">
                <p>
                  Όνομα Γονέα: <span className="oloklhrwmena-nanny-name">{contract.name}</span>
                </p>
                <p >
                  Κατάσταση: {contract.status}
                  {contract.approved ? (
                    <span className="approved-icon">✔</span>
                  ) : (
                    <span className="no-approved-icon">✖</span>
                  )}
                </p>
              </div>
              <button
                className="oloklhrwmena-action"
                onClick={() => openPopup(contract.name)}
              >
                <span className="envelope-icon">✉️</span> Στείλτε μήνυμα
              </button>

            </div>
          ))}
        </div>

        {showPopup && (
          <div className="oloklhrwmena-popup-overlay">
            <div className="oloklhrwmena-popup-content">
              <h2>Αποστολή Μηνύματος</h2>
              <p>Προς: {selectedNanny}</p>
              <textarea
                placeholder="Γράψτε το μήνυμά σας εδώ..."
                className="oloklhrwmena-popup-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
              ></textarea>
              <div className="char-counter">{message.length}/1000</div>
              <div className="oloklhrwmena-popup-buttons">
                <button className="oloklhrwmena-cancel-btn" onClick={closePopup}>
                  Ακύρωση
                </button>
                <button className="oloklhrwmena-send-btn" onClick={sendMessage}>
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

        <p className="oloklhrwmena-no-more">
          Δεν υπάρχουν άλλα ολοκληρωμένα ιδιωτικά συμφωνητικά
        </p>
      </div>
    </div>
  );
}
