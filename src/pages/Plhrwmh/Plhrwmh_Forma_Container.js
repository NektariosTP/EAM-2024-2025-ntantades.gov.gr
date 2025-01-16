import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Προσθήκη πλοήγησης
import "./Plhrwmh_Forma_Container.css";

function Plhrwmh_Forma_Container() {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate(); // Εργαλείο πλοήγησης

    // Φόρτωση κατάστασης από το localStorage κατά την αρχική φόρτωση
    useEffect(() => {
        const savedState = localStorage.getItem("paymentFormCheckbox");
        if (savedState !== null) {
            setIsChecked(JSON.parse(savedState));
        }
    }, []);

    // Διαχείριση αλλαγής στο checkbox
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Πλοήγηση στη σελίδα Voucher
    const handleVoucherActivation = () => {
        window.location.href = `/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws_Voucher`;
    };

    // Πλοήγηση στην αρχική
    const handleMain = () => {
        window.location.href = "/";
    };

    // Αποθήκευση της κατάστασης
    const handleSave = () => {
        localStorage.setItem("paymentFormCheckbox", JSON.stringify(isChecked));
        window.location.href = "/Goneis/Profil";
    };

    // Διαγραφή της κατάστασης
    const handleCancel = () => {
        localStorage.removeItem("paymentFormCheckbox");
        setIsChecked(false); // Καθαρισμός κατάστασης
        window.location.href = "/Goneis/Profil";
    };

    return (
        <div className="container_ApodoxhPlhrwmhs">
            <h1 className="title_ApodoxhPlhrwmhs">Πληρωμή Νταντάς</h1>

            <p className="info-text_ApodoxhPlhrwmhs">
                Η επόμενη πληρωμή είναι προγραμματισμένη να πραγματοποιηθεί μεταξύ 
                <strong> 13/6/24 </strong> και <strong> 20/6/24</strong>. Παρακαλούμε σημειώστε ότι η πληρωμή 
                της/του επαγγελματία θα είναι διαθέσιμη προς ολοκλήρωση μετά την έναρξη αυτής της περιόδου. 
                Σας ευχαριστούμε για την κατανόηση! <a href="#" className="link" onClick={handleMain}>Πίσω στην αρχική σελίδα.</a>
            </p>

            <h2 className="form-title_ApodoxhPlhrwmhs">Φόρμα Μηνιαίας Πληρωμής</h2>

            <form className="payment-form_ApodoxhPlhrwmhs">
                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Ονοματεπώνυμο Νταντάς</label>
                    <input type="text" value="Νικόλαος Λάλης" readOnly />
                </div>

                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Ημερομηνία έναρξης περιόδου πληρωμής</label>
                    <input type="text" value="13/5/24" readOnly />
                </div>

                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Ημερομηνία λήξης περιόδου πληρωμής</label>
                    <input type="text" value="13/6/24" readOnly />
                </div>

                <h3 className="certification-title">Πιστοποίηση ολοκλήρωσης μηνιαίας εργασίας</h3>
                <div className="checkbox-section">
                    <input
                        type="checkbox"
                        id="confirm"
                        className="checkbox-large"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="confirm" className="checkbox-label">
                        (*) Επιβεβαιώνω ότι τα παραπάνω στοιχεία είναι ορθά και ότι τόσο εγώ όσο και η οικογένειά μου
                        λάβαμε την φροντίδα του επαγγελματία εντός της καθορισμένης χρονικής περιόδου, σύμφωνα 
                        με τους όρους της συμφωνίας.
                    </label>
                </div>
            </form>

            <div className="button-section-forma">
                <button className="cancel-btn-forma" onClick={handleCancel}>Ακύρωση</button>
                <button className="save-btn-forma" onClick={handleSave}>Προσωρινή Αποθήκευση</button>
                <button
                    className={`next-btn-forma ${!isChecked ? "disabled-btn" : ""}`}
                    disabled={!isChecked}
                    onClick={handleVoucherActivation}
                >
                    Συνέχεια στην ενεργοποίηση Voucher
                </button>
            </div>
        </div>
    );
}

export default Plhrwmh_Forma_Container;
