import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
    const [showParentsMenu, setShowParentsMenu] = useState(false);
    const [showNanniesMenu, setShowNanniesMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="menu-item">Αρχική</div>

            {/* ΓΟΝΕΙΣ Dropdown */}
            <div 
                className="menu-item dropdown" 
                onMouseEnter={() => setShowParentsMenu(true)}
                onMouseLeave={() => setShowParentsMenu(false)}
            >
                Γονείς
                {showParentsMenu && (
                    <div className="dropdown-content">
                        <div>Προϋποθέσεις Συμμετοχής</div>
                        <div>Αναζήτηση Νταντάδων</div>
                        <div>Πληρωμή Νταντάς</div>
                        <div>Επεξεργασία Συμφωνίας</div>
                        <div>Ιστορικό Αιτήσεων</div>
                    </div>
                )}
            </div>

            {/* ΝΤΑΝΤΑΔΕΣ Dropdown */}
            <div 
                className="menu-item dropdown" 
                onMouseEnter={() => setShowNanniesMenu(true)}
                onMouseLeave={() => setShowNanniesMenu(false)}
            >
                Νταντάδες
                {showNanniesMenu && (
                    <div className="dropdown-content">
                        <div>Προϋποθέσεις Συμμετοχής</div>
                        <div>Εγγραφή στο Μητρώο</div>
                        <div>Δημιουργία Αγγελίας</div>
                        <div>Ραντεβού με Γονείς</div>
                        <div>Αποδοχή Πληρωμής</div>
                        <div>Ιστορικό Αιτήσεων</div>
                        <div>Αξιολογήσεις Προφίλ</div>
                    </div>
                )}
            </div>

            <div className="menu-item">Πληροφορίες</div>
            <div className="menu-item">Επικοινωνία</div>
        </nav>
    );
};

export default NavBar;

