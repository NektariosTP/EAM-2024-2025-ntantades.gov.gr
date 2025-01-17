import React from 'react';
import './NannyProgressBar4.css';

function NannyProgressBar4() {
  const steps = [
    'Συμπλήρωση Προσωπικών Στοιχείων',
    'Συμπλήρωση Στοιχείων Επικοινωνίας',
    'Συμπλήρωση Πιστοποιητικών',
    'Δημιουργία Βιογραφικού',
    'Δημιουργία Λογαριασμού'
  ];

  const handleClick = (index) => {
    if (index === 0) {
      window.location.href = "/Ntantades/Eggrafi";
    } else if (index === 1){
        window.location.href = "/Ntantades/Eggrafi/2";
    }
    else if (index === 2){
        window.location.href = "/Ntantades/Eggrafi/3";
    }
  };

  return (
    <div className="progress-bar-maira">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`stage ${index === 0 || index === 1 || index === 2? 'completed-maira':index === 3 ? 'active-maira' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="circle">{index === 0 || index === 1 || index === 2? '✔' : index + 1}</div>
            <p className="label">{step}</p>
          </div>

          {/* Arrow (except after the last step) */}
          {index < steps.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default NannyProgressBar4;