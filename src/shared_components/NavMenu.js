import React from "react";
import "./NavMenu.css";

function NavMenu() {
    return (
        <div className="nav-menu">
            <div className="menu-column">
                <h3>Γονείς</h3>
                <ul>
                    <li>Προϋποθέσεις Συμμετοχής</li>
                    <li>Αναζήτηση Νταντάδων</li>
                    <li>Πληρωμή Νταντάς</li>
                    <li>Επεξεργασία Συνεργασίας</li>
                    <li>Ιστορικό Αιτήσεων</li>
                </ul>
            </div>
            <div className="menu-column">
                <h3>Νταντάδες</h3>
                <ul>
                    <li>Προϋποθέσεις Συμμετοχής</li>
                    <li>Εγγραφή στο Μητρώο</li>
                    <li>Δημιουργία Αγγελίας</li>
                    <li>Ραντεβού με Γονείς</li>
                    <li>Αποδοχή Πληρωμής</li>
                    <li>Ιστορικό Αιτήσεων</li>
                    <li>Αξιολόγηση Προφίλ</li>
                </ul>
            </div>
            <div className="menu-column">
                <h3>Βοήθεια</h3>
                <ul>
                    <li>Τι είναι το πρόγραμμα;</li>
                    <li>Οδηγίες</li>
                    <li>FAQ Γονέων</li>
                    <li>FAQ Νταντάδων</li>
                </ul>
            </div>
            <div className="menu-column">
                <h3>Επικοινωνία</h3>
                <ul>
                    <li>Τηλέφωνο: 210 325 8080/8090</li>
                    <li>Email: ntantades@yeka.gr</li>
                    <li>Σταδίου 29, Αθήνα 105 59</li>
                    <li className="map-placeholder">Χάρτης</li>
                </ul>
            </div>
        </div>
    );
}

export default NavMenu;
