import React from 'react';
import './NannyProgressBar3.css';

function NannyProgressBar3() {
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
  };

  return (
    <div className="progress-bar-maira">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Stage */}
          <div
            className={`stage ${index === 0 || index === 1? 'completed-maira' : index === 2 ? 'active-maira' : ''}`} // First step is "ticked"
            onClick={() => handleClick(index)}
          >
            <div className="circle">{index === 0 || index === 1? '✔' : index + 1}</div>
            <p className="label">{step}</p>
          </div>

          {/* Arrow (except after the last step) */}
          {index < steps.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default NannyProgressBar3;