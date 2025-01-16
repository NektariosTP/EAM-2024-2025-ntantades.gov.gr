import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Προσθήκη πλοήγησης
import "./ApodoxhPlhrwmhs_Arxikh_Container.css";

function ApodoxhPlhrwmhs_Arxikh_Container() {
    const [isChecked, setIsChecked] = useState(false);

    // Διαχείριση αλλαγής στο checkbox
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleMain = () => {
        window.location.href = `/`;
    };

    const paymentDetails = JSON.parse(localStorage.getItem("currentPayment_ntanta")) || {};

     // State για προσεχείς πληρωμές
      const [upcomingPayments, setUpcomingPayments] = useState(() => {
        const savedPayments = JSON.parse(localStorage.getItem("upcomingPayments_ntanta")) || [];
        return savedPayments;
      });

    useEffect(() => {
        localStorage.setItem("upcomingPayments_ntanta", JSON.stringify(upcomingPayments));
      }, [upcomingPayments]);

    const handleConfirmPayment = () => {
        const pendingPayments = JSON.parse(localStorage.getItem("pendingPayments_ntanta")) || [];
        const upcomingPayments = JSON.parse(localStorage.getItem("upcomingPayments_ntanta")) || [];
        const completedPayments = JSON.parse(localStorage.getItem("completedPayments_ntanta")) || [];
    
        // Remove the payment from pending and upcoming
        const updatedPendingPayments = pendingPayments.filter(
            (payment) =>
                payment.date !== paymentDetails.date || payment.name !== paymentDetails.parentName
        );
    
        const updatedUpcomingPayments = upcomingPayments.filter(
            (payment) =>
                payment.date === paymentDetails.date && payment.name === paymentDetails.parentName
        );
    
        // Add the payment to completed
        const updatedCompletedPayments = [
            ...completedPayments,
            { ...paymentDetails, status: "Ολοκληρωμένη & Επιβεβαιωμένη" },
        ];
        localStorage.removeItem("upcomingPayments_ntanta", JSON.stringify(updatedUpcomingPayments));
    
        // Update local storage
        localStorage.setItem("pendingPayments_ntanta", JSON.stringify(updatedPendingPayments));
        localStorage.setItem("completedPayments_ntanta", JSON.stringify(updatedCompletedPayments));
    
        // Redirect to confirmation page
        window.location.href = `/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs/Epivevaiwsh`;
    };
    

    return (
        <div className="container_ApodoxhPlhrwmhs">
            <h1 className="title_ApodoxhPlhrwmhs">Αποδοχή Πληρωμής</h1>

            <p className="info-text_ApodoxhPlhrwmhs">
                Η επόμενη πληρωμή είναι προγραμματισμένη να πραγματοποιηθεί μεταξύ 
                <strong> 13/6/24 </strong> και <strong> 20/6/24</strong>.  Παρακαλούμε σημειώστε ότι η αποδοχή της πληρωμής μέσω της παραλαβής του 
ψηφιακού voucher θα είναι διαθέσιμη προς ολοκλήρωση μετά την έναρξη αυτής της περιόδου. 
Σας ευχαριστούμε για την κατανόηση! <a href="#" className="link" onClick={handleMain}>Πίσω στην αρχική σελίδα.</a>
            </p>

            <h2 className="form-title_ApodoxhPlhrwmhs">Συνεργασία σε Εξέλιξη</h2>

            <form className="payment-form_ApodoxhPlhrwmhs">
                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Συνεργαζόμενος Γονέας</label>
                    <input type="text" value={paymentDetails.name} readOnly />
                </div>

                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Περίοδος Εργασίας</label>
                    <input type="text" value={paymentDetails.period} readOnly />
                </div>

                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>Αξία Voucher</label>
                    <input type="text" value={paymentDetails.amount} readOnly />
                </div>

                <div className="form-group_ApodoxhPlhrwmhs">
                    <label>IBAN Κατάθεσης</label>
                    <input type="text" value="GR01010101010101010101010101010" readOnly />
                </div>

                <h3 className="certification-title">Πιστοποίηση ολοκλήρωσης μηνιαίας εργασίας</h3>
                <div className="checkbox-section_ApodoxhPlhrwmhs">
                    <input
                        type="checkbox"
                        id="confirm"
                        className="checkbox-large"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="confirm" className="checkbox-label">
                        (*) Επιβεβαιώνω ότι τα παραπάνω στοιχεία είναι ορθά, καθώς και ότι 
                            αποδέχομαι τη λήψη του ψηφιακού voucher για την ολοκλήρωση των 
                            συμφωνημένων υπηρεσιών μου
                    </label>
                </div>
            </form>

            <div className="button-section_ApodoxhPlhrwmhs">
                <button className="cancel-btn" onClick={() => window.location.href = `/Ntantades/Profil`}>Ακύρωση</button>
                <button
                    className={`next-btn ${!isChecked ? "disabled-btn" : ""}`}
                    disabled={!isChecked}
                    onClick={handleConfirmPayment} // Κλήση της πλοήγησης
                >
                    Επιβεβαίωση Πληρωμής
                </button>
            </div>
        </div>
    );
}

export default ApodoxhPlhrwmhs_Arxikh_Container;
