import React, { useState,useEffect } from "react";
import "../IstorikoGonewn/IstorikoGonewn_Aksiologhseis_Container.css";
import SidebarMenu_Ntanta from "./IstorikoNtantas_Menu";
import IstorikoGonewn_Anazhthsh from "../IstorikoGonewn/IstorikoGonewn_Anazhthsh";

export default function IstorikoNtantas_Aksiologhseis_Container() {
    const getInitialReviews = () => {
        const savedReviews = localStorage.getItem("reviews");
        return savedReviews
            ? JSON.parse(savedReviews)
            : [
                  {
                      id: 1,
                      date: "2/5/2024",
                      name: "Χρήστος Μπίκος",
                      rating: 4.5,
                      comment: "Εξαιρετική συνεργασία, πολύ έμπειρος με τα παιδιά",
                      photo: "Φωτογραφία Νταντάς",
                  },
                  {
                      id: 2,
                      date: "5/11/2023",
                      name: "Μαρία Ανδρέου",
                      rating: 4,
                      comment: "-",
                      photo: "Φωτογραφία Νταντάς",
                  },

                  {
                    id: 3,
                    date: "6/9/2023",
                    name: "Μαρία Παπαδοπούλου",
                    rating: 4,
                    comment: "-",
                    photo: "Φωτογραφία Νταντάς",
                },

                {
                    id: 4,
                    date: "12/6/2023",
                    name: "Ανδρέας Ανδρέου",
                    rating: 2,
                    comment: "-",
                    photo: "Φωτογραφία Νταντάς",
                },
                {
                    id: 5,
                    date: "12/4/2023",
                    name: "Ανδρέας Σάββας",
                    rating: 4,
                    comment: "-",
                    photo: "Φωτογραφία Νταντάς",
                },
              ];
    };

    const [reviews, setReviews] = useState(getInitialReviews());

    const [sortOrder, setSortOrder] = useState("desc");
    const [sortByRating, setSortByRating] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredReviews, setFilteredReviews] = useState(reviews);    
    const [currentFilter, setCurrentFilter] = useState("Ημερομηνία(Φθίνουσα)");
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;

     useEffect(() => {
        localStorage.setItem("reviews_ntanta", JSON.stringify(reviews));
        setFilteredReviews(reviews); // Ενημέρωση φιλτραρισμένων αξιολογήσεων
    }, [reviews]);

    const sortedReviews = [...filteredReviews].sort((a, b) => {
        if (sortByRating === "high") {
            return b.rating - a.rating;
        }
        if (sortByRating === "low") {
            return a.rating - b.rating;
        }

        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const changeSortOrder = (order) => {
        setSortOrder(order);
        setSortByRating(null);
        setCurrentFilter(order === "asc" ? "Ημερομηνία(Αύξουσα)" : "Ημερομηνία(Φθίνουσα)");
        setShowDropdown(false);
    };

    const sortByHighRating = () => {
        setSortByRating("high");
        setCurrentFilter("Υψηλότερες Αξιολογήσεις");
        setShowDropdown(false);
    };

    const sortByLowRating = () => {
        setSortByRating("low");
        setCurrentFilter("Χαμηλότερες Αξιολογήσεις");
        setShowDropdown(false);
    };
    
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const lastPage = () => setCurrentPage(totalPages);

    return (
        <div className="aksiologhseis-layout">
            <SidebarMenu_Ntanta />
            <div className="aksiologhseis-container">
                <h1 className="aksiologhseis-title">Αξιολογήσεις</h1>
                <IstorikoGonewn_Anazhthsh
                    messages={reviews}
                    setFilteredMessages={setFilteredReviews}
                />
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
                            <div onClick={sortByHighRating} className="dropdown-item">
                                Υψηλότερες Αξιολογήσεις
                            </div>
                            <div onClick={sortByLowRating} className="dropdown-item">
                                Χαμηλότερες Αξιολογήσεις
                            </div>
                        </div>
                    )}
                </div>


                {/* Λίστα Αξιολογήσεων */}
                <div className="reviews-list">
                    {currentReviews.map((review) => (
                        <div key={review.id} className="review-item">
                            <div className="review-date-block">
                            {review.date.replace(' ', '\n')}
                            </div>
                            <div className="review-content">
                                <p>
                                    <b>Όνομα Γονέα:</b>{" "}
                                    <span className="review-name">{review.name}</span>
                                </p>
                                <p><b>Βαθμολογία:</b> {review.rating}/5</p>
                                <p><b>Σχόλιο:</b> {review.comment}</p>
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