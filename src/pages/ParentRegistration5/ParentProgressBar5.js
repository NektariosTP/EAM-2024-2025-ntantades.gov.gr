import React from 'react';
import './ParentProgressBar5.css';

function ParentProgressBar5() {
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
    } else if (index === 1){
        window.location.href = "/Goneis/Eggrafi/2";
    }
    else if (index === 2){
        window.location.href = "/Goneis/Eggrafi/3";
    }
    else if (index === 3){
        window.location.href ="/Goneis/Eggrafi/4";
    }
  };

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`stage ${index === 0 || index === 1 || index === 2 || index === 3? 'completed' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="circle">{index === 0 || index === 1 || index === 2 || index === 3? '✔' : index + 1}</div>
            <p className="label">{step}</p>
          </div>

          {/* Arrow (except after the last step) */}
          {index < steps.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ParentProgressBar5;