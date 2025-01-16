import React, { useState } from 'react';
import './ParentProgressBar1.css';

function ParentProgressBar1() {
  const [, setClickedStep] = useState(null);

  const steps = [
    'Συμπλήρωση Προσωπικών Στοιχείων',
    'Συμπλήρωση Στοιχείων Επικοινωνίας',
    'Συμπλήρωση Πιστοποιητικών',
    'Συμπλήρωση Στοιχείων Παιδιού',
    'Δημιουργία Λογαριασμού'
  ];

  const handleClick = (index) => {
    setClickedStep(index);
  };

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="stage" onClick={() => handleClick(index)}>
            <div className="circle">{index + 1}</div>
            <p className="label">{step}</p>
          </div>

          {/* Arrow (except after the last step) */}
          {index < steps.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ParentProgressBar1;

