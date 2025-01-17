import React, {useState} from 'react';
import './EditAgreementForm6.css';
import { useNavigate } from "react-router-dom";

function EditAgreementForm6() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0); // State to store the selected rating
  const [hover, setHover] = useState(0); // State to handle hover effect
  const [comment, setComment] = useState(''); // State to store the comment
  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility

  const handleSubmit = () => {
    // Logic for submitting the rating and comment
    console.log("Rating:", rating);
    console.log("Comment:", comment);

    // Clear the stars and comment
    setRating(0);
    setComment('');

    // Show the popup
    setPopupVisible(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };


  return (
    <div className="form-container-editagreement-complete">
      <h2>Η Λήξη Συνεργασίας Επιβεβαιώθηκε Επιτυχώς
         <img src="/green_tick_nanny.jpg" alt="Checkmark Icon" className="checkmark6-icon" /> </h2>
      <div className="submit-box6">
        <p> Θα λάβετε στο email σας το σχετικό έγγραφο σε μορφή PDF, 
        συμπεριλαμβανομένου όλων των σχετικών πληροφοριών.</p>
        <div className="popup-button-group6">
          <a href="/epivevaiwsh_lhxhs_synergasias.pdf" download className="pdf_confirm-nanny-link">
            <img src="/download.jpg" alt="Download Icon" className="download6-icon" />
            epivevaiwsh_eggrafhs.pdf
          </a>
        </div>

        <h2>Σας ευχαριστούμε για την συνεργασία
         <img src="/smile_face.png" alt="Smile Icon" className="checkmark6-icon" /> </h2>
        <p> Ελπίζουμε ότι η εμπειρία σας με τον/την επαγγελματία συνέβαλε στη φροντίδα 
        που αναζητούσατε. Ανυπομονούμε να σας εξυπηρετήσουμε ξανά στο μέλλον!</p>

        <h2>Η γνώμη σας έχει σημασία!    
         <img src="/rate_agreement.png" alt="Rating Icon" className="checkmark6-icon" /> </h2>
        <p> Αξιολογήστε τη συνεργασία σας με τον/την Χρήστο Μπίκο και βοηθήστε να 
        βελτιώνουμε τις υπηρεσίες μας.</p>

        <div className="rating-section-editagreement">
          <div className="rating-stars-editagreement">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  className={`star ${starValue <= (hover || rating) ? 'active' : ''}`}
                  onClick={() => setRating(starValue)} // Set the rating on click
                  onMouseEnter={() => setHover(starValue)} // Highlight stars on hover
                  onMouseLeave={() => setHover(0)} // Reset hover state when mouse leaves
                >
                  &#9733; {/* Unicode for filled star */}
                </span>
              );
            })}
          </div>
          <textarea
            className="rating-comment-editagreement"
            placeholder="Μπορείτε, αν θέλετε, να προσθέσετε ένα σύντομο σχόλιο:"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="button" className="submit-rating-button-editagreement" onClick={handleSubmit}>
            Υποβολή Αξιολόγησης
          </button>
        </div>

        {/* Popup Message */}
        {popupVisible && (
          <div className="popup-message-editagreement">
            Η αξιολόγηση υποβλήθηκε!
          </div>
        )}


        <p>Εάν επιθυμείτε να αναζητήσετε νέο επαγγελματία για τη 
        φροντίδα του παιδιού σας:</p>
        <button type="button" className="renew-agreement-button" onClick={() => window.location.href = `${window.location.origin}/Goneis`}>
            Aναζήτηση Νταντάδων
        </button>
        
        <div className="button-group6-parents">
          <button type="button" className="back-button" onClick={() =>  window.location.href = `${window.location.origin}/`}>
            Επιστροφή στην Αρχική
          </button>
          <button type="button" className="view-button" onClick={() =>  window.location.href = `${window.location.origin}/Goneis/Profil`}>
            Μετάβαση στο Προφίλ μου
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAgreementForm6;
