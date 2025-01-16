import React, { useState, useEffect } from "react";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";
import "../IstorikoGonewn/IstorikoGonewn_Rantevou_Prosexws_Container.css";

export default function IstorikoNtantas_Rantevou_Akyrwmena_Container() {
  const initialAppointments = [
    {
      date: "11/05/2024",
      status: "Ακυρωμένο",
      nannyName: "Έλενα Ζήση",
      type: "Διαδικτυακό",
      time: "7:00 μμ",
      location: "",
    },
  ];

  const [sortOrder, setSortOrder] = useState("asc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("Ημερομηνία(Φθίνουσα)");
  // Συνάρτηση για αφαίρεση διπλότυπων
  const removeDuplicates = (appointments) => {
    return appointments.reduce((acc, current) => {
      const exists = acc.find(
        (item) =>
          item.date === current.date &&
          item.nannyName === current.nannyName &&
          item.type === current.type
      );
      if (!exists) acc.push(current);
      return acc;
    }, []);
  };
  
  // Αρχικό state με αφαίρεση διπλότυπων
  const [allAppointments, setAllAppointments] = useState(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("canceledAppointments_ntanta"));

    if (savedAppointments && savedAppointments.length > 0) {
      const uniqueAppointments = removeDuplicates(savedAppointments);
      localStorage.setItem("canceledAppointments_ntanta", JSON.stringify(uniqueAppointments));
      return uniqueAppointments.sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return dateB - dateA; // Φθίνουσα ταξινόμηση
      });
    } else {
      const uniqueInitialAppointments = removeDuplicates(initialAppointments);
      localStorage.setItem("canceledAppointments_ntanta", JSON.stringify(uniqueInitialAppointments));
      return uniqueInitialAppointments.sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return dateB - dateA; // Φθίνουσα ταξινόμηση
      });
    }
  });

  const [filteredAppointments, setFilteredAppointments] = useState(allAppointments);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const appointmentsPerPage = 5;

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Συνάρτηση για ταξινόμηση κατά ημερομηνία
const changeSortOrder = (order) => {
  setSortOrder(order);
  const sorted = [...allAppointments].sort((a, b) => {
      const dateA = new Date(a.date.split("/").reverse().join("-"));
      const dateB = new Date(b.date.split("/").reverse().join("-"));
      return order === "asc" ? dateA - dateB : dateB - dateA;
  });
  setFilteredAppointments(sorted);
  setCurrentFilter(order === "asc" ? "Ημερομηνία (Αύξουσα)" : "Ημερομηνία (Φθίνουσα)");
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

  const [canceledAppointments, setCanceledAppointments] = useState(
    JSON.parse(localStorage.getItem("canceledAppointments_ntanta")) || []
);

useEffect(() => {
  localStorage.setItem("canceledAppointments_ntanta", JSON.stringify(canceledAppointments));
  localStorage.setItem("filteredAppointments_ntanta", JSON.stringify(filteredAppointments));
}, [canceledAppointments, filteredAppointments]);



 // Συνάρτηση για εμφάνιση όλων των ραντεβού
 const showAllAppointments = () => {
  setFilteredAppointments(allAppointments); // Εμφάνιση όλων των ραντεβού
  changeSortOrder("desc");
  setCurrentFilter("Όλα τα Ακυρωμένα Ραντεβού");
  setShowDropdown(false);
};

const filterDiadiktyaka = () => {
  const diadiktyakaRantevou = allAppointments
    .filter((rantevou) => rantevou.type === "Διαδικτυακό")
    .sort((a, b) => {
      const dateA = new Date(a.date.split("/").reverse().join("-"));
      const dateB = new Date(b.date.split("/").reverse().join("-"));
      return dateB - dateA; // Φθίνουσα ταξινόμηση
    });
  setFilteredAppointments(diadiktyakaRantevou);
  setCurrentFilter("Διαδικτυακά Ραντεβού");
  setShowDropdown(false);
};




// Συνάρτηση για φιλτράρισμα δια ζώσης ραντεβού
const filterDiaZwshs = () => {
  const diaZwshsRantevou = allAppointments.filter((rantevou) => rantevou.type === "Δια ζώσης");
  setFilteredAppointments(diaZwshsRantevou);
  setCurrentFilter("Δια ζώσης Ραντεβού");
  setShowDropdown(false);
};

  return (
    <div className="rantevou-layout">
      <SidebarMenu_Ntanta />
      <div className="rantevou-container1">
        <h1 className="rantevou-title">Ραντεβού με Γονείς</h1>
        <h2 className="rantevou-subtitle">Ακυρωμένα Ραντεβού</h2>

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
                Ημερομηνία (Αύξουσα)
              </div>
              <div
                onClick={() => changeSortOrder("desc")}
                className="rantevou-dropdown-item"
              >
                Ημερομηνία (Φθίνουσα)
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
        Όλα τα Ακυρωμένα Ραντεβού
      </div>
            </div>
          )}
        </div>

        <div className="rantevou-list">
          {filteredAppointments.map((appointment, index) => (
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
                  Γονέας: <span className="rantevou-nanny-name">{appointment.nannyName}</span>
                </p>
                <p className="normal-text">
                  Ημερομηνία & Ώρα: {appointment.date}, {appointment.time}
                </p>
                <p className="normal-text">
                  Κατάσταση: {appointment.status} <span className="cancel-icon">✘</span>
                </p>
              </div>
              <button
                  className="rantevou-action"
                  onClick={() => openPopup(appointment.nannyName)}
                >
                  <span className="envelope-icon">✉️</span> Στείλτε μήνυμα
                </button>
              <div className="rantevou-buttons">
                <button className="reschedule-button" onClick={() => window.location.href = "/Ntantades/Profil/Rantevou/Epeksergasia"}>Επαναπρογραμματισμός</button>
              </div>
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
          <span onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>{"<"}</span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              onClick={() => paginate(index + 1)}
              className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </span>
          ))}
          <span onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>{">"}</span>
        </div>

        <p className="oloklhrwmena-no-more">Δεν υπάρχουν άλλα ακυρωμένα ραντεβού</p>
      </div>
    </div>
  );
}
