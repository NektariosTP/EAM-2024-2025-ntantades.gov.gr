import React, { useState } from "react";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";
import "../IstorikoGonewn/IstorikoGonewn_IdiwtikaSymfwnhtika_Ekkremothta_Container.css"

export default function IstorikoNtantas_IdiwtikaSymfwnhtika_Ekkremothta_Container() {
    const handleYpografh = () => {
        window.location.href = `/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_Ekkremothta/ypografh_idiwtikou_symfwnhtikouu`;
  };
 
    const initialPayments = [
    {
      date: "4/4/2024",
      status: "Αναμονή για Υπογραφή",
      name: "Μαρία Λυκούργου",
    },
    {
      date: "4/4/2024",
      status: "Αναμονή για Υπογραφή",
      name: "Μαρία Λυκούργου",
    },
  ];

  const [sortOrder, setSortOrder] = useState("desc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredPayments, setFilteredPayments] = useState(initialPayments);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const paymentsPerPage = 5;

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const changeSortOrder = (order) => {
    setSortOrder(order);
    setShowDropdown(false);
  };

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = sortedPayments.slice(indexOfFirstPayment, indexOfLastPayment);
  const totalPages = Math.ceil(sortedPayments.length / paymentsPerPage);

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

  const handleCancelContract = (index) => {
    // Λήψη του συμφωνητικού που ακυρώνεται
    const contractToCancel = { ...filteredPayments[index], status: "Απορρίφθηκε" };
  
    // Αφαίρεση από τη λίστα εκκρεμών
    const updatedContracts = filteredPayments.filter((_, i) => i !== index);
    setFilteredPayments(updatedContracts);
  
    // Προσθήκη στα ολοκληρωμένα
    const completedContracts = JSON.parse(localStorage.getItem("completedContracts_ntanta")) || [];
    completedContracts.push(contractToCancel);
    localStorage.setItem("completedContracts_ntanta", JSON.stringify(completedContracts));
  
    // Ενημέρωση του `localStorage` για τα εκκρεμή
    localStorage.setItem("pendingContracts_ntanta", JSON.stringify(updatedContracts));
  };
  

  return (
    <div className="idiotika-layout">
      <SidebarMenu_Ntanta />
      <div className="idiotika-container">
        <h1 className="idiotika-title">Ιδιωτικά Συμφωνητικά</h1>
        <h2 className="idiotika-subtitle">Σε εκκρεμότητα</h2>

        <IstorikoGonewn_Anazhthsh
          messages={initialPayments}
          setFilteredMessages={setFilteredPayments}
        />

        <div className="idiotika-sort-dropdown-container">
          <div className="idiotika-sort-dropdown-button" onClick={toggleDropdown}>
            Ημερομηνία({sortOrder === "asc" ? "Αύξουσα" : "Φθίνουσα"})
            <span className="dropdown-icon">☰</span>
          </div>
          {showDropdown && (
            <div className="idiotika-sort-dropdown-menu">
              <div onClick={() => changeSortOrder("asc")} className="idiotika-dropdown-item">
                Ημερομηνία(Αύξουσα)
              </div>
              <div onClick={() => changeSortOrder("desc")} className="idiotika-dropdown-item">
                Ημερομηνία(Φθίνουσα)
              </div>
            </div>
          )}
        </div>

        <div className="idiotika-list">
          {currentPayments.map((payment, index) => (
            <div key={index} className="idiotika-item">
              <div className="idiotika-date-container">
                <div className="idiotika-date-block">
                  {payment.date.replace(' ', '\n')}
                </div>
              </div>
              <div className="idiotika-contentt">
                <p className="bold-text">
                  Όνομα Γονέα: <span className="idiotika-nanny-name">{payment.name}</span>
                  </p>
                <p className="normal-text">
                  Κατάσταση: {payment.status}<img src="/wait.png" alt="Wait Icon" className="idiotika-wait-icon" />
                  </p>
              </div>
              <button className="idiotika-action" onClick={() => openPopup(payment.name)}>
                <span className="idiotika-envelope-icon">✉️</span> Στείλτε μήνυμα
              </button>
              <div className="idiotika-buttons">
                <button className="edit-button" onClick={handleYpografh}>Υπογραφή Ιδιωτικού Συμφωνητικού</button>
                <button className="cancel-button"   onClick={() => handleCancelContract(index)}>Ακύρωση Ιδιωτικού Συμφωνητικού</button>
              </div>
            </div>
          ))}
        </div>

        {showPopup && (
          <div className="idiotika-popup-overlay">
            <div className="idiotika-popup-content">
              <h2>Αποστολή Μηνύματος</h2>
              <p>Προς: {selectedNanny}</p>
              <textarea 
                placeholder="Γράψτε το μήνυμά σας εδώ..." 
                className="idiotika-popup-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
              ></textarea>
              <div className="char-counter">{message.length}/1000</div>
              <div className="idiotika-popup-buttons">
                <button className="idiotika-cancel-btn" onClick={closePopup}>Ακύρωση</button>
                <button className="idiotika-send-btn" onClick={sendMessage}>Αποστολή</button>
              </div>
            </div>
          </div>
        )}

        {showSuccessPopup && (
          <div className="idiotika-success-popup">
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

        <p className="idiotika-no-more">Δεν υπάρχουν άλλα ιδιωτικά συμφωνητικά σε εκκρεμότητα</p>
      </div>
    </div>
  );
}