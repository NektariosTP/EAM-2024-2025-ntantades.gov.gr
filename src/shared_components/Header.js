import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const [showPopup, setShowPopup] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const togglePopup = () => setShowPopup(!showPopup);

    return (
        <header className="header">
            <img src="/gov_logo.png" alt="Logo" className="logo" />
            <h1 className="title">Πρόγραμμα "Νταντάδες της Γειτονιάς"</h1>
            <h3 className="login-text" onClick={togglePopup}>Σύνδεση / Εγγραφή</h3>

            {showPopup && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={togglePopup}>×</button>
                        <div className="popup-header">
                            <button
                                className={`popup-tab ${isLogin ? "active" : ""}`}
                                onClick={() => setIsLogin(true)}
                            >
                                Σύνδεση
                            </button>
                            <button
                                className={`popup-tab ${!isLogin ? "active" : ""}`}
                                onClick={() => setIsLogin(false)}
                            >
                                Εγγραφή
                            </button>
                        </div>
                        {isLogin ? (
                            <div className="govgr-card govgr-card--border govgr-card--border-light" style={{ height: "100%" }}>
                                <div className="govgr-card__body">
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
                                    <div className="govgr-card__action" style={{ justifyContent: "center" }}>
                                        <button
                                            className="govgr-btn govgr-btn-primary govgr-print-hidden"
                                            style={{ maxWidth: "fit-content" }}
                                        >
                                            Σύνδεση <br /> (Κωδικοί Taxisnet)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="signup-options">
                                <button onClick={() => navigate("/Goneas/Eggrafi")}>
                                    Εγγραφή ως Γονέας
                                </button>
                                <button onClick={() => navigate("/Ntantades/Eggrafi")}>
                                    Εγγραφή ως Νταντά
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
