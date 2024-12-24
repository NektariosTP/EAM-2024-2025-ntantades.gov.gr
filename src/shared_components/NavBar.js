import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
    const [showParentsMenu, setShowParentsMenu] = useState(false);
    const [showNanniesMenu, setShowNanniesMenu] = useState(false);

    return (
        <nav className="navbar">
            <a href="/" className="menu-item">Αρχική</a>

            {/* ΓΟΝΕΙΣ Dropdown */}
            <div 
                className="menu-item dropdown" 
                onMouseEnter={() => setShowParentsMenu(true)}
                onMouseLeave={() => setShowParentsMenu(false)}
            >
                <a href="Goneis" className="menu-link">Γονείς</a>
                {showParentsMenu && (
                    <div className="dropdown-content">
                        <div onClick={() => window.location.href = "/parents/eligibility"}>Προϋποθέσεις Συμμετοχής</div>
                        <div onClick={() => window.location.href = "/parents/find-nannies"}>Αναζήτηση Νταντάδων</div>
                        <div onClick={() => window.location.href = "/parents/payments"}>Πληρωμή Νταντάς</div>
                        <div onClick={() => window.location.href = "/parents/edit-agreement"}>Επεξεργασία Συμφωνίας</div>
                        <div onClick={() => window.location.href = "/parents/history"}>Ιστορικό Αιτήσεων</div>
                    </div>
                )}
            </div>

            {/* ΝΤΑΝΤΑΔΕΣ Dropdown */}
            <div 
                className="menu-item dropdown" 
                onMouseEnter={() => setShowNanniesMenu(true)}
                onMouseLeave={() => setShowNanniesMenu(false)}
            >
                <a href="#" className="menu-link">Νταντάδες</a>
                {showNanniesMenu && (
                    <div className="dropdown-content">
                        <div onClick={() => window.location.href = "/nannies/eligibility"}>Προϋποθέσεις Συμμετοχής</div>
                        <div onClick={() => window.location.href = "/nannies/register"}>Εγγραφή στο Μητρώο</div>
                        <div onClick={() => window.location.href = "/nannies/create-ad"}>Δημιουργία Αγγελίας</div>
                        <div onClick={() => window.location.href = "/nannies/appointments"}>Ραντεβού με Γονείς</div>
                        <div onClick={() => window.location.href = "/nannies/payments"}>Αποδοχή Πληρωμής</div>
                        <div onClick={() => window.location.href = "/nannies/history"}>Ιστορικό Αιτήσεων</div>
                        <div onClick={() => window.location.href = "/nannies/reviews"}>Αξιολογήσεις Προφίλ</div>
                    </div>
                )}
            </div>

            <a href="/info" className="menu-item">Πληροφορίες</a>
            <a href="/contact" className="menu-item">Επικοινωνία</a>
        </nav>
    );
};

export default NavBar;
