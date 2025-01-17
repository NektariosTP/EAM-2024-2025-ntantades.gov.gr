import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [showParentsMenu, setShowParentsMenu] = useState(false);
    const [showNanniesMenu, setShowNanniesMenu] = useState(false);


    const isParentLoggedIn = localStorage.getItem("isParentLoggedIn") === "true";
    const isNannyLoggedIn = localStorage.getItem("isNannyLoggedIn") === "true";
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
                        {isParentLoggedIn ? (
                            <>
                                <div onClick={() => window.location.href = "/Goneis"}>Προϋποθέσεις Συμμετοχής</div>
                                <div onClick={() => window.location.href = "/Goneis/Aggelies"}>Αναζήτηση Νταντάδων</div>
                                <div onClick={() => window.location.href = "/Goneis/Profil/"}>Το Προφίλ Μου</div>
                                <div onClick={() => window.location.href = "/Goneis/Profil/Synergasies"}>Οι Συνεργασίες Μου</div>
                                <div onClick={() => window.location.href = "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws"}>Πληρωμή Νταντάς</div>
                                <div onClick={() => window.location.href = "/Goneis/Profil/Istoriko_Gonea"}>Ιστορικό Αιτήσεων</div>
                            </>
                        ) : (
                            <>
                                <div onClick={() => window.location.href = "/Goneis"}>Προϋποθέσεις Συμμετοχής</div>
                                <div onClick={() => window.location.href = "/Goneis/Aggelies"}>Αναζήτηση Νταντάδων</div>
                                <div onClick={togglePopup}>Το Προφίλ Μου</div>
                                <div onClick={togglePopup}>Οι Συνεργασίες Μου</div>
                                <div onClick={togglePopup}>Πληρωμή Νταντάς</div>
                                <div onClick={togglePopup}>Ιστορικό Αιτήσεων</div>
                            </>
                        )}
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
                        {isNannyLoggedIn ? (
                            <>
                                <div onClick={() => window.location.href = "/Ntantades"}>Προϋποθέσεις Συμμετοχής</div>
                                <div onClick={() => window.location.href = "/Ntantades/Eggrafi"}>Εγγραφή στο Μητρώο</div>
                                <div onClick={() => window.location.href = "/Ntantades/Dimiourgia_Aggelias"}>Δημιουργία Αγγελίας</div>
                                <div onClick={() => window.location.href = "/Ntantades/Profil"}>Το Προφίλ Μου</div>
                                <div onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Prosexws"}>Ραντεβού με Γονείς</div>
                                <div onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs"}>Αποδοχή Πληρωμής</div>
                                <div onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta"}>Ιστορικό Αιτήσεων</div>
                                <div onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta/Aksiologhseis"}>Αξιολογήσεις Προφίλ</div>
                            </>
                        ) : (
                            <>
                                <div onClick={() => window.location.href = "/Ntantades"}>Προϋποθέσεις Συμμετοχής</div>
                                <div onClick={() => window.location.href = "/Ntantades/Eggrafi"}>Εγγραφή στο Μητρώο</div>
                                <div onClick={togglePopup}>Δημιουργία Αγγελίας</div>
                                <div onClick={togglePopup}>Το Προφίλ Μου</div>
                                <div onClick={togglePopup}>Ραντεβού με Γονείς</div>
                                <div onClick={togglePopup}>Αποδοχή Πληρωμής</div>
                                <div onClick={togglePopup}>Ιστορικό Αιτήσεων</div>
                                <div onClick={togglePopup}>Αξιολογήσεις Προφίλ</div>
                            </>
                        )}
                    </div>
                )}
            </div>

            <a href="/Plirofories" className="menu-item">Πληροφορίες</a>
            <a href="/Epikoinonia" className="menu-item">Επικοινωνία</a>

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
        </nav>
    );
};

export default NavBar;
