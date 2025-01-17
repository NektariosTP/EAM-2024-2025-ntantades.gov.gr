import React, { useState } from "react";
import "./NannyEditMeetingForm.css"
import { useNavigate } from "react-router-dom";
import NannyProfileSidebar from "../NannyProfile/NannyProfileSidebar";

function NannyEditMeetingForm() {
  const navigate = useNavigate()
    const [nannyId] = useState(() => {
      const id = localStorage.getItem("nannyId");
      return id || null;
    });
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");
    const [executionMode, setExecutionMode] = useState("");
    const [location, setLocation] = useState("");
    const [customAddress, setCustomAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [availabilityRows, setAvailabilityRows] = useState([
      { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedNanny, setSelectedNanny] = useState(null);
    const [message, setMessage] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
    const openPopup = (nannyName) => {
      setSelectedNanny(nannyName);
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
      setSelectedNanny(null);
      setMessage("");
    };
  
    const sendMessage = () => {
      setShowPopup(false);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
      setMessage("");
    };
  
  
    const handleSubmit = () => {
      const newErrors = {};
  
      if (!selectedDate) newErrors.selectedDate = "Παρακαλώ επιλέξτε ημερομηνία.";
      if (!selectedHour) newErrors.selectedHour = "Παρακαλώ επιλέξτε ώρα.";
      if (!executionMode) newErrors.executionMode = "Παρακαλώ επιλέξτε τρόπο διεξαγωγής.";
      if (executionMode === "Δια ζώσης" && !location) {
        newErrors.location = "Παρακαλώ επιλέξτε τοποθεσία.";
      }
      if (executionMode === "Δια ζώσης") {
        if (!location) {
          newErrors.location = "Παρακαλώ επιλέξτε τοποθεσία.";
        } else if (location === "Επιλέξτε διεύθυνση" && !customAddress.trim()) {
          newErrors.customAddress = "Παρακαλώ εισάγετε διεύθυνση.";
        }
      }
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        const appointmentData = {
          date: selectedDate,
          time1: selectedHour,
          time2: selectedMinute,
          executionMode: executionMode,
          location: executionMode === "Δια ζώσης" ? location : null,
          address: location === "Επιλέξτε διεύθυνση" ? customAddress : null,
        };
  
        alert("Το ραντεβού σας τροποποιήθηκε!")
        navigate("/Ntantades/Profil")
      }
    };
  
    const handleDateChange = (value) => {
      setSelectedDate(value);
      if (errors.selectedDate) {
        setErrors((prevErrors) => ({ ...prevErrors, selectedDate: null }));
      }
    };
  
    const handleTimeChange1 = (index, field, value) => {
      const updatedRows = [...availabilityRows];
      updatedRows[index][field] = value;
      setAvailabilityRows(updatedRows);
      setSelectedHour(value);
      if (errors.selectedHour) {
        setErrors((prevErrors) => ({ ...prevErrors, selectedHour: null }));
      }
    };
  
    const handleTimeChange2 = (index, field, value) => {
      const updatedRows = [...availabilityRows];
      updatedRows[index][field] = value;
      setAvailabilityRows(updatedRows);
      setSelectedMinute(value);
      if (errors.selectedMinute) {
        setErrors((prevErrors) => ({ ...prevErrors, selectedMinute: null }));
      }
    };
    
    const handleExecutionModeChange = (value) => {
      setExecutionMode(value);
      if (errors.executionMode) {
        setErrors((prevErrors) => ({ ...prevErrors, executionMode: null }));
      }
    };
    
    const handleLocationChange = (value) => {
      setLocation(value);
      if (errors.location) {
        setErrors((prevErrors) => ({ ...prevErrors, location: null }));
      }
    };
  
    const handleAddressChange = (value) => {
      setCustomAddress(value);
      if (errors.customAddress) {
        setErrors((prevErrors) => ({ ...prevErrors, customAddress: null }));
      }
    };
  
    const generateOptions = (start, end) => {
      const options = [];
      for (let i = start; i <= end; i++) {
        options.push(
          <option key={i} value={String(i).padStart(2, "0")}>
            {String(i).padStart(2, "0")}
          </option>
        );
      }
      return options;
    };
  
    return (
      <div className="idiotika-layout-profile">
      <NannyProfileSidebar />
      <div className="rantevou-container">
        <div className="rantevou-title1">
          <h2>Επαναπρογραμματισμός Ραντεβού</h2>
        </div>
  
        <div className="form-section-edit-meeting">
          <p>Δεν σας εξυπηρετεί το ραντεβού; Μην ανησυχείτε, μπορείτε να το
             επεξεργαστείτε. Ο γονέας θα ενημερωθεί για την τροποποίηση του
             ραντεβού και με τη σειρά του θα μπορεί να το αποδεχτεί.
          </p>
  
          {/* Date */}
          <label className="form-label-rantevou">Ημερομηνία</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
          />
          {errors.selectedDate && <p className="error-text">{errors.selectedDate}</p>}
  
          {/* Time */}
          <label className="form-label-rantevou">Ώρα</label>
          {availabilityRows.map((row, index) => (
            <div key={index}>
              {/* Time Selection */}
              <div className="time-selection">
                <label className="label-nanny-register-ad-creation">
                  <select
                    type="time1"
                    value={row.fromHour}
                    onChange={(e) => handleTimeChange1(index, "fromHour", e.target.value)}
                  >
                    {generateOptions(0, 23)}
                  </select>
                  :
                  <select
                    type="time2"
                    value={row.fromMinute}
                    onChange={(e) => handleTimeChange2(index, "fromMinute", e.target.value)}
                  >
                    {generateOptions(0, 59)}
                  </select>
                </label>
              </div>
            </div>
          ))}
          {errors.selectedHour && <p className="error-text">{errors.selectedHour}</p>}
  
          {/* Execution Mode */}
          <label className="form-label-rantevou">Τρόπος διεξαγωγής</label>
          <select
            value={executionMode}
            onChange={(e) => handleExecutionModeChange(e.target.value)}
          >
            <option value="">Επιλέξτε</option>
            <option value="Δια ζώσης">Δια ζώσης</option>
            <option value="Διαδικτυακά">Διαδικτυακά</option>
          </select>
          {errors.executionMode && <p className="error-text">{errors.executionMode}</p>}
  
          {/* Conditional inputs for location or online info */}
          {executionMode === "Δια ζώσης" ? (
            <div className="date-info">
              <label className="form-label-rantevou">Τοποθεσία</label>
              <div className="radio-group-total">
                <div className="radio-group">
                  <label className="form-label-option">
                    <input
                      type="radio"
                      name="location"
                      value="Στο χώρο του Γονέα"
                      checked={location === "Στο χώρο του Γονέα"}
                      onChange={(e) => handleLocationChange(e.target.value)}
                    />
                    <p>Στο χώρο του Γονέα</p>
                  </label>
                </div>
                <div className="radio-group">
                  <label className="form-label-option">
                    <input
                      type="radio"
                      name="location"
                      value="Στο χώρο της Νταντάς"
                      checked={location === "Στο χώρο της Νταντάς"}
                      onChange={(e) => handleLocationChange(e.target.value)}
                    />
                    <p>Στο χώρο της Νταντάς</p>
                  </label>
                </div>
                <div className="radio-group">
                  <label className="form-label-option">
                    <input
                      type="radio"
                      name="location"
                      value="Επιλέξτε διεύθυνση"
                      checked={location === "Επιλέξτε διεύθυνση"}
                      onChange={(e) => handleLocationChange(e.target.value)}
                    />
                    <p>Επιλέξτε διεύθυνση</p>
                  </label>
                  {location === "Επιλέξτε διεύθυνση" && (
                    <input
                      className="custom-address-input"
                      type="text"
                      placeholder="Εισάγετε διεύθυνση"
                      value={customAddress}
                      onChange={(e) => handleAddressChange(e.target.value)}
                    />
                  )}
                  {errors.customAddress && <p className="error-text">{errors.customAddress}</p>}
                </div>
              </div>
              {errors.location && <p className="error-text">{errors.location}</p>}
            </div>
          ) : executionMode === "Διαδικτυακά" ? (
            <div className="online-info">
              <label className="form-label-rantevou">Σύνδεσμος του ραντεβού</label>
              <p>
                Την ημέρα και ώρα του ραντεβού θα συνδεθείτε στον παρακάτω σύνδεσμο:<br />
                <a
                  href="https://example.com/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  zoom.com/ntantades_gov_gr_temp_meeting_id123
                </a>
              </p>
            </div>
          ) : null}
        </div>
  
        <div className="rantevou-buttons">
          <button
            className="rantevou-button1"
            onClick={() => (window.location.href = "/Ntantades/Profil")}
          >
            Ακύρωση
          </button>
          <button className="rantevou-button2" onClick={handleSubmit}>
            Υποβολή
          </button>
        </div>
      </div>
        <div className="idiotika-sidebar-profile">
        <div className="sidebar-profile-pic">
          <div className="profile-image">Εικόνα Νταντάς</div>
          <button className="edit-myprofile-button"
          onClick={() => navigate("/Ntantades/Profil/Epeksergasia_Stoixeion")}>Επεξεργασία Στοιχείων</button>
          <button className="edit-ad-button"
          onClick={() => navigate("/Ntantades/Dimiourgia_Aggelias")}>Επεξεργασία Αγγελίας</button>
        </div>
        <div className="sidebar-content-profile">
          <h3>Το προφίλ μου</h3>
          <p><strong>Χρήστος Νίκας, 22</strong></p>
          <p>
            <strong>Διαθέσιμες Ώρες:</strong>
            <br />
            Δε, Τρ: 8:00 πμ - 5:00 μμ
            <br />
            Πε, Παρ: 8:00 πμ - 2:00 μμ
          </p>
          <p>
            <strong>Περιοχή:</strong>
            <br />
            Μοσχάτο <br />
            Καλλιθέα
          </p>
          <p>
            <strong>Εκπαίδευση:</strong>
            <br />
            Πτυχίο ΑΕΙ Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία
          </p>
          <p>
            <strong>Αξιολογήσεις:</strong>
            <br />
            5.0 ★★★★★ (7)
          </p>
        </div>
      </div>
      </div>
    );
  }
  
  export default NannyEditMeetingForm;