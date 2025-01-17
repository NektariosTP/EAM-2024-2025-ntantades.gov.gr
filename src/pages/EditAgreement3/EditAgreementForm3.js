import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditAgreementForm3.css";

function EditAgreementForm3() {
  const navigate = useNavigate();

  // State for 'Ημερομηνία Λήξης Συνεργασίας'
  const [endDate, setEndDate] = useState("2024-05-20");

  // State for work hours (each day has a 'from' and 'to' time)
  const [workHours, setWorkHours] = useState({
    Δευτέρα: { from: { hour: "11", minute: "00" }, to: { hour: "14", minute: "00" } },
    Tρίτη: { from: { hour: "", minute: "00" }, to: { hour: "", minute: "00" } },
    Τετάρτη: { from: { hour: "", minute: "00" }, to: { hour: "", minute: "00" } },
    Πέμπτη: { from: { hour: "", minute: "00" }, to: { hour: "", minute: "00" } },
    Παρασκευή: { from: { hour: "", minute: "00" }, to: { hour: "", minute: "00" } },
    Σάββατο: { from: { hour: "", minute: "00" }, to: { hour: "", minute: "00" } },
    Κυριακή: { from: { hour: "", minute: "00" }, to: { hour: "", minute: "00" } },
  });

  const handleSave = () => {
    alert("Η φόρμα αποθηκεύτηκε");
  };

  const handleProceed = () => {
    window.location.href = `${window.location.origin}/Goneis/Profil/Synergasies`;
  };

  const handleEnd = () => {
    window.location.href = `${window.location.origin}/Goneis/Profil/Synergasies`;
  };

  const handlePrint = () => {
    alert("Εκτύπωση σε εξέλιξη...");
  };

  const handleDownload = () => {
    alert("Λήψη αρχείου σε εξέλιξη...");
  };

  // Function to update specific work hours
  const handleWorkHoursChange = (day, field, type, value) => {
    setWorkHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: {
          ...prev[day][field],
          [type]: value,
        },
      },
    }));
  };

  // Function to create dropdown options for hours and minutes
  const generateOptions = (type) => {
    const options = [];
    if (type === "hour") {
      for (let i = 0; i < 24; i++) {
        options.push(i.toString().padStart(2, "0"));
      }
    } else if (type === "minute") {
      for (let i = 0; i < 60; i++) {
        options.push(i.toString().padStart(2, "0"));
      }
    }
    return options;
  };

  return (
    <div className="container3-editagreement">
      <h1 className="title-editagreement">Επεξεργασία Συνεργασίας</h1>
      <h2 className="form-title-editagreement">
        Επεξεργασία Λεπτομερειών Ιδιωτικού Συμφωνητικού
      </h2>

      <form className="payment-form-editagreement">
        <div className="form-group-editagreement">
          <label>Κατάσταση:</label>
          <input type="text" value="Ενεργή" readOnly />
        </div>
        <div className="form-group-editagreement">
          <label>Ονοματεπώνυμο Γονέα</label>
          <input type="text" value="Νεκτάριος Παπάζογλου" readOnly />
        </div>
        <div className="form-group-editagreement">
          <label>Ονοματεπώνυμο Παιδιού</label>
          <input type="text" value="Γεωργία Παπάζογλου" readOnly />
        </div>
        <div className="form-group-editagreement">
          <label>Ονοματεπώνυμο Επαγγελματία</label>
          <input type="text" value="Χρήστος Μπίκος" readOnly />
        </div>

        <div className="form-group-editagreement">
          <label>Ημερομηνία έναρξης συνεργασίας</label>
          <input type="text" value="2023-11-20" readOnly />
        </div>

        <div className="form-group-editagreement">
          <label>Ημερομηνία λήξης συνεργασίας</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="form-group-editagreement">
          <label>Χρόνος Απασχόλησης</label>
          <table className="work-hours-table">
            <thead>
              <tr>
                <th>Ώρα</th>
                {Object.keys(workHours).map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Από</td>
                {Object.keys(workHours).map((day) => (
                  <td key={`${day}-from`}>
                    <div className="time-selector">
                      <select
                        value={workHours[day].from.hour}
                        onChange={(e) =>
                          handleWorkHoursChange(day, "from", "hour", e.target.value)
                        }
                      >
                        {generateOptions("hour").map((hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        ))}
                      </select>
                      :
                      <select
                        value={workHours[day].from.minute}
                        onChange={(e) =>
                          handleWorkHoursChange(day, "from", "minute", e.target.value)
                        }
                      >
                        {generateOptions("minute").map((minute) => (
                          <option key={minute} value={minute}>
                            {minute}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td>Έως</td>
                {Object.keys(workHours).map((day) => (
                  <td key={`${day}-to`}>
                    <div className="time-selector">
                      <select
                        value={workHours[day].to.hour}
                        onChange={(e) =>
                          handleWorkHoursChange(day, "to", "hour", e.target.value)
                        }
                      >
                        {generateOptions("hour").map((hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        ))}
                      </select>
                      :
                      <select
                        value={workHours[day].to.minute}
                        onChange={(e) =>
                          handleWorkHoursChange(day, "to", "minute", e.target.value)
                        }
                      >
                        {generateOptions("minute").map((minute) => (
                          <option key={minute} value={minute}>
                            {minute}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="form-group-editagreement">
          <label>Ποσό Επιχορηγούμενου Voucher</label>
          <input type="text" value="500 ευρώ" readOnly />
        </div>
      </form>

      <div className="action-buttons-editagreement">
        <button className="download-btn-editagreement" onClick={handleDownload}>
          Λήψη
          <img
            src="/download.jpg"
            alt="Download"
            className="button-edit-agreement-icon"
          />
        </button>
        <button className="print-btn-editagreement" onClick={handlePrint}>
          Εκτύπωση
          <img
            src="/print.jpg"
            alt="Print"
            className="button-edit-agreement-icon"
          />
        </button>
      </div>

      <div className="button-section-forma3-editagreement">
        <button className="cancel-btn-forma3-editagreement" onClick={handleEnd}>
          Ακύρωση
        </button>
        <button className="save-btn-forma3-editagreement" onClick={handleSave}>
          Προσωρινή Αποθήκευση
        </button>
        <button className="next-btn-forma3-editagreement" onClick={handleProceed}>
          Υποβολή Ιδιωτικού Συμφωνητικού
        </button>
      </div>
    </div>
  );
}

export default EditAgreementForm3;
