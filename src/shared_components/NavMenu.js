import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavMenu.css";

function NavMenu() {
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
        <div className="nav-menu">
            <div className="menu-column">
                <h3>Γονείς</h3>
                <ul>
                    {isParentLoggedIn ? (
                        <>
                            <li onClick={() => window.location.href = "/Goneis"}>Προϋποθέσεις Συμμετοχής</li>
                            <li onClick={() => window.location.href = "/Goneis/Aggelies"}>Αναζήτηση Νταντάδων</li>
                            <li onClick={() => window.location.href = "/Goneis/Profil/Synergasies"}>Οι Συνεργασίες Μου</li>
                            <li onClick={() => window.location.href = "/istoriko/plhrwmes"}>Πληρωμή Νταντάς</li>
                            <li onClick={() => window.location.href = "/Goneis"}>Ιστορικό Αιτήσεων</li>
                        </>
                    ) : (
                        <>
                            <li onClick={() => window.location.href = "/Goneis"}>Προϋποθέσεις Συμμετοχής</li>
                            <li onClick={() => window.location.href = "/Goneis/Aggelies"}>Αναζήτηση Νταντάδων</li>
                            <li onClick={togglePopup}>Πληρωμή Νταντάς</li>
                            <li onClick={togglePopup}>Επεξεργασία Συνεργασίας</li>
                            <li onClick={togglePopup}>Ιστορικό Αιτήσεων</li>
                        </>
                    )}
                </ul>
            </div>
            <div className="menu-column">
                <h3>Νταντάδες</h3>
                <ul>
                    {isNannyLoggedIn ? (
                        <>
                            <li onClick={() => window.location.href = "/Ntantades"}>Προϋποθέσεις Συμμετοχής</li>
                            <li onClick={() => window.location.href = "/Ntantades/Eggrafi"}>Εγγραφή στο Μητρώο</li>
                            <li onClick={() => window.location.href = "/Ntantades/Dimiourgia_Aggelias"}>Δημιουργία Αγγελίας</li>
                            <li onClick={() => window.location.href = "/istorikoo/rantevou/prosexws"}>Ραντεβού με Γονείς</li>
                            <li onClick={() => window.location.href = "/istorikoo/plhrwmes/prosexws"}>Αποδοχή Πληρωμής</li>
                            <li onClick={() => window.location.href = "/istorikoo"}>Ιστορικό Αιτήσεων</li>
                            <li onClick={() => window.location.href = "/istorikoo/aksiologhseis"}>Αξιολόγηση Προφίλ</li>
                        </>
                    ) : (
                        <>
                            <li onClick={() => window.location.href = "/Ntantades"}>Προϋποθέσεις Συμμετοχής</li>
                            <li onClick={() => window.location.href = "/Ntantades/Eggrafi"}>Εγγραφή στο Μητρώο</li>
                            <li onClick={togglePopup}>Δημιουργία Αγγελίας</li>
                            <li onClick={togglePopup}>Ραντεβού με Γονείς</li>
                            <li onClick={togglePopup}>Αποδοχή Πληρωμής</li>
                            <li onClick={togglePopup}>Ιστορικό Αιτήσεων</li>
                            <li onClick={togglePopup}>Αξιολόγηση Προφίλ</li>
                        </>
                    )}
                </ul>
            </div>
            <div className="menu-column">
                <h3>Βοήθεια</h3>
                <ul>
                    <li onClick={() => window.location.href = "/Plirofories"}>Τι είναι το πρόγραμμα;</li>
                    <li>Οδηγίες</li>
                    <li>FAQ Γονέων</li>
                    <li>FAQ Νταντάδων</li>
                </ul>
            </div>
            <div className="menu-column">
                <h3>Επικοινωνία</h3>
                <ul>
                    <li onClick={() => window.location.href = "/Epikoinonia"}>Τηλέφωνο: 210 325 8080/8090</li>
                    <li onClick={() => window.location.href = "/Epikoinonia"}>Email: ntantades@yeka.gr</li>
                    <li onClick={() => window.location.href = "/Epikoinonia"}>Σταδίου 29, Αθήνα 105 59</li>
                    <li>
                        <div className="interactive-map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.34330998899446!2d23.730901538685835!3d37.98042790176907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3bad145a41%3A0x6db1fc0cbb58a00a!2sMinistry%20of%20Labor%20and%20Social%20Security!5e0!3m2!1sen!2sgr!4v1735140018054!5m2!1sen!2sgr" 
                                style={{ border: 0 }}
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade" 
                                title="Map showing the Ministry of Labor and Social Security location"
                            />
                        </div>
                    </li>
                </ul>
            </div>

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
        </div>
    );
}

export default NavMenu;
