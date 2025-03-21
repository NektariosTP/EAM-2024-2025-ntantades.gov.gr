import React from 'react';
import './ParentProgressBar6.css';

function ParentProgressBar6() {
  const steps = [
    'Συμπλήρωση Προσωπικών Στοιχείων',
    'Συμπλήρωση Στοιχείων Επικοινωνίας',
    'Συμπλήρωση Πιστοποιητικών',
    'Συμπλήρωση Στοιχείων Παιδιού',
    'Δημιουργία Λογαριασμού'
  ];

  return (
    <div className="progress-bar-maira">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`stage ${index === 0 || index === 1 || index === 2 || index === 3 || index === 4? 'completed-maira' : index === 5 ? 'active-maira': ''}`}
          >
            <div className="circle">{index === 0 || index === 1 || index === 2 || index === 3 || index === 4? '✔' : index + 1}</div>
            <p className="label">{step}</p>
          </div>

          {/* Arrow (except after the last step) */}
          {index < steps.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ParentProgressBar6;