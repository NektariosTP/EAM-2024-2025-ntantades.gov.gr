import React from "react";
import "./Criteria.css";
import { useNavigate } from "react-router-dom";

function Criteria() {
  const navigate = useNavigate(); // React Router navigation hook
  return (

    <div className="criteria-container">

      <img src="/nanny-kids.png" alt="bnanny-kids" className="header-image" />
      <div className="row">
        <div className="yellow-box">
            <img src="/baby-nanny.png" alt="baby-nanny" className="img" />
        </div>
        <div className="info-box">
          <h2>Αναζητείτε εργασία ως νταντά;</h2>
          <p>
            Μέσω της πλατφόρμας μπορείτε να παρέχετε υπηρεσίες φύλαξης και
            φροντίδας σε βρέφη και νήπια από 2 μηνών έως 2.5 ετών! Η φροντίδα
            παρέχεται στο σπίτι του παιδιού ή στο σπίτι της νταντάς.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="yellow-box">
            <img src="/questionmark.png" alt="questionmark" className="img" />
        </div>
        <div className="info-box">
          <h2>Ποιος μπορεί να γίνει νταντά;</h2>
          <p>
            Απαραίτητες προϋποθέσεις για να γίνει κάποιος νταντά είναι να έχει:
          </p>
          <ul>
            <li>Τίτλο σπουδών</li>
            <li>Πιστοποιητικό πρώτων βοηθειών</li>
            <li>
              Πιστοποιητικό υγείας τελευταίου τριμήνου από παθολόγο, δερματολόγο
              και ψυχίατρο δημόσιας δομής.
            </li>
            <li>Αντίγραφο ποινικού μητρώου γενικής χρήσης</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="yellow-box">
            <img src="/profile.png" alt="profile" className="img" />
        </div>
        <div className="info-box">
          <h2>Δημιουργήστε το προφίλ σας!</h2>
          <p>
            Συνδεθείτε με τους προσωπικούς σας κωδικούς taxisnet,
            συμπληρώστε τα στοιχεία σας, υποβάλλετε όλα τα απαραίτητα
            δικαιολογητικά, και δημιουργήστε το δικό σας προφίλ!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="yellow-box">
            <img src="/handshake.jpg" alt="handshake" className="img" />
        </div>
        <div className="info-box">
          <h2>Πώς κλείνω ραντεβού με τους γονείς του παιδιού;</h2>
          <p>
            Αφού θα έχετε δημιουργήσει το προφίλ σας, οι γονείς θα μπορούν να
            σας δουν και να σας επιλέξουν! Μόλις το κάνουν, θα πρέπει να
            αποδεχτείτε την αίτηση που σας έχουν κάνει και έπειτα θα μπορέσετε
            να επικοινωνήσετε μαζί τους και να κλείσετε ραντεβού!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="yellow-box">
            <img src="/payment.png" alt="payment" className="img" />
        </div>
        <div className="info-box">
          <h2>Πώς θα λάβετε την αμοιβή σας;</h2>
          <p>
            Εφόσον συμφωνήσετε να συνεργαστείτε, μπορείτε μέσω της πλατφόρμας
            να προχωρήσετε σε μια συμφωνία που θα υπογράψετε ηλεκτρονικά, με το
            πάτημα ενός κουμπιού, μέσα στην πλατφόρμα. Στο τέλος κάθε μήνα θα
            πληρώνεστε από το γονέα με εργόσημο. Θα μπορείτε μέσω της
            πλατφόρμας να λάβετε ένα voucher για την πληρωμή από τον γονέα.
          </p>
        </div>
      </div>

      <div className="footer-container">
        <h2>Γίνετε νταντά τώρα!</h2>
        <div className="registration">
            <button className="register-button" onClick={() => navigate("/Ntantades/Eggrafi")}>Εγγραφή</button>
        </div>
        <p>
            Έχετε κάνει ήδη εγγραφή;{" "}
            <a href="#" className="profile-link">
            Συνδεθείτε στο προφίλ σας
            </a>
        </p>
        </div>
    </div>
    
  );
}

export default Criteria;

