import React, { useState } from 'react';
import './NannyProgressBar1.css';

function NannyProgressBar1() {
  const [, setClickedStep] = useState(null);

  const steps = [
    'Συμπλήρωση Προσωπικών Στοιχείων',
    'Συμπλήρωση Στοιχείων Επικοινωνίας',
    'Συμπλήρωση Πιστοποιητικών',
    'Δημιουργία Βιογραφικού',
    'Δημιουργία Λογαριασμού'
  ];

  const handleClick = (index) => {
    setClickedStep(index);
  };

  return (
    <div className="progress-bar-maira">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`stage ${index === 0 ? 'active-maira' : ''}`}>
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

export default NannyProgressBar1;

