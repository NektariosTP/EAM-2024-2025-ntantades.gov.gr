import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./IstorikoGonewn_Menu";
import IstorikoGonewn_Anazhthsh from "./IstorikoGonewn_Anazhthsh";
import "./IstorikoGonewn_Rantevou_Prosexws_Container.css";

export default function IstorikoGonewn_Rantevou_Prosexws_Container() {
  const navigate = useNavigate();

  const initialAppointments = [
    {
      date: "15/05/2024",
      status: "Προγραμματισμένο",
      nannyName: "Χρήστος Παπαδόπουλος",
      type: "Διαδικτυακό",
      time: "5:00 μμ",
      location: "",
      approved: true,
    },
    {
      date: "19/05/2024",
      status: "Αναμονή για Επιβεβαίωση",
      nannyName: "Γεωργία Μιούλη",
      type: "Δια ζώσης",
      time: "7:00 μμ",
      location: "Χλόης 44, Ζωγράφου 15772",
      approved: false,
    },
    {
      date: "20/05/2024",
      status: "Προγραμματισμένο",
      nannyName: "Μαρία Γούλα",
      type: "Διαδικτυακό",
      time: "5:00 μμ",
      location: "",
      approved: true,
    },
    {
      date: "21/05/2024",
      status: "Αναμονή για Επιβεβαίωση",
      nannyName: "Ευαγγελία Ρίνη",
      type: "Διαδικτυακό",
      time: "6:30 μμ",
      location: "",
      approved: false,
    },
    {
        date: "25/05/2024",
        status: "Aναμονή για Επιβεβαίωση",
        nannyName: "Όλγα Στάμου",
        type: "Δια ζώσης",
        time: "5:00 μμ",
        location: " Ασκληπιού 61α, Αθήνα 106 80",
        approved: false,
      },
      {
        date: "27/05/2024",
        status: "Αναμονή για Επιβεβαίωση",
        nannyName: "Ευαγγελία Λουκά",
        type: "Διαδικτυακό",
        time: "4:30 μμ",
        location: "",
        approved: false,
      },
      {
        date: "30/05/2024",
        status: "Αναμονή για Επιβεβαίωση",
        nannyName: "Παναγιώτα Βάσου",
        type: "Διαδικτυακό",
        time: "6:30 μμ",
        location: "",
        approved: false,
      },
    
  ];

  const [sortOrder, setSortOrder] = useState("asc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("Ημερομηνία(Αύξουσα)");
  const [allAppointments, setAllAppointments] = useState(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("upcomingAppointments"));

    if (savedAppointments && savedAppointments.length > 0) {
        return savedAppointments.sort((a, b) => {
            const dateA = new Date(a.date.split("/").reverse().join("-"));
            const dateB = new Date(b.date.split("/").reverse().join("-"));
            return dateA - dateB;
        });
    } else {
        const sortedInitialAppointments = initialAppointments.sort((a, b) => {
            const dateA = new Date(a.date.split("/").reverse().join("-"));
            const dateB = new Date(b.date.split("/").reverse().join("-"));
            return dateA - dateB;
        });
        localStorage.setItem("upcomingAppointments", JSON.stringify(sortedInitialAppointments));
        return sortedInitialAppointments;
    }
});

const [filteredAppointments, setFilteredAppointments] = useState(allAppointments);

// Ενημέρωση localStorage όταν αλλάζει ο πίνακας `allAppointments`
useEffect(() => {
    localStorage.setItem("upcomingAppointments", JSON.stringify(allAppointments));
}, [allAppointments]);


// Επαναφορά ραντεβού σε περίπτωση κενής λίστας
useEffect(() => {
  if (filteredAppointments.length === 0) {
      setFilteredAppointments(initialAppointments);
  }
}, [initialAppointments]);

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
  setFilteredAppointments(allAppointments); // Εμφάνιση όλων των ραντεβού
  setCurrentFilter("Όλα τα Προσεχώς Ραντεβού");
  setShowDropdown(false);
};

