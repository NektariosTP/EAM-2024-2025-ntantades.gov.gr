import React from "react";
import "./IdiwtikoSymfwnhtikoProgressBar.css";

function ProgressBar() {
    return (
        <div className="progress-bar-idiwtikosymf">
            {/* Stage 1 */}
            <div className="stage completed-idsymf">
                <div className="circle">✔</div>
                <p className="label">Αίτηση Ενδιαφέροντος Συνεργασίας</p>
            </div>

            {/* Arrow */}
            <div className="arrow">→</div>

            {/* Stage 2 */}
            <div className="stage">
                <div className="circle">2</div>
                <p className="label">Υπογραφή Ιδιωτικού Συμφωνητικού Συνεργασίας</p>
            </div>

            {/* Arrow */}
            <div className="arrow">→</div>

            {/* Stage 3 */}
            <div className="stage">
                <div className="circle">3</div>
                <p className="label">Επιβεβαίωση Υπογραφής</p>
            </div>
        </div>
    );
}

export default ProgressBar;