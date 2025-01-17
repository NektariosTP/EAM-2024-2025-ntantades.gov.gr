import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavMenu.css";

function NavMenu() {

    const handleOdigies = () => {
        window.open("https://ntantades.gov.gr/pdf/odigies_gia_mitroo_epimelitwn.pdf", "_blank");
      };
    
      const handleFAQGoneis = () => {
        window.open("https://ntantades.gov.gr/pdf/FAQ_%CE%A9%CE%A6%CE%95%CE%9B%CE%9F%CE%A5%CE%9C%CE%95%CE%9D%CE%9F%CE%99_new_17.1.2024.pdf", "_blank");
      }
    
      const handleFAQNtantades = () =>{
        window.open("https://ntantades.gov.gr/pdf/FAQ_%CE%B5%CF%80%CE%B9%CE%BA%CE%B1%CE%B9%CF%81%CE%BF%CF%80%CE%BF%CE%B9%CE%B7%CE%BC%CE%AD%CE%BD%CE%BF_%CE%B5%CF%80%CE%B9%CE%BC%CE%B5%CE%BB%CE%B7%CF%84%CE%AD%CF%82.17.1.2024.pdf", "_blank");
      }
      
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
                            <li onClick={() => window.location.href = "/Goneis/Profil/"}>Το Προφίλ Μου</li>
                            <li onClick={() => window.location.href = "/Goneis/Profil/Synergasies"}>Οι Συνεργασίες Μου</li>
                            <li onClick={() => window.location.href = "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws"}>Πληρωμή Νταντάς</li>
                            <li onClick={() => window.location.href = "/Goneis/Profil/Istoriko_Gonea"}>Ιστορικό Αιτήσεων</li>
                        </>
                    ) : (
                        <>
                            <li onClick={() => window.location.href = "/Goneis"}>Προϋποθέσεις Συμμετοχής</li>
                            <li onClick={() => window.location.href = "/Goneis/Aggelies"}>Αναζήτηση Νταντάδων</li>
                            <li onClick={togglePopup}>Το Προφίλ Μου</li>
                            <li onClick={togglePopup}>Οι Συνεργασίες Μου</li>
                            <li onClick={togglePopup}>Πληρωμή Νταντάς</li>
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
                            <li onClick={() => window.location.href = "/Ntantades/Profil"}>Το Προφίλ Μου</li>
                            <li onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Prosexws"}>Ραντεβού με Γονείς</li>
                            <li onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs"}>Αποδοχή Πληρωμής</li>
                            <li onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta"}>Ιστορικό Αιτήσεων</li>
                            <li onClick={() => window.location.href = "/Ntantades/Profil/Istoriko_Ntanta/Aksiologhseis"}>Αξιολόγηση Προφίλ</li>
                        </>
                    ) : (
                        <>
                            <li onClick={() => window.location.href = "/Ntantades"}>Προϋποθέσεις Συμμετοχής</li>
                            <li onClick={() => window.location.href = "/Ntantades/Eggrafi"}>Εγγραφή στο Μητρώο</li>
                            <li onClick={togglePopup}>Δημιουργία Αγγελίας</li>
                            <li onClick={togglePopup}>Το Προφίλ Μου</li>
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
                    <li onClick={handleOdigies}>Οδηγίες</li>
                    <li onClick={handleFAQGoneis}>FAQ Γονέων</li>
                    <li onClick={handleFAQNtantades}>FAQ Νταντάδων</li>
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
