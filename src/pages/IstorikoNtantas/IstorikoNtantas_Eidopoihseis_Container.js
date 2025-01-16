import React, { useState } from "react";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";
import "../IstorikoGonewn/IstorikoGonewn_Eidopoihseis_Container.css";

export default function IstorikoNtantas_Eidopoihseis_Container() {
  // Αρχικά μηνύματα
  const initialMessages = [
    {
      date: "11/5/2024",
      time: "12:53μμ",
      message:
        " Στάλθηκε Αίτηση Ενδιαφέροντος από τον/την γονέα Δήμητρα Ιωάννου.",
      isBold: true,
      isRead: false,
    },
    {
      date: "9/5/2024",
      time: "11:43πμ",
      message:
        "Το Ραντεβού Γνωριμίας με τον/την γονέα Δήμητρα Ιωάννου επιβεβαιώθηκε.",
      isBold: false,
      isRead: true,
    },
    {
      date: "7/5/2024",
      time: "6:17μμ",
      message:
        "Το Ραντεβού Γνωριμίας με τον/την γονέα Έλενα Ζήση επιβεβαιώθηκε.",
      isBold: false,
      isRead: true,
    },
    {
      date: "2/5/2024",
      time: "4:57μμ",
      message:
        " Η Λήξη Συνεργασίας με τον/την γονέα Χρήστο Μπίκο στάλθηκε.",
      isBold: false,
      isRead: true,
    },
    {
      date: "1/5/2024",
      time: "9:37μμ",
      message:
        "Η Ενεργοποίηση του Ψηφιακού Voucher από τον/την γονέα Χρήστο Μπίκο επιβεβαιώθηκε.",
      isBold: false,
      isRead: true,
    },
    {
      date: "29/3/2024",
      time: "11:37μμ",
      message:
        "Η Ενεργοποίηση του Ψηφιακού Voucher από τον/την γονέα Χρήστο Μπίκο επιβεβαιώθηκε.",
      isBold: false,
      isRead: true,
    },
  ];


  // States
  const [sortOrder, setSortOrder] = useState("desc");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredMessages, setFilteredMessages] = useState(initialMessages);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterUnread, setFilterUnread] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("Ημερομηνία(Φθίνουσα)");
  const messagesPerPage = 5;

  // Ταξινόμηση και φιλτράρισμα
  const sortedMessages = [...filteredMessages]
    .filter((msg) => (filterUnread ? !msg.isRead : true))
    .sort((a, b) => {
      const dateA = new Date(a.date.split("/").reverse().join("-"));
      const dateB = new Date(b.date.split("/").reverse().join("-"));
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  // Dropdown εναλλαγή
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Αλλαγή ταξινόμησης
  const changeSortOrder = (order) => {
    setSortOrder(order);
    setFilterUnread(false);
    setCurrentFilter(order === "asc" ? "Ημερομηνία(Αύξουσα)" : "Ημερομηνία(Φθίνουσα)");
    setShowDropdown(false);
  };

  // Φιλτράρισμα αδιάβαστων
  const filterUnreadMessages = () => {
    setFilterUnread(true);
    setCurrentFilter("Αδιάβαστες Ειδοποιήσεις");
    setShowDropdown(false);
  };

  // Σελιδοποίηση
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = sortedMessages.slice(indexOfFirstMessage, indexOfLastMessage);
  const totalPages = Math.ceil(sortedMessages.length / messagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const lastPage = () => setCurrentPage(totalPages);

  return (
    <div className="eidopoihseis-layout">
      <SidebarMenu_Ntanta />
      <div className="eidopoihseiscontainer">
        <h1 className="eidopoihseistitle">Ειδοποιήσεις</h1>

        {/* Αναζήτηση */}
        <IstorikoGonewn_Anazhthsh
          messages={initialMessages}
          setFilteredMessages={setFilteredMessages}
        />

        {/* Dropdown Menu */}
        <div className="sort-dropdown-container">
          <div className="sort-dropdown-button" onClick={toggleDropdown}>
            {currentFilter}
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
              <div onClick={filterUnreadMessages} className="dropdown-item">
                Αδιάβαστες Ειδοποιήσεις
              </div>
            </div>
          )}
        </div>

        {/* Λίστα μηνυμάτων */}
        <div className="eidopoihseislist">
          {currentMessages.map((msg, index) => (
            <div key={index} className="message-item-eid">
              <div className="message-date-container-eid">
                <div className="message-date-block">{msg.date.replace(' ', '\n')}</div>
                    {msg.time.split("/")[0]}
              </div>
              <div className="message-content">
                <p className={msg.isBold ? "bold-text" : "normal-text"}>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </div>
  );
}