// Συνάρτηση για φιλτράρισμα διαδικτυακών ραντεβού
const filterDiadiktyaka = () => {
  const diadiktyakaRantevou = allAppointments.filter((rantevou) => rantevou.type === "Διαδικτυακό");
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

// Συνάρτηση για φιλτράρισμα προγραμματισμένων ραντεβού
const filterProgrammatismena = () => {
  const programmatismenaRantevou = allAppointments.filter((rantevou) => rantevou.status === "Προγραμματισμένο");
  setFilteredAppointments(programmatismenaRantevou);
  setCurrentFilter("Κατάσταση(Προγραμματισμένα)");
  setShowDropdown(false);
};

// Συνάρτηση για φιλτράρισμα ραντεβού σε αναμονή
const filterAnamonh = () => {
  const anamonhRantevou = allAppointments.filter((rantevou) => rantevou.status === "Αναμονή για Επιβεβαίωση");
  setFilteredAppointments(anamonhRantevou);
  setCurrentFilter("Κατάσταση(Αναμονή για Επιβεβαίωση)");
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

  const [canceledAppointments, setCanceledAppointments] = useState(() => {
    const savedCanceledAppointments = JSON.parse(localStorage.getItem("canceledAppointments"));
    return savedCanceledAppointments || [];
});



  // Αποθήκευση των ακυρωμένων ραντεβού στο localStorage
  useEffect(() => {
    localStorage.setItem("canceledAppointments", JSON.stringify(canceledAppointments));
  }, [canceledAppointments]);

  const cancelAppointment = (index) => {
    // Δημιουργούμε αντίγραφο του ραντεβού που ακυρώνεται
    const canceledAppointment = {
        ...currentAppointments[index],
        status: "Ακυρωμένο",
    };

    // Ενημερώνουμε τη λίστα των ακυρωμένων ραντεβού
    setCanceledAppointments((prev) => {
        const updatedCanceledAppointments = [...prev, canceledAppointment];
        localStorage.setItem("canceledAppointments", JSON.stringify(updatedCanceledAppointments));
        return updatedCanceledAppointments;
    });

    // Ενημερώνουμε τη λίστα των προσεχών ραντεβού
    const updatedUpcomingAppointments = filteredAppointments.filter((_, i) => i !== index);
    setAllAppointments(updatedUpcomingAppointments);

    // Ενημερώνουμε τη λίστα όλων των ραντεβού στο localStorage
    const allAppointments = JSON.parse(localStorage.getItem("upcomingAppointments")) || [];
    const updatedAllAppointments = allAppointments.map((appointment) =>
        appointment.date === currentAppointments[index].date &&
        appointment.time === currentAppointments[index].time
            ? canceledAppointment
            : appointment
    );

    // Αποθηκεύουμε τη νέα λίστα στο localStorage
    localStorage.setItem("upcomingAppointments", JSON.stringify(updatedAllAppointments));

    window.location.reload();
};


  return (
    <div className="rantevou-layout">
      <SidebarMenu />
      <div className="rantevou-container1">
        <h1 className="rantevou-title">Ραντεβού με Επαγγελματίες</h1>
        <h2 className="rantevou-subtitle">Προσεχώς Ραντεβού</h2>

        <IstorikoGonewn_Anazhthsh
          messages={allAppointments}
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
        onClick={filterProgrammatismena}
        className="rantevou-dropdown-item"
      >
        Κατάσταση(Προγραμματισμένα)
      </div>
      <div
        onClick={filterAnamonh}
        className="rantevou-dropdown-item"
      >
        Κατάσταση(Αναμονή για Επιβεβαίωση)
      </div>
      <div
        onClick={showAllAppointments}
        className="rantevou-dropdown-item"
      >
        Όλα τα Προσεχώς Ραντεβού
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
                  Νταντά: <span className="rantevou-nanny-name">{appointment.nannyName}</span>
                </p>
                <p className="normal-text">
                  Ημερομηνία & Ώρα: {appointment.date}, {appointment.time}
                </p>
                <p className="normal-text">
                  Κατάσταση: {appointment.status}
                  {appointment.approved ? (
                    <span className="approved-icon">✔</span>
                  ) : (
                    <img src="/wait.png" alt="Wait Icon" className="wait-icon" />
                  )}
                </p>
              </div>
              <button
                className="rantevou-action"
                onClick={() => openPopup(appointment.nannyName)}
              >
                <span className="envelope-icon">✉️</span> Στείλτε μήνυμα
              </button>
              <div className="rantevou-buttons">
                <button className="reschedule-button" onClick={() => window.location.href = "/Goneis/Profil/Istoriko_Gonea/Rantevou_Prosexws/Epeksergasia"}>Επαναπρογραμματισμός</button>
                <button className="cancel-button" onClick={() => cancelAppointment(index)}>Ακύρωση Ραντεβού</button>
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
          Δεν υπάρχουν άλλα προσεχώς ραντεβού
        </p>

      </div>
    </div>
  );
}
