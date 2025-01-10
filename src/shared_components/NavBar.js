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
                <a href="/Goneis" className="menu-link">Γονείς</a>
                {showParentsMenu && (
                    <div className="dropdown-content">
                        <div onClick={() => window.location.href = "/Goneis"}>Προϋποθέσεις Συμμετοχής</div>
                        <div onClick={() => window.location.href = "/Goneis/Aggelies"}>Αναζήτηση Νταντάδων</div>
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
                <a href="/Ntantades" className="menu-link">Νταντάδες</a>
                {showNanniesMenu && (
                    <div className="dropdown-content">
                        <div onClick={() => window.location.href = "/Ntantades"}>Προϋποθέσεις Συμμετοχής</div>
                        <div onClick={() => window.location.href = "/Ntantades/Eggrafi"}>Εγγραφή στο Μητρώο</div>
                        <div onClick={() => window.location.href = "/nannies/create-ad"}>Δημιουργία Αγγελίας</div>
                        <div onClick={() => window.location.href = "/nannies/appointments"}>Ραντεβού με Γονείς</div>
                        <div onClick={() => window.location.href = "/nannies/payments"}>Αποδοχή Πληρωμής</div>
                        <div onClick={() => window.location.href = "/nannies/history"}>Ιστορικό Αιτήσεων</div>
                        <div onClick={() => window.location.href = "/nannies/reviews"}>Αξιολογήσεις Προφίλ</div>
                    </div>
                )}
            </div>

            <a href="/Plirofories" className="menu-item">Πληροφορίες</a>
            <a href="/Epikoinonia" className="menu-item">Επικοινωνία</a>
        </nav>
    );
};

export default NavBar;
