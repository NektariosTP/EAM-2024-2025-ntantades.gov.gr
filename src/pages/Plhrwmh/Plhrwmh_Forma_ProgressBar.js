import React from "react";
import "./Plhrwmh_Epivevaiwsh_ProgressBar.css"

function Plhrwmh_Forma_ProgressBar() {
    return (
        <div className="progress-bar1">
            {/* Stage 1 */}
            <div className="stage active">
                <div className="circle">1</div>
                <p className="label">Φόρμα Πληρωμής</p>
            </div>

            {/* Arrow */}
            <div className="arrow">→</div>

            {/* Stage 2 */}
            <div className="stage ">
                <div className="circle">2</div>
                <p className="label">Ενεργοποίηση Voucher</p>
            </div>

            {/* Arrow */}
            <div className="arrow">→</div>

            {/* Stage 3 */}
            <div className="stage ">
                <div className="circle">3</div>
                <p className="label">Επιβεβαίωση Πληρωμής</p>
            </div>
        </div>
    );
}

export default Plhrwmh_Forma_ProgressBar;