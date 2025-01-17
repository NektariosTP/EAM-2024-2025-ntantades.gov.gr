import React from 'react';
import './ParentProgressBar2.css';

function ParentProgressBar2() {
  const steps = [
    'Συμπλήρωση Προσωπικών Στοιχείων',
    'Συμπλήρωση Στοιχείων Επικοινωνίας',
    'Συμπλήρωση Πιστοποιητικών',
    'Συμπλήρωση Στοιχείων Παιδιού',
    'Δημιουργία Λογαριασμού'
  ];

  const handleClick = (index) => {
    if (index === 0) {
      window.location.href = "/Goneis/Eggrafi";
    }
  };

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`stage ${index === 0 ? 'completed-maira': index === 1 ? 'active-maira' : ''}`} // First step is now "ticked"
            onClick={() => handleClick(index)}
          >
            <div className="circle">{index === 0 ? '✔' : index + 1}</div>
            <p className="label">{step}</p>
          </div>

          {/* Arrow (except after the last step) */}
          {index < steps.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ParentProgressBar2;
