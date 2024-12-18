import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img src="/gov_logo.png" alt="Logo" className="logo" />
            <h1 className = "title" > Πρόγραμμα "Νταντάδες της Γειτονιάς" </h1>
            <h3 className="login-text">Σύνδεση / Εγγραφή</h3>
        </header>
    );
}

export default Header;
