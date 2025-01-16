import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./IstorikoGonewn_Menu";
import IstorikoGonewn_Anazhthsh from "./IstorikoGonewn_Anazhthsh";
import "./IstorikoGonewn_AithseisEndiaferontos_Oloklhrwmenes_Container.css";

export default function IstorikoGonewn_AithseisEndiaferontos_Oloklhrwmenes_Container() {
    const navigate = useNavigate(); 
  
    const handleYpografh = () => {
        window.location.href = `/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes/ypografh_idiwtikou_symfwnhtikou`;
  };
  
  
    const initialRequests = [
    {
      id: 1,
      date: "15/05/2024",
      status: "Εγκρίθηκε",
      name: "Μαρία Λυκούργου",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
      approved: true,
      waited: false,
    },
    {
      id: 2,
      date: "14/05/2024",
      status: "Αναμονή για Απάντηση",
      name: "Δήμητρα Παππά",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
      approved: false,
      waited: true,
    },
    {
      id:3,
      date: "11/05/2024",
      status: "Απορρίφθηκε",
      name: "Δήμητρα Ιωάννου",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
      approved: false,
      waited: false,
    },

    {
      id:4,
      date: "07/05/2024",
      status: "Αναμονή για Απάντηση",
      name: "Παναγιώτης Παππάς",
      description: "Φύλαξη 1 παιδιού, μερική απασχόληση, αρχή από 1/6/2024",
      approved: false,
      waited: true,
    },
  ];

  const [sortOrder, setSortOrder] = useState("asc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [allRequests, setAllRequests] = useState(() => {
    const savedRequests = JSON.parse(localStorage.getItem("completedRequests")) || [];
    
    // Συγχώνευση των `initialRequests` με τα αποθηκευμένα δεδομένα
    const mergedRequests = [ ...savedRequests];

    // Αφαίρεση διπλότυπων αιτήσεων (με βάση το `id`)
    const uniqueRequests = mergedRequests.reduce((acc, current) => {
        if (!acc.find(item => item.id === current.id)) {
            acc.push(current);
        }
        return acc;
    }, []);

    return uniqueRequests;
});

