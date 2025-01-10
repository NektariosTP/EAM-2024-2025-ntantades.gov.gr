import React from 'react';
import './ProfileBody.css';

function ProfileBody() {
  return (
    <div className="profile-body">
      <div className="left-section">
        <div className="description">

          <h3 className='section-title'>Περιγραφή</h3>
          <p>
            Γεια σας! Είμαι η Ελένη, 21 ετών, και διαθέτω πιστοποιητικό από ασύγχρονο πρόγραμμα εκπαίδευσης για τη φροντίδα παιδιών. Είμαι υπεύθυνη, αξιόπιστη και με αγάπη για τα παιδιά, έτοιμη να προσφέρω τη φροντίδα που χρειάζονται με προσοχή και σεβασμό. Είμαι διαθέσιμη να φροντίσω τα παιδιά σας με επαγγελματισμό και ενθουσιασμό!
          </p>
        </div>

        <div className="attached-files">
          <h3 className='section-title'>Συνημμένα Αρχεία</h3>
          <ul>
            <li><a href="#">Βιογραφικό</a></li>
            <li><a href="#">Συστατικές Επιστολές</a></li>
            <li><a href="#">Πιστοποιητικό Πρώτων Βοηθειών</a></li>
          </ul>

        </div>
        <div className="availability">
          <h3 className='section-title'>Διαθεσιμότητα</h3>
          <table>
            <thead>
              <tr>
                <th>Δευ</th>
                <th>Τρι</th>
                <th>Τετ</th>
                <th>Πεμ</th>
                <th>Παρ</th>
                <th>Σαβ</th>
                <th>Κυρ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="areas">
            <h3 className='section-title'>Περιοχές Εξυπηρέτησης</h3>
            <span>Αγία Παρασκευή</span>
            <span>Βριλήσσια</span>
            <span>Μελίσσια</span>
            <span>Φιλοθέη</span>
            <span>Χαλάνδρι</span>
            <span>Χολαργός</span>
        </div>

        <div className='extra'>
            <div className="extra-services">
            <h3 className='section-title'>Επιπλέον Παροχές</h3>
            <ul>
                <li>Κώδικας μπράιγ</li>
                <li>Δίπλωμα οδήγησης</li>
            </ul>
            </div>

            <div className="extra-languages">
            <h3 className='section-title'>Επιπλέον Γλώσσες</h3>
            <span>Αγγλικά</span>
            </div>
        </div>

        <div className="reviews">
          <h3 className='section-title'>Κριτικές (2)</h3>
          <div className="review">
            <p><strong>Λάκης Λαλάκης</strong> | 25/11/2024</p>
            <p>Η Ελένη είναι εξαιρετική με τα παιδιά! Είναι στοργική, υπεύθυνη και πάντα βρίσκει δημιουργικούς τρόπους να τα απασχολεί. Την εμπιστευόμαστε απόλυτα.</p>
          </div>
          <div className="review">
            <p><strong>Γεωργία Γεωργίου</strong> | 12/11/2024</p>
            <p>Πολύ αξιόπιστη και συνεπής, η Ελένη έκανε τα παιδιά μας να τη λατρέψουν από την πρώτη στιγμή. Μας εντυπωσίασε η προσοχή και η φροντίδα της.</p>
          </div>
        </div>
      </div>

      <div className="right-section">

        <div className="location-info">
          <h3 className='section-title'>Πληροφορίες</h3>
          <p>Πηγαίνω στο χώρο της οικογένειας<br/>6 Δήμοι σε Αττική</p>
          <p>Παρέχω φροντίδα στο χώρο μου<br/>Χαλάνδρι</p>
        </div>

        <div className="contact-section">
          <h3 className='section-title'>Επικοινωνία με Νταντά</h3>
          <p>Θα σας ζητηθεί να συνδεθείτε ή να δημιουργήσετε λογαριασμό</p>
          <button>Προγραμματισμός ραντεβού γνωριμίας</button>
          <button>Αίτηση ενδιαφέροντος συνεργασίας</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
