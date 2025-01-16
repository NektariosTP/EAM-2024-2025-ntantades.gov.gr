import React, { useState, useEffect } from "react";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";
import "../IstorikoGonewn/IstorikoGonewn_Plhrwmes_Container.css";


export default function IstorikoNtantas_Plhrwmes_Prosexws_Container() {
  
    const initialPayments = [
    {
      date: "3/5/2024",
      period: "30/3/24 έως 30/4/24",
      amount: "500,00 ευρώ",
      status: "Σε εκκρεμότητα",
      name: "Χρήστος Μπίκος",
      waited:true,
    },
    
  ];

  // State για προσεχείς πληρωμές
  const [upcomingPayments, setUpcomingPayments] = useState(() => {
    const savedPayments = JSON.parse(localStorage.getItem("upcomingPayments_ntanta")) || initialPayments;
    return savedPayments;
  });

  // State για ολοκληρωμένες πληρωμές
  const [completedPayments, setCompletedPayments] = useState(() => {
    return JSON.parse(localStorage.getItem("completedPayments_ntanta")) || [];
  });

  const [sortOrder, setSortOrder] = useState("desc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredPayments, setFilteredPayments] = useState(upcomingPayments);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const paymentsPerPage = 5;

  useEffect(() => {
    localStorage.setItem("upcomingPayments_ntanta", JSON.stringify(upcomingPayments));
    localStorage.setItem("completedPayments_ntanta", JSON.stringify(completedPayments));
  }, [upcomingPayments, completedPayments]);


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
  };

  const handlePlhrwmh = (payment) => {
    const updatedUpcomingPayments = upcomingPayments.filter(
        (p) => p.date !== payment.date || p.name !== payment.name
    );

    // Save the current payment for confirmation
    localStorage.setItem("currentPayment_ntanta", JSON.stringify(payment));

    window.location.href = `/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs`;
};



  return (
    <div className="eidopoihseis-layout">
      <SidebarMenu_Ntanta />
      <div className="eidopoihseiscontainer">
        <h1 className="eidopoihseistitle">Πληρωμές</h1>
        <h2 className="eidopoihseissubtitle">Σε εκκρεμότητα</h2>

        <IstorikoGonewn_Anazhthsh
          messages={upcomingPayments}
          setFilteredMessages={setUpcomingPayments}
        />

        <div className="sort-dropdown-container">
          <div className="sort-dropdown-button" onClick={toggleDropdown}>
            Ημερομηνία({sortOrder === "asc" ? "Αύξουσα" : "Φθίνουσα"})
            <span className="dropdown-icon">☰</span>
          </div>
          {showDropdown && (
            <div className="sort-dropdown-menu">
              <div onClick={() => changeSortOrder("asc")} className="dropdown-item">
                Ημερομηνία(Αύξουσα)
              </div>
              <div onClick={() => changeSortOrder("desc")} className="dropdown-item">
                Ημερομηνία(Φθίνουσα)
              </div>
            </div>
          )}
        </div>

        <div className="eidopoihseislist">
        {currentPayments
        .filter(payment => payment.waited) 
        .map((payment, index) => (
            <div key={index} className="message-item">
              <div className="message-date-container1">
                <div className="message-date-block1">
                  {payment.date.replace(' ', '\n')}
                </div>
              </div>
              <div className="message-content1">
                <p className="bold-text">Όνομα Γονέα: <span className="nanny-name">{payment.name}</span></p>
                <p className="normal-text">Κατάσταση: {payment.status}<img src="/wait.png" alt="Wait Icon" className="idiotika-wait-icon" /></p>
                <p className="normal-text">Περίοδος Εργασίας: {payment.period}</p>
                <p className="normal-text">Ποσό: {payment.amount}</p>
              </div>
              <button className="message-action1" onClick={() => openPopup(payment.name)}>
                <span className="envelope-icon1">✉️</span> Στείλτε μήνυμα
              </button>
              <button className="pay-voucher-button" onClick={() => handlePlhrwmh(payment)}>
              Αποδοχή Πληρωμής<br/> και <br/> Ενεργοποίηση Voucher
              </button>
            </div>
          ))}
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Αποστολή Μηνύματος</h2>
              <p>Προς: {selectedNanny}</p>
              <textarea 
                placeholder="Γράψτε το μήνυμά σας εδώ..." 
                className="popup-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
              ></textarea>
              <div className="char-counter">{message.length}/1000</div>
              <div className="popup-buttons">
                <button className="cancel-btn-pl" onClick={closePopup}>Ακύρωση</button>
                <button className="send-btn-pl" onClick={sendMessage}>Αποστολή</button>
              </div>
            </div>
          </div>
        )}

        {showSuccessPopup && (
          <div className="success-popup">
            <p>Το μήνυμα στάλθηκε επιτυχώς!</p>
          </div>
        )}

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

        <p className="no-more-messages">Δεν υπάρχουν άλλες ολοκληρωμένες πληρωμές</p>
      </div>
    </div>
  );
}