const [filteredRequests, setFilteredRequests] = useState(allRequests);


  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const requestsPerPage = 5;

  const [currentFilter, setCurrentFilter] = useState("Ημερομηνία(Φθίνουσα)");
  const [filterbyState, setfilterbyState] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const changeSortOrder = (order) => {
    setSortOrder(order);
    setfilterbyState(false);
    setCurrentFilter(order === "asc" ? "Ημερομηνία(Αύξουσα)" : "Ημερομηνία(Φθίνουσα)");
    setShowDropdown(false);
  };

  const filterApproved = () => {
    const approvedAitiseis = allRequests.filter((request) => request.approved);
    setFilteredRequests(approvedAitiseis);
    setCurrentFilter("Εγκεκριμένες Αιτήσεις Ενδιαφέροντος");
    setShowDropdown(false);
  };

  const filterCancel= () => {
    const approvedAitiseis = allRequests.filter((request) => !request.approved && !request.waited);
    setFilteredRequests(approvedAitiseis);
    setCurrentFilter("Απορριφθέντες Αιτήσεις Ενδιαφέροντος");
    setShowDropdown(false);
  };

  const filterWaited= () => {
    const approvedAitiseis = allRequests.filter((request) => !request.approved && request.waited);
    setFilteredRequests(approvedAitiseis);
    setCurrentFilter("Απορριφθέντες Αιτήσεις Ενδιαφέροντος");
    setShowDropdown(false);
  };


  const showallRequests = () => {
    setFilteredRequests(allRequests);
    setCurrentFilter("Όλες οι Αιτήσεις Ενδιαφέροντος");
    setSortOrder("desc");
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

  const deleteRequest = (id) => {
    // Ενημέρωση κατάστασης της συγκεκριμένης αίτησης σε "Απορρίφθηκε"
    const updatedRequests = filteredRequests.map((request) =>
        request.id === id ? { ...request, status: "Απορρίφθηκε", waited: false, approved: false } : request
    );

    // Συγχώνευση με το localStorage
    const savedRequests = JSON.parse(localStorage.getItem("completedRequests")) || [];
    const updatedLocalStorage = savedRequests.map((request) =>
        request.id === id ? { ...request, status: "Απορρίφθηκε", waited: false, approved: false } : request
    );

    // Αν δεν υπάρχει η αίτηση στο localStorage, προσθέστε την
    if (!updatedLocalStorage.find((request) => request.id === id)) {
        const newRequest = updatedRequests.find((request) => request.id === id);
        updatedLocalStorage.push(newRequest);
    }

    // Αποθήκευση στο localStorage
    localStorage.setItem("completedRequests", JSON.stringify(updatedLocalStorage));

    // Ενημέρωση του state
    setFilteredRequests(updatedRequests);
};


  return (
    <div className="aitiseis-oloklhrwmenes-layout">
      <SidebarMenu />
      <div className="aitiseis-oloklhrwmenes-container">
        <h1 className="aitiseis-oloklhrwmenes-title">Αιτήσεις Ενδιαφέροντος</h1>
        <h2 className="aitiseis-oloklhrwmenes-subtitle">Ολοκληρωμένες</h2>

        <IstorikoGonewn_Anazhthsh
          messages={allRequests}
          setFilteredMessages={setFilteredRequests}
        />

        <div className="aitiseis-oloklhrwmenes-sort-dropdown-container">
          <div
            className="aitiseis-oloklhrwmenes-sort-dropdown-button"
            onClick={toggleDropdown}
          >
            {currentFilter}
            <span className="dropdown-icon">☰</span>
          </div>
          {showDropdown && (
            <div className="aitiseis-oloklhrwmenes-sort-dropdown-menu">
              <div
                onClick={() => changeSortOrder("asc")}
                className="aitiseis-oloklhrwmenes-dropdown-item"
              >
                Ημερομηνία(Αύξουσα)
              </div>
              <div
                onClick={() => changeSortOrder("desc")}
                className="aitiseis-oloklhrwmenes-dropdown-item"
              >
                Ημερομηνία(Φθίνουσα)
              </div>
              <div
                onClick={filterApproved}
                className="aitiseis-oloklhrwmenes-dropdown-item"
              >
                Εγκεκριμένες Αιτήσεις Ενδιαφέροντος
              </div>
              <div
                onClick={filterWaited}
                className="aitiseis-oloklhrwmenes-dropdown-item"
              >
                Αιτήσεις Ενδιαφέροντος σε Αναμονή
              </div>
              <div
                onClick={filterCancel}
                className="aitiseis-oloklhrwmenes-dropdown-item"
              >
                Απορριφθέντες Αιτήσεις Ενδιαφέροντος
              </div>
              <div
                onClick={showallRequests}
                className="aitiseis-oloklhrwmenes-dropdown-item"
              >
               Όλες οι Αιτήσεις Ενδιαφέροντος
              </div>
            </div>
          )}
        </div>

        <div className="aitiseis-oloklhrwmenes-list">
          {currentRequests.map((request, index) => (
            <div key={index} className="aitiseis-oloklhrwmenes-item">
              <div className="aitiseis-oloklhrwmenes-date-container">
                <div className="aitiseis-oloklhrwmenes-date-block">{request.date}</div>
              </div>
              <div className="aitiseis-oloklhrwmenes-content">
                <p className="bold-text">
                  Όνομα Νταντάς: {" "}
                  <span className="aitiseis-oloklhrwmenes-nanny-name">
                    {request.name}
                  </span>
                </p>
                <p className="normal-text">
                  Κατάσταση: {request.status} {" "}
                  {request.approved ? (
                    <span className="approved-icon">✔</span>
                    ) : request.waited ? (
                    <img src="/wait.png" alt="Wait Icon" className="wait-icon" />
                    ) : (
                    <span className="no-approved-icon">✖</span>
                    )}

                </p>
                <p className="normal-text">Συνοπτική Περιγραφή: {request.description}</p>
              </div>
              <button
                className="aitiseis-oloklhrwmenes-action"
                onClick={() => openPopup(request.name)}
              >
                <span className="envelope-icon">✉️</span> Στείλτε μήνυμα
              </button>
              <div className="aitiseis-oloklhrwmenes-buttons">
                {request.approved ? (
                    <>
                    <button className="edit-button" onClick={handleYpografh}>Υπογραφή Ιδιωτικού Συμφωνητικού</button>
                    <button className="delete-button1" onClick={() => deleteRequest(request.id)}>Διαγραφή Αίτησης </button>
                    </>
                ) : request.waited ? (
                    <>
                    <button className="edit-button">Επεξεργασία Αίτησης</button>
                    <button className="delete-button2" onClick={() => deleteRequest(request.id)}>Διαγραφή Αίτησης </button>
                    </>
                ) : null}
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
                <button
                  className="aitiseis-cancel-btn"
                  onClick={closePopup}
                >
                  Ακύρωση
                </button>
                <button
                  className="aitiseis-send-btn"
                  onClick={sendMessage}
                >
                  Αποστολή
                </button>
              </div>
            </div>
          </div>
        )}

        {showSuccessPopup && (
          <div className="aitiseis-success-popup">
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

        <p className="aitiseis-no-more">
          Δεν υπάρχουν άλλες ολοκληρωμένες αιτήσεις ενδιαφέροντος
        </p>
      </div>
    </div>
  );
}
