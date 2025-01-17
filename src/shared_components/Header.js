import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const [showPopup, setShowPopup] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const togglePopup = () => setShowPopup(!showPopup);

    const handleLogin = (role) => {
        let valid = true;

        if (!email.trim()) {
            setEmailError("Το email είναι υποχρεωτικό.");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!password.trim()) {
            setPasswordError("Το συνθηματικό είναι υποχρεωτικό.");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (!valid) return;

        if (role === "Γονέας") {
            localStorage.setItem("isParentLoggedIn", true);
        } else if (role === "Νταντά") {
            localStorage.setItem("isNannyLoggedIn", true);
        }
        window.location.reload();
    };

    return (
        <header className="header">
            <img src="/gov_logo.png" alt="Logo" className="logo" 
            onClick={() => window.open("https://www.gov.gr", "_blank")}
            style={{ cursor: "pointer" }}/>
            <h1 className="title">Πρόγραμμα "Νταντάδες της Γειτονιάς"</h1>
            <h3 className="login-text" onClick={togglePopup}>Σύνδεση / Εγγραφή</h3>

            {showPopup && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={togglePopup}>×</button>
                        <div className="popup-header">
                            <button
                                className={`popup-tab1 ${isLogin ? "active" : ""}`}
                                onClick={() => setIsLogin(true)}
                            >
                                Σύνδεση
                            </button>
                            <button
                                className={`popup-tab1 ${!isLogin ? "active" : ""}`}
                                onClick={() => setIsLogin(false)}
                            >
                                Εγγραφή
                            </button>
                        </div>
                        {isLogin ? (
                            <div className="login-section">
                                <div className="govgr-card__content">
                                    <img
                                        style={{
                                            maxHeight: "80px",
                                            maxWidth: "90%",
                                            display: "block",
                                            margin: "auto",
                                            textAlign: "center",
                                            objectFit: "contain",
                                        }}
                                        alt="bank logos"
                                        src="/taxisnet.png"
                                    />
                                </div>
                                Email<br/>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="login-input"
                                />
                                {emailError && <div className="error-text-log-in">{emailError}</div>}
                                <br/>Συνθηματικό<br/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="login-input"
                                />
                                {passwordError && <div className="error-text-log-in">{passwordError}</div>}
                                <div className="login-buttons">
                                    <button
                                        className="govgr-btn"
                                        onClick={() => handleLogin("Γονέας")}
                                    >
                                        Σύνδεση ως Γονέας
                                    </button>
                                    <button
                                        className="govgr-btn"
                                        onClick={() => handleLogin("Νταντά")}
                                    >
                                        Σύνδεση ως Νταντά
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="signup-options">
                                <button onClick={() => navigate("/Goneis/Eggrafi")}>Εγγραφή ως Γονέας</button>
                                <button onClick={() => navigate("/Ntantades/Eggrafi")}>Εγγραφή ως Νταντά</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
