import React, {useState, useEffect} from "react";
import "./ApodoxhPlhrwmhs_Epivevaiwsh_Container.css";


export default function ApodoxhPlhrwmhs() {

  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    date: "",
    parentName: "",
  });

  // Φόρτωση πληρωμών από το localStorage
  useEffect(() => {
    const storedPayment = JSON.parse(localStorage.getItem("currentPayment_ntanta"));
    if (storedPayment) {
      setPaymentDetails({
        amount: storedPayment.amount,
        date: new Date().toLocaleDateString("el-GR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        parentName: storedPayment.name,
      });
    }
  }, []);

      const handleMain = () => {
        window.location.href = `/`;
      }

      const handleProfile = () => {
        window.location.href = `/Ntantades/Profil`;
      }
  
    return (
    <div className="apodoxh-plhrwmhs-container">
      {/* Τίτλος στο κέντρο */}
      <h1 className="apodoxh-plhrwmhs-title">
        Η Λήψη Ψηφιακού Voucher Επιβεβαιώθηκε Επιτυχώς!
        <span className="apodoxh-plhrwmhs-success-icon">✔</span>
      </h1>

        {/* Λεπτομέρειες Πληρωμής */}
        <p className="apodoxh-plhrwmhs-details-title">Λεπτομέρειες Πληρωμής:</p>
        <div className="apodoxh-plhrwmhs-details">
        <p>Ποσό Επιχορηγούμενου Voucher: {paymentDetails.amount || "N/A"}</p>
        <p>Ημερομηνία Συναλλαγής: {paymentDetails.date}</p>
        <p>Ονοματεπώνυμο Γονέα: {paymentDetails.parentName || "N/A"}</p>
      </div>

      {/* Κείμενο και πληροφορίες στην αριστερή πλευρά */}
      <div className="apodoxh-plhrwmhs-content">
        <p className="apodoxh-plhrwmhs-info-text">
          Το ψηφιακό σας voucher έχει ενεργοποιηθεί και το ποσό έχει κατατεθεί στον τραπεζικό
          σας <br/> λογαριασμό. Θα λάβετε στο e-mail σας το σχετικό έγγραφο σε μορφή PDF,
          συμπεριλαμβανομένου <br /> όλων των σχετικών πληροφοριών και ο γονέας θα ενημερωθεί
          μέσω e-mail για την ολοκλήρωση της διαδικασίας.
        </p>
        <a href="/miniaia_plirwmi_mevoucher.pdf" download className="apodoxh-plhrwmhs-pdf-link">
          <img src="/download.jpg" alt="Download Icon" className="apodoxh-plhrwmhs-download-icon" />
          miniaia_plirwmi_mevoucher.pdf
        </a>
      </div>

      {/* Ευχαριστήριο μήνυμα */}
      <p className="apodoxh-plhrwmhs-thank-you">
        Σας ευχαριστούμε για την προσφορά των υπηρεσιών σας!
        <img src="/care.jpg" alt="Care-icon" className="care-icon "/>
      </p>

      {/* Κουμπιά στο κέντρο */}
      <div className="apodoxh-plhrwmhs-buttons-container">
        <button className="apodoxh-plhrwmhs-btn" onClick={handleMain}>Επιστροφή στην αρχική</button>
        <button className="apodoxh-plhrwmhs-btn" onClick={handleProfile}>Μετάβαση στο Προφίλ μου</button>
      </div>
    </div>
  );
}
