import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HeaderGoneas.css";

function Header() {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    // Dropdown toggle
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Close dropdown when mouse leaves
    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    // Logout function
    const onLogout = () => {
        localStorage.setItem('isParentLoggedIn', JSON.stringify(false)); // Update local storage
        navigate('/'); // Navigate to main
        window.location.reload();
    };

    return (
        <header className="header">
            <img src="/gov_logo.png" alt="Logo" className="logo"
            onClick={() => window.open("https://www.gov.gr", "_blank")}
            style={{ cursor: "pointer" }} />
            <h1 className="title">Πρόγραμμα "Νταντάδες της Γειτονιάς"</h1>
            <div className="user-menu">
                <div className="user-info">
                    <div className="user-icon">
                        <img src="/user_icon.jpg" alt="User Icon" className="icon-image" />
                    </div>
                    <div className="user-text">
                        <div>Γονέας</div>
                    </div>
                    <div className="menu">
                        <span className="menu-icon" onClick={toggleDropdown}>☰</span>
                    </div>
                    {showDropdown && (
                        <div className="menu-options" onMouseLeave={handleMouseLeave}>
                            <div className="menu-item" onClick={() => navigate('/Goneis/Profil')}>Το προφίλ μου</div>
                            <div className="menu-item" onClick={onLogout}>Αποσύνδεση</div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
