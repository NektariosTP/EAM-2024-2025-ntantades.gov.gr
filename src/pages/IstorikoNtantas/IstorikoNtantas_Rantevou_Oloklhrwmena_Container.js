import React, { useState } from "react";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";
import "../IstorikoGonewn/IstorikoGonewn_Rantevou_Prosexws_Container.css";

export default function IstorikoNtantas_Rantevou_Oloklhrwmena_Container() {
  const initialAppointments = [
    {
      date: "13/05/2024",
      status: "Ολοκληρωμένο",
      nannyName: "Χρήστος Τζαθάκης",
      type: "Διαδικτυακό",
      time: "7:00 μμ",
    },
    {
      date: "09/05/2024",
      status: "Ολοκληρωμένο",
      nannyName: "Μαρία Λυκούργου",
      type: "Διαδικτυακό",
      time: "7:00 μμ",
    },
  ];

  const [sortOrder, setSortOrder] = useState("asc");
  const [showDropdown, setShowDropdown] = useState(false);
    const [filterType, setFilterType] = useState("Όλα");
    const [currentFilter, setCurrentFilter] = useState("Ημερομηνία(Φθίνουσα)");
  const [filteredAppointments, setFilteredAppointments] =
    useState(initialAppointments);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const appointmentsPerPage = 5;

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const changeSortOrder = (order) => {
    setSortOrder(order);
    setCurrentFilter(order === "asc" ? "Ημερομηνία(Αύξουσα)" : "Ημερομηνία(Φθίνουσα)");
    setShowDropdown(false);
  };

   // Συνάρτηση για εμφάνιση όλων των ραντεβού
const showAllAppointments = () => {
  setFilteredAppointments(initialAppointments); // Εμφάνιση όλων των ραντεβού
  setCurrentFilter("Όλα τα Προσεχώς Ραντεβού");
  setShowDropdown(false);
};

// Συνάρτηση για φιλτράρισμα διαδικτυακών ραντεβού
const filterDiadiktyaka = () => {
  const diadiktyakaRantevou = initialAppointments.filter((rantevou) => rantevou.type === "Διαδικτυακό");
  setFilteredAppointments(diadiktyakaRantevou);
  setCurrentFilter("Διαδικτυακά Ραντεβού");
  setShowDropdown(false);
};

// Συνάρτηση για φιλτράρισμα δια ζώσης ραντεβού
const filterDiaZwshs = () => {
  const diaZwshsRantevou = initialAppointments.filter((rantevou) => rantevou.type === "Δια ζώσης");
  setFilteredAppointments(diaZwshsRantevou);
  setCurrentFilter("Δια ζώσης Ραντεβού");
  setShowDropdown(false);
};

  const sortedAppointments = [...filteredAppointments].sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = sortedAppointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );
  const totalPages = Math.ceil(sortedAppointments.length / appointmentsPerPage);

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

  return (
    <div className="rantevou-layout">
      <SidebarMenu_Ntanta />
      <div className="rantevou-container1">
        <h1 className="rantevou-title">Ραντεβού με Γονείς</h1>
        <h2 className="rantevou-subtitle">Ολοκληρωμένα Ραντεβού</h2>

        <IstorikoGonewn_Anazhthsh
          messages={initialAppointments}
          setFilteredMessages={setFilteredAppointments}
        />

        <div className="rantevou-sort-dropdown-container">
          <div
            className="rantevou-sort-dropdown-button"
            onClick={toggleDropdown}
          >
            {currentFilter}
            <span className="dropdown-icon">☰</span>
          </div>
          {showDropdown && (
            <div className="rantevou-sort-dropdown-menu">
              <div
                onClick={() => changeSortOrder("asc")}
                className="rantevou-dropdown-item"
              >
                Ημερομηνία(Αύξουσα)
              </div>
              <div
                onClick={() => changeSortOrder("desc")}
                className="rantevou-dropdown-item"
              >
                Ημερομηνία(Φθίνουσα)
              </div>
              <div
        onClick={filterDiadiktyaka}
        className="rantevou-dropdown-item"
      >
        Διαδικτυακά Ραντεβού
      </div>
      <div
        onClick={filterDiaZwshs}
        className="rantevou-dropdown-item"
      >
        Δια ζώσης Ραντεβού
      </div>
      <div
        onClick={showAllAppointments}
        className="rantevou-dropdown-item"
      >
        Όλα τα Ολοκληρωμένα Ραντεβού
      </div>
            </div>
          )}
        </div>
        

        <div className="rantevou-list">
          {currentAppointments.map((appointment, index) => (
            <div key={index} className="rantevou-item">
              <div className="rantevou-date-container">
                <div className="rantevou-date-block">{appointment.date}</div>
              </div>
              <div className="rantevou-content">
              <p className="normal-text">
                Ραντεβού: {appointment.type}
                {appointment.type === "Διαδικτυακό" && (
                    <a
                        href="https://zoom.us/j/1234567890?pwd=abcdef123456"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="zoom-link"
                    >
                        , Zoom link
                    </a>
                )}
                {appointment.location && (
                    <a
                        href={`https://www.google.com/maps?q=${encodeURIComponent(
                            appointment.location
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-link"
                    >
                        , 📍 {appointment.location}
                    </a>
                )}
            </p>
                <p className="normal-text">
                  Γονέας:{" "}
                  <span className="rantevou-nanny-name">
                    {appointment.nannyName}
                  </span>
                </p>
                <p className="normal-text">
                  Ημερομηνία & Ώρα: {appointment.date}, {appointment.time}
                </p>
                <p className="normal-text">Κατάσταση: {appointment.status} <span className="approved-icon">✔</span></p>
              </div>
              <button
                className="rantevou-action"
                onClick={() => openPopup(appointment.nannyName)}
              >
                <span className="envelope-icon">✉️</span> Στείλτε μήνυμα
              </button>
            </div>
          ))}
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-container">
              <h2 className="popup-title">Αποστολή Μηνύματος</h2>
              <p className="popup-subtitle">Προς: {selectedNanny}</p>
              <textarea
                placeholder="Γράψτε το μήνυμά σας εδώ..."
                className="popup-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
              ></textarea>
              <div className="char-counter">{message.length}/1000</div>
              <div className="popup-buttons">
                <button className="popup-cancel-btn" onClick={closePopup}>
                  Ακύρωση
                </button>
                <button className="popup-send-btn" onClick={sendMessage}>
                  Αποστολή
                </button>
              </div>
            </div>
          </div>
        )}

        {showSuccessPopup && (
          <div className="rantevou-success-popup">
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

        <p className="oloklhrwmena-no-more">
          Δεν υπάρχουν άλλα ολοκληρωμένα ραντεβού
        </p>
      </div>
    </div>
  );
}
