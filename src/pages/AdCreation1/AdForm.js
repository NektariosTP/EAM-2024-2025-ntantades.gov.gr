import React, { useState, useEffect } from "react";
import "./AdForm.css";
import { useNavigate } from "react-router-dom";

function AdForm() {
  const navigate = useNavigate();

  // State initialization
  const [accommodation, setAccommodation] = useState("");
  const [cohabitants, setCohabitants] = useState("");
  const [childageRange, setChildAgeRange] = useState([2, 30]);
  const [otherLanguage, setOtherLanguage] = useState(false);
  const [customLanguage, setCustomLanguage] = useState("");
  const [availabilityRows, setAvailabilityRows] = useState([
    { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
  ]);
  const [checkboxField, setCheckboxField] = useState(false); // Example checkbox field
  const [radioField, setRadioField] = useState("option1"); // Example radio button field
  const daysOfWeek = ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"];
  const [employmentType, setEmploymentType] = useState(""); // State for employment type
  const [checkboxLanguages, setCheckboxLanguages] = useState({}); // State for language checkboxes
  const [additionalFeatures, setAdditionalFeatures] = useState({}); // State for additional features checkboxes
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [availabilityArea, setAvailabilityArea] = useState("");

  const [selectedAreas, setSelectedAreas] = useState([]); // State to manage selected municipalities
  const [currentArea, setCurrentArea] = useState(""); // State to track the currently selected area

  const handleAddArea = () => {
    if (currentArea && !selectedAreas.includes(currentArea)) {
      const updatedAreas = [...selectedAreas, currentArea];
      setSelectedAreas(updatedAreas); // Add the area to the list
      localStorage.setItem("selectedAreas", JSON.stringify(updatedAreas)); // Save to localStorage
      setCurrentArea(""); // Reset the dropdown to the default value
    }
  };

  const handleRemoveArea = (area) => {
    const updatedAreas = selectedAreas.filter((a) => a !== area);
    setSelectedAreas(updatedAreas); // Remove the area from the list
    localStorage.setItem("selectedAreas", JSON.stringify(updatedAreas)); // Update localStorage
  };

  // Load saved areas from localStorage on component mount
  useEffect(() => {
    const savedAreas = JSON.parse(localStorage.getItem("selectedAreas"));
    if (savedAreas) {
      setSelectedAreas(savedAreas);
    }
  }, []);

  const handleAreaChange = (e) => {
    const value = e.target.value
    setCurrentArea(value);
    localStorage.setItem("availabilityArea", value)
  };
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("adForm"));
    const savedEmploymentType = localStorage.getItem("employmentType");
    const savedAccommodation = localStorage.getItem("accommodation");
    const savedCheckboxLanguages = localStorage.getItem("checkboxLanguages");
    const savedAdditionalFeatures = localStorage.getItem("additionalFeatures");
    const savedCohabitants = localStorage.getItem("cohabitants");
    const savedYearsOfExperience = localStorage.getItem("yearsOfExperience");
    const savedAvailabilityRows = localStorage.getItem("availabilityRows");
    const savedAvailabilityArea = localStorage.getItem("availabilityArea");

    if (savedEmploymentType) setEmploymentType(savedEmploymentType);
    if (savedAccommodation) setAccommodation(savedAccommodation);
    if (savedCheckboxLanguages)
      setCheckboxLanguages(JSON.parse(savedCheckboxLanguages));
    if (savedAdditionalFeatures)
      setAdditionalFeatures(JSON.parse(savedAdditionalFeatures));
    if (savedCohabitants){
      setCohabitants(savedCohabitants);
    }
    if (savedYearsOfExperience){
      setYearsOfExperience(savedYearsOfExperience);
    }
    if (savedAvailabilityRows) {
      try {
        const parsedRows = JSON.parse(savedAvailabilityRows);
        if (Array.isArray(parsedRows)) {
          setAvailabilityRows(parsedRows);
        } else {
          setAvailabilityRows([
            { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
          ]);
        }
      } catch (error) {
        console.error("Error parsing availabilityRows from localStorage:", error);
        setAvailabilityRows([
          { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
        ]);
      }
    } else {
      setAvailabilityRows([
        { fromHour: "08", fromMinute: "00", toHour: "14", toMinute: "00", days: [] },
      ]);
    }
    if (savedAvailabilityArea){
      setAvailabilityArea(savedAvailabilityArea);
    }
    if (savedData) {
      setChildAgeRange(savedData.childageRange || [2, 30]);
      setOtherLanguage(savedData.otherLanguage || false);
      setCustomLanguage(savedData.customLanguage || "");
      setCheckboxField(savedData.checkboxField || false);
      setRadioField(savedData.radioField || "option1");
    }
  }, []);

  // Save to local storage on state change
  useEffect(() => {
    const adForm = {
      childageRange,
      otherLanguage,
      customLanguage,
      checkboxField,
      radioField,
    };
    localStorage.setItem("adForm", JSON.stringify(adForm));
  }, [
    childageRange,
    otherLanguage,
    customLanguage,
    checkboxField,
    radioField,
  ]);

  const handleCohabitantsChange = (e) => {
    const count = parseInt(e.target.value);
    setCohabitants(count);
    localStorage.setItem("cohabitants", count);
  };

  const handleChildAgeChange = (e) => {
    const { name, value } = e.target;
    setChildAgeRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === "min") {
        newRange[0] = Math.min(parseInt(value, 10), prevRange[1]);
      } else {
        newRange[1] = Math.max(parseInt(value, 10), prevRange[0]);
      }
      return newRange;
    });
  };

  const handleTimeChange = (index, field, value) => {
    const updatedRows = [...availabilityRows];
    updatedRows[index][field] = value;
    setAvailabilityRows(updatedRows);
    localStorage.setItem("availabilityRows", JSON.stringify(updatedRows));
  };

  const handleDayToggle = (index, day) => {
    const updatedRows = [...availabilityRows];
    const dayIndex = updatedRows[index].days.indexOf(day);
    if (dayIndex === -1) {
      updatedRows[index].days.push(day);
    } else {
      updatedRows[index].days.splice(dayIndex, 1);
    }
    setAvailabilityRows(updatedRows);
    localStorage.setItem("availabilityRows", JSON.stringify(updatedRows));
  };

  const addRow = () => {
    setAvailabilityRows([
      ...availabilityRows,
      { fromHour: "00", fromMinute: "00", toHour: "00", toMinute: "00", days: [] },
    ]);
  };

  const clearAll = () => {
    setAvailabilityRows([{ fromHour: "00", fromMinute: "00", toHour: "00", toMinute: "00", days: [] }]);
  };

  const deleteRow = (index) => {
    const updatedRows = [...availabilityRows];
    updatedRows.splice(index, 1);
    setAvailabilityRows(updatedRows);
    localStorage.setItem("availabilityRows", JSON.stringify(updatedRows));
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

  const handleCheckboxChange = (group, name, isChecked) => {
    const updatedGroup = { ...group, [name]: isChecked };
    return updatedGroup;
  };

  const handleEmploymentChange = (e) => {
    const value = e.target.value;
    setEmploymentType(value);
    localStorage.setItem("employmentType", value);
  };

  const handleAccommodationChange = (e) => {
    const value = e.target.value;
    setAccommodation(value);
    localStorage.setItem("accommodation", value);
  };

  const handleLanguagesChange = (name, isChecked) => {
    const updatedLanguages = handleCheckboxChange(
      checkboxLanguages,
      name,
      isChecked
    );
    setCheckboxLanguages(updatedLanguages);
    localStorage.setItem("checkboxLanguages", JSON.stringify(updatedLanguages));
  };
  
  const handleYearsChange = (e) => {
    const value = e.target.value
    setYearsOfExperience(value);
    localStorage.setItem("yearsOfExperience", value);
  };

  const handleAdditionalFeaturesChange = (name, isChecked) => {
    const updatedFeatures = handleCheckboxChange(
      additionalFeatures,
      name,
      isChecked
    );
    setAdditionalFeatures(updatedFeatures);
    localStorage.setItem(
      "additionalFeatures",
      JSON.stringify(updatedFeatures)
    );
  };

  const clearForm = () => {
    // Reset all states
    setAvailabilityArea("");
    setAccommodation(false);
    setCohabitants("");
    setChildAgeRange([2, 30]);
    setOtherLanguage(false);
    setCustomLanguage("");
    clearAll();
    setCheckboxField(false);
    setRadioField("option1");
    setEmploymentType("");
    setAccommodation(null);
    setCheckboxLanguages({});
    setAdditionalFeatures({});
    setYearsOfExperience("");
    setCurrentArea("");
    setSelectedAreas([]);
    localStorage.removeItem("employmentType");
    localStorage.removeItem("accommodation");
    localStorage.removeItem("checkboxLanguages");
    localStorage.removeItem("additionalFeatures");
    localStorage.removeItem("yearsOfExperience");
    localStorage.removeItem("cohabitants");
    localStorage.removeItem("availabilityRows");
    // Clear local storage
    localStorage.removeItem("adForm");
  };

  return (
    <div className="ad-creation-form">
      <h1>Δημιουργία Αγγελίας</h1>

      {/* Ωράριο Διαθεσιμότητας */}
      <div className="section-ad-creation">
        <label className="label-nanny">Ωράριο Διαθεσιμότητας</label>
        <p>Παρακαλώ συμπληρώστε τις ημέρες και τις ώρες στις οποίες είστε διαθέσιμος/η</p>
        <div className="availability">
          {availabilityRows.map((row, index) => (
            <div key={index} className="availability-row">
              {/* Time Selection */}
              <div className="time-selection">
                <label className="label-nanny-register-ad-creation">
                  Από:
                  <select
                    value={row.fromHour}
                    onChange={(e) => handleTimeChange(index, "fromHour", e.target.value)}
                  >
                    {generateOptions(0, 23)}
                  </select>
                  :
                  <select
                    value={row.fromMinute}
                    onChange={(e) => handleTimeChange(index, "fromMinute", e.target.value)}
                  >
                    {generateOptions(0, 59)}
                  </select>
                </label>
                <label className="label-nanny">
                  Έως:
                  <select
                    value={row.toHour}
                    onChange={(e) => handleTimeChange(index, "toHour", e.target.value)}
                  >
                    {generateOptions(0, 23)}
                  </select>
                  :
                  <select
                    value={row.toMinute}
                    onChange={(e) => handleTimeChange(index, "toMinute", e.target.value)}
                  >
                    {generateOptions(0, 59)}
                  </select>
                </label>
              </div>
              {/* Day Selection */}
              <div className="days">
                {daysOfWeek.map((day) => (
                  <label key={day} className="day-checkbox">
                    <input className="input-nanny"
                      type="checkbox"
                      checked={row.days.includes(day)}
                      onChange={() => handleDayToggle(index, day)}
                    />
                    {day}
                  </label>
                ))}
              </div>
              {/* Delete Row */}
              <button onClick={() => deleteRow(index)} className="delete-row">
                X
              </button>
            </div>
          ))}
        </div>
        {/* Actions */}
        <div className="actions-ad-creation">
          <button onClick={addRow}>+ Προσθήκη Ώρας</button>
          <button onClick={clearAll}>Εκκαθάριση</button>
        </div>
      </div>
      

      <label className="label-nanny-register-ad-creation">Τύπος Απασχόλησης</label>
      <div className="radio-group">
        <label className="label-nanny">
          <input
            type="radio"
            name="employmentType"
            value="Πλήρης"
            checked={employmentType === "Πλήρης"}
            onChange={handleEmploymentChange}
          />{" "}
          Πλήρης
        </label>
        <label className="label-nanny">
          <input
            type="radio"
            name="employmentType"
            value="Μερική"
            checked={employmentType === "Μερική"}
            onChange={handleEmploymentChange}
          />{" "}
          Μερική
        </label>
      </div>

      {/* Περιοχή Διαθεσιμότητας */}
      <div className="area">
        <label className="label-nanny-register-ad-creation">Περιοχή Διαθεσιμότητας</label>
        <p>Επιλέξτε τον Δήμο στον οποίο θα παρέχετε την υπηρεσία σας. Μπορείτε να προσθέσετε παραπάνω από έναν Δήμο.</p>
        <select
          name="availabilityArea"
          value={currentArea}
          onChange={handleAreaChange}
        >
          <option value="">Επιλέξτε Δήμο</option>
          <option value="ΑΒΔΗΡΩΝ">ΑΒΔΗΡΩΝ</option>
          <option value="ΑΓΑΘΟΝΗΣΙΟΥ">ΑΓΑΘΟΝΗΣΙΟΥ</option>
          <option value="ΑΓΙΑΣ">ΑΓΙΑΣ</option>
          <option value="ΑΓΙΑΣ ΒΑΡΒΑΡΑΣ">ΑΓΙΑΣ ΒΑΡΒΑΡΑΣ</option>
          <option value="ΑΓΙΑΣ ΠΑΡΑΣΚΕΥΗΣ">ΑΓΙΑΣ ΠΑΡΑΣΚΕΥΗΣ</option>
          <option value="ΑΓΙΟΥ ΒΑΣΙΛΕΙΟΥ">ΑΓΙΟΥ ΒΑΣΙΛΕΙΟΥ</option>
          <option value="ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ">ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ</option>
          <option value="ΑΓΙΟΥ ΕΥΣΤΡΑΤΙΟΥ">ΑΓΙΟΥ ΕΥΣΤΡΑΤΙΟΥ</option>
          <option value="ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ">ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ</option>
          <option value="ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ-ΚΑΜΑΤΕΡΟΥ">ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ-ΚΑΜΑΤΕΡΟΥ</option>
          <option value="ΑΓΚΙΣΤΡΙΟΥ">ΑΓΚΙΣΤΡΙΟΥ</option>
          <option value="ΑΓΡΑΦΩΝ">ΑΓΡΑΦΩΝ</option>
          <option value="ΑΓΡΙΝΙΟΥ">ΑΓΡΙΝΙΟΥ</option>
          <option value="ΑΘΗΝΑΙΩΝ">ΑΘΗΝΑΙΩΝ</option>
          <option value="ΑΙΓΑΛΕΩ">ΑΙΓΑΛΕΩ</option>
          <option value="ΑΙΓΙΑΛΕΙΑΣ">ΑΙΓΙΑΛΕΙΑΣ</option>
          <option value="ΑΙΓΙΝΑΣ">ΑΙΓΙΝΑΣ</option>
          <option value="ΑΚΤΙΟΥ-ΒΟΝΙΤΣΑΣ">ΑΚΤΙΟΥ-ΒΟΝΙΤΣΑΣ</option>
          <option value="ΑΛΕΞΑΝΔΡΕΙΑΣ">ΑΛΕΞΑΝΔΡΕΙΑΣ</option>
          <option value="ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ">ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ</option>
          <option value="ΑΛΙΑΡΤΟΥ-ΘΕΣΠΙΕΩΝ">ΑΛΙΑΡΤΟΥ-ΘΕΣΠΙΕΩΝ</option>
          <option value="ΑΛΙΜΟΥ">ΑΛΙΜΟΥ</option>
          <option value="ΑΛΜΥΡΟΥ">ΑΛΜΥΡΟΥ</option>
          <option value="ΑΛΜΩΠΙΑΣ">ΑΛΜΩΠΙΑΣ</option>
          <option value="ΑΛΟΝΝΗΣΟΥ">ΑΛΟΝΝΗΣΟΥ</option>
          <option value="ΑΜΑΡΙΟΥ">ΑΜΑΡΙΟΥ</option>
          <option value="ΑΜΑΡΟΥΣΙΟΥ">ΑΜΑΡΟΥΣΙΟΥ</option>
          <option value="ΑΜΟΡΓΟΥ">ΑΜΟΡΓΟΥ</option>
          <option value="ΑΜΠΕΛΟΚΗΠΩΝ-ΜΕΝΕΜΕΝΗΣ">ΑΜΠΕΛΟΚΗΠΩΝ-ΜΕΝΕΜΕΝΗΣ</option>
          <option value="ΑΜΥΝΤΑΙΟΥ">ΑΜΥΝΤΑΙΟΥ</option>
          <option value="ΑΜΦΙΚΛΕΙΑΣ-ΕΛΑΤΕΙΑΣ">ΑΜΦΙΚΛΕΙΑΣ-ΕΛΑΤΕΙΑΣ</option>
          <option value="ΑΜΦΙΛΟΧΙΑΣ">ΑΜΦΙΛΟΧΙΑΣ</option>
          <option value="ΑΜΦΙΠΟΛΗΣ">ΑΜΦΙΠΟΛΗΣ</option>
          <option value="ΑΝΑΤΟΛΙΚΗΣ ΜΑΝΗΣ">ΑΝΑΤΟΛΙΚΗΣ ΜΑΝΗΣ</option>
          <option value="ΑΝΑΤΟΛΙΚΗΣ ΣΑΜΟΥ">ΑΝΑΤΟΛΙΚΗΣ ΣΑΜΟΥ</option>
          <option value="ΑΝΑΦΗΣ">ΑΝΑΦΗΣ</option>
          <option value="ΑΝΔΡΑΒΙΔΑΣ-ΚΥΛΛΗΝΗΣ">ΑΝΔΡΑΒΙΔΑΣ-ΚΥΛΛΗΝΗΣ</option>
          <option value="ΑΝΔΡΙΤΣΑΙΝΑΣ-ΚΡΕΣΤΕΝΩΝ">ΑΝΔΡΙΤΣΑΙΝΑΣ-ΚΡΕΣΤΕΝΩΝ</option>
          <option value="ΑΝΔΡΟΥ">ΑΝΔΡΟΥ</option>
          <option value="ΑΝΤΙΠΑΡΟΥ">ΑΝΤΙΠΑΡΟΥ</option>
          <option value="ΑΝΩΓΕΙΩΝ">ΑΝΩΓΕΙΩΝ</option>
          <option value="ΑΠΟΚΟΡΩΝΟΥ">ΑΠΟΚΟΡΩΝΟΥ</option>
          <option value="ΑΡΓΙΘΕΑΣ">ΑΡΓΙΘΕΑΣ</option>
          <option value="ΑΡΓΟΥΣ ΟΡΕΣΤΙΚΟΥ">ΑΡΓΟΥΣ ΟΡΕΣΤΙΚΟΥ</option>
          <option value="ΑΡΓΟΥΣ - ΜΥΚΗΝΩΝ">ΑΡΓΟΥΣ - ΜΥΚΗΝΩΝ</option>
          <option value="ΑΡΙΣΤΟΤΕΛΗ">ΑΡΙΣΤΟΤΕΛΗ</option>
          <option value="ΑΡΡΙΑΝΩΝ">ΑΡΡΙΑΝΩΝ</option>
          <option value="ΑΡΤΑΙΩΝ">ΑΡΤΑΙΩΝ</option>
          <option value="ΑΡΧΑΙΑΣ ΟΛΥΜΠΙΑΣ">ΑΡΧΑΙΑΣ ΟΛΥΜΠΙΑΣ</option>
          <option value="ΑΡΧΑΝΩΝ-ΑΣΤΕΡΟΥΣΙΩΝ">ΑΡΧΑΝΩΝ-ΑΣΤΕΡΟΥΣΙΩΝ</option>
          <option value="ΑΣΠΡΟΠΥΡΓΟΥ">ΑΣΠΡΟΠΥΡΓΟΥ</option>
          <option value="ΑΣΤΥΠΑΛΑΙΑΣ">ΑΣΤΥΠΑΛΑΙΑΣ</option>
          <option value="ΑΧΑΡΝΩΝ">ΑΧΑΡΝΩΝ</option>
          <option value="ΒΑΡΗΣ-ΒΟΥΛΑΣ-ΒΟΥΛΙΑΓΜΕΝΗΣ">ΒΑΡΗΣ-ΒΟΥΛΑΣ-ΒΟΥΛΙΑΓΜΕΝΗΣ</option>
          <option value="ΒΕΛΒΕΝΤΟΥ">ΒΕΛΒΕΝΤΟΥ</option>
          <option value="ΒΕΛΟΥ-ΒΟΧΑΣ">ΒΕΛΟΥ-ΒΟΧΑΣ</option>
          <option value="ΒΕΡΟΙΑΣ">ΒΕΡΟΙΑΣ</option>
          <option value="ΒΙΑΝΝΟΥ">ΒΙΑΝΝΟΥ</option>
          <option value="ΒΙΣΑΛΤΙΑΣ">ΒΙΣΑΛΤΙΑΣ</option>
          <option value="ΒΟΙΟΥ">ΒΟΙΟΥ</option>
          <option value="ΒΟΛΒΗΣ">ΒΟΛΒΗΣ</option>
          <option value="ΒΟΛΟΥ">ΒΟΛΟΥ</option>
          <option value="ΒΟΡΕΙΑΣ ΚΕΡΚΥΡΑΣ">ΒΟΡΕΙΑΣ ΚΕΡΚΥΡΑΣ</option>
          <option value="ΒΟΡΕΙΑΣ ΚΥΝΟΥΡΙΑΣ">ΒΟΡΕΙΑΣ ΚΥΝΟΥΡΙΑΣ</option>
          <option value="ΒΟΡΕΙΩΝ ΤΖΟΥΜΕΡΚΩΝ">ΒΟΡΕΙΩΝ ΤΖΟΥΜΕΡΚΩΝ</option>
          <option value="ΒΡΙΛΗΣΣΙΩΝ">ΒΡΙΛΗΣΣΙΩΝ</option>
          <option value="ΒΥΡΩΝΟΣ">ΒΥΡΩΝΟΣ</option>
          <option value="ΓΑΛΑΤΣΙΟΥ">ΓΑΛΑΤΣΙΟΥ</option>
          <option value="ΓΑΥΔΟΥ">ΓΑΥΔΟΥ</option>
          <option value="ΓΕΩΡΓΙΟΥ ΚΑΡΑΪΣΚΑΚΗ">ΓΕΩΡΓΙΟΥ ΚΑΡΑΪΣΚΑΚΗ</option>
          <option value="ΓΛΥΦΑΔΑΣ">ΓΛΥΦΑΔΑΣ</option>
          <option value="ΓΟΡΤΥΝΑΣ">ΓΟΡΤΥΝΑΣ</option>
          <option value="ΓΟΡΥΝΙΑΣ">ΓΟΡΥΝΙΑΣ</option>
          <option value="ΓΡΕΒΕΝΩΝ">ΓΡΕΒΕΝΩΝ</option>
          <option value="ΔΑΦΝΗΣ-ΥΜΗΤΤΟΥ">ΔΑΦΝΗΣ-ΥΜΗΤΤΟΥ</option>
          <option value="ΔΕΛΤΑ">ΔΕΛΤΑ</option>
          <option value="ΔΕΛΦΩΝ">ΔΕΛΦΩΝ</option>
          <option value="ΔΕΣΚΑΤΗΣ">ΔΕΣΚΑΤΗΣ</option>
          <option value="ΔΙΔΥΜΟΤΕΙΧΟΥ">ΔΙΔΥΜΟΤΕΙΧΟΥ</option>
          <option value="ΔΙΟΝΥΣΟΥ">ΔΙΟΝΥΣΟΥ</option>
          <option value="ΔΙΟΥ - ΟΛΥΜΠΟΥ">ΔΙΟΥ - ΟΛΥΜΠΟΥ</option>
          <option value="ΔΙΡΦΥΩΝ-ΜΕΣΣΑΠΙΩΝ">ΔΙΡΦΥΩΝ-ΜΕΣΣΑΠΙΩΝ</option>
          <option value="ΔΙΣΤΟΜΟΥ-ΑΡΑΧΟΒΑΣ-ΑΝΤΙΚΥΡΑΣ">ΔΙΣΤΟΜΟΥ-ΑΡΑΧΟΒΑΣ-ΑΝΤΙΚΥΡΑΣ</option>
          <option value="ΔΟΜΟΚΟΥ">ΔΟΜΟΚΟΥ</option>
          <option value="ΔΟΞΑΤΟΥ">ΔΟΞΑΤΟΥ</option>
          <option value="ΔΡΑΜΑΣ">ΔΡΑΜΑΣ</option>
          <option value="ΔΥΤΙΚΗΣ ΑΧΑΪΑΣ">ΔΥΤΙΚΗΣ ΑΧΑΪΑΣ</option>
          <option value="ΔΥΤΙΚΗΣ ΛΕΣΒΟΥ">ΔΥΤΙΚΗΣ ΛΕΣΒΟΥ</option>
          <option value="ΔΥΤΙΚΗΣ ΜΑΝΗΣ">ΔΥΤΙΚΗΣ ΜΑΝΗΣ</option>
          <option value="ΔΥΤΙΚΗΣ ΣΑΜΟΥ">ΔΥΤΙΚΗΣ ΣΑΜΟΥ</option>
          <option value="ΔΩΔΩΝΗΣ">ΔΩΔΩΝΗΣ</option>
          <option value="ΔΩΡΙΔΟΣ">ΔΩΡΙΔΟΣ</option>
          <option value="ΕΔΕΣΣΑΣ">ΕΔΕΣΣΑΣ</option>
          <option value="ΕΛΑΣΣΟΝΑΣ">ΕΛΑΣΣΟΝΑΣ</option>
          <option value="ΕΛΑΦΟΝΗΣΟΥ">ΕΛΑΦΟΝΗΣΟΥ</option>
          <option value="ΕΛΕΥΣΙΝΑΣ">ΕΛΕΥΣΙΝΑΣ</option>
          <option value="ΕΛΛΗΝΙΚΟΥ-ΑΡΓΥΡΟΥΠΟΛΗΣ">ΕΛΛΗΝΙΚΟΥ-ΑΡΓΥΡΟΥΠΟΛΗΣ</option>
          <option value="ΕΜΜΑΝΟΥΗΛ ΠΑΠΠΑ">ΕΜΜΑΝΟΥΗΛ ΠΑΠΠΑ</option>
          <option value="ΕΟΡΔΑΙΑΣ">ΕΟΡΔΑΙΑΣ</option>
          <option value="ΕΠΙΔΑΥΡΟΥ">ΕΠΙΔΑΥΡΟΥ</option>
          <option value="ΕΡΕΤΡΙΑΣ">ΕΡΕΤΡΙΑΣ</option>
          <option value="ΕΡΜΙΟΝΙΔΑΣ">ΕΡΜΙΟΝΙΔΑΣ</option>
          <option value="ΕΡΥΜΑΝΘΟΥ">ΕΡΥΜΑΝΘΟΥ</option>
          <option value="ΕΥΡΩΤΑ">ΕΥΡΩΤΑ</option>
          <option value="ΖΑΓΟΡΑΣ-ΜΟΥΡΕΣΙΟΥ">ΖΑΓΟΡΑΣ-ΜΟΥΡΕΣΙΟΥ</option>
          <option value="ΖΑΓΟΡΙΟΥ">ΖΑΓΟΡΙΟΥ</option>
          <option value="ΖΑΚΥΝΘΟΥ">ΖΑΚΥΝΘΟΥ</option>
          <option value="ΖΑΧΑΡΩΣ">ΖΑΧΑΡΩΣ</option>
          <option value="ΖΗΡΟΥ">ΖΗΡΟΥ</option>
          <option value="ΖΙΤΣΑΣ">ΖΙΤΣΑΣ</option>
          <option value="ΖΩΓΡΑΦΟΥ">ΖΩΓΡΑΦΟΥ</option>
          <option value="ΗΓΟΥΜΕΝΙΤΑΣ">ΗΓΟΥΜΕΝΙΤΑΣ</option>
          <option value="ΗΛΙΔΑΣ">ΗΛΙΔΑΣ</option>
          <option value="ΗΛΙΟΥΠΟΛΕΩΣ">ΗΛΙΟΥΠΟΛΕΩΣ</option>
          <option value="ΗΡΑΚΛΕΙΑΣ">ΗΡΑΚΛΕΙΑΣ</option>
          <option value="ΗΡΑΚΛΕΙΟΥ">ΗΡΑΚΛΕΙΟΥ</option>
          <option value="ΗΡΩΙΚΗΣ ΝΗΣΟΥ ΚΑΣΟΥ">ΗΡΩΙΚΗΣ ΝΗΣΟΥ ΚΑΣΟΥ</option>
          <option value="ΗΡΩΙΚΗΣ ΝΗΣΟΥ ΨΑΡΩΝ">ΗΡΩΙΚΗΣ ΝΗΣΟΥ ΨΑΡΩΝ</option>
          <option value="ΗΡΩΙΚΑΣ ΠΟΛΗΣ ΝΑΟΥΣΑΣ">ΗΡΩΙΚΑΣ ΠΟΛΗΣ ΝΑΟΥΣΑΣ</option>
          <option value="ΘΑΣΟΥ">ΘΑΣΟΥ</option>
          <option value="ΘΕΡΜΑΪΚΟΥ">ΘΕΡΜΑΪΚΟΥ</option>
          <option value="ΘΕΡΜΗΣ">ΘΕΡΜΗΣ</option>
          <option value="ΘΕΡΜΟΥ">ΘΕΡΜΟΥ</option>
          <option value="ΘΕΣΣΑΛΟΝΙΚΗΣ">ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
          <option value="ΘΗΒΑΙΩΝ">ΘΗΒΑΙΩΝ</option>
          <option value="ΘΗΡΑΣ">ΘΗΡΑΣ</option>
          <option value="ΙΑΣΜΟΥ">ΙΑΣΜΟΥ</option>
          <option value="ΙΕΡΑΠΕΤΡΑΣ">ΙΕΡΑΠΕΤΡΑΣ</option>
          <option value="ΙΕΡΑΣ ΠΟΛΗΣ ΜΕΣΟΛΟΓΓΙΟΥ">ΙΕΡΑΣ ΠΟΛΗΣ ΜΕΣΟΛΟΓΓΙΟΥ</option>
          <option value="ΙΗΤΩΝ">ΙΗΤΩΝ</option>
          <option value="ΙΘΑΚΗΣ">ΙΘΑΚΗΣ</option>
          <option value="ΙΚΑΡΙΑΣ">ΙΚΑΡΙΑΣ</option>
          <option value="ΙΛΙΟΥ">ΙΛΙΟΥ</option>
          <option value="ΙΣΤΙΑΙΑΣ-ΑΙΔΗΨΟΥ">ΙΣΤΙΑΙΑΣ-ΑΙΔΗΨΟΥ</option>
          <option value="ΙΩΑΝΝΙΝΩΝ">ΙΩΑΝΝΙΝΩΝ</option>
          <option value="ΚΑΒΑΛΑΣ">ΚΑΒΑΛΑΣ</option>
          <option value="ΚΑΙΣΑΡΙΑΝΗΣ">ΚΑΙΣΑΡΙΑΝΗΣ</option>
          <option value="ΚΑΛΑΒΡΥΤΩΝ">ΚΑΛΑΒΡΥΤΩΝ</option>
          <option value="ΚΑΛΑΜΑΡΙΑΣ">ΚΑΛΑΜΑΡΙΑΣ</option>
          <option value="ΚΑΛΑΜΑΤΑΣ">ΚΑΛΑΜΑΤΑΣ</option>
          <option value="ΚΑΛΛΙΘΕΑΣ">ΚΑΛΛΙΘΕΑΣ</option>
          <option value="ΚΑΛΥΜΝΙΩΝ">ΚΑΛΥΜΝΙΩΝ</option>
          <option value="ΚΑΜΕΝΩΝ ΒΟΥΡΛΩΝ">ΚΑΜΕΝΩΝ ΒΟΥΡΛΩΝ</option>
          <option value="ΚΑΝΤΑΝΟΥ-ΣΕΛΙΝΟΥ">ΚΑΝΤΑΝΟΥ-ΣΕΛΙΝΟΥ</option>
          <option value="ΚΑΡΔΙΤΑΣ">ΚΑΡΔΙΤΑΣ</option>
          <option value="ΚΑΡΠΑΘΟΥ">ΚΑΡΠΑΘΟΥ</option>
          <option value="ΚΑΡΠΕΝΗΣΙΟΥ">ΚΑΡΠΕΝΗΣΙΟΥ</option>
          <option value="ΚΑΡΥΣΤΟΥ">ΚΑΡΥΣΤΟΥ</option>
          <option value="ΚΑΣΣΑΝΔΡΑΣ">ΚΑΣΣΑΝΔΡΑΣ</option>
          <option value="ΚΑΣΤΟΡΙΑΣ">ΚΑΣΤΟΡΙΑΣ</option>
          <option value="ΚΑΤΕΡΙΝΗΣ">ΚΑΤΕΡΙΝΗΣ</option>
          <option value="ΚΑΤΩ ΝΕΥΡΟΚΟΠΙΟΥ">ΚΑΤΩ ΝΕΥΡΟΚΟΠΙΟΥ</option>
          <option value="ΚΕΑΣ">ΚΕΑΣ</option>
          <option value="ΚΕΝΤΡΙΚΗΣ ΚΕΡΚΥΡΑΣ ΚΑΙ ΔΙΑΠΟΝΤΙΩΝ ΝΗΣΩΝ">ΚΕΝΤΡΙΚΗΣ ΚΕΡΚΥΡΑΣ ΚΑΙ ΔΙΑΠΟΝΤΙΩΝ ΝΗΣΩΝ</option>
          <option value="ΚΕΝΤΡΙΚΩΝ ΤΖΟΥΜΕΡΚΩΝ">ΚΕΝΤΡΙΚΩΝ ΤΖΟΥΜΕΡΚΩΝ</option>
          <option value="ΚΕΡΑΤΣΙΝΙΟΥ-ΔΡΑΠΕΤΣΩΝΑΣ">ΚΕΡΑΤΣΙΝΙΟΥ-ΔΡΑΠΕΤΣΩΝΑΣ</option>
          <option value="ΚΗΦΙΣΙΑΣ">ΚΗΦΙΣΙΑΣ</option>
          <option value="ΚΙΛΕΛΕΡ">ΚΙΛΕΛΕΡ</option>
          <option value="ΚΙΚΛΚΙΣ">ΚΙΚΛΚΙΣ</option>
          <option value="ΚΙΜΩΛΟΥ">ΚΙΜΩΛΟΥ</option>
          <option value="ΚΙΣΣΑΜΟΥ">ΚΙΣΣΑΜΟΥ</option>
          <option value="ΚΟΖΑΝΗΣ">ΚΟΖΑΝΗΣ</option>
          <option value="ΚΟΜΟΤΗΝΗΣ">ΚΟΜΟΤΗΝΗΣ</option>
          <option value="ΚΟΝΙΤΣΑΣ">ΚΟΝΙΤΣΑΣ</option>
          <option value="ΚΟΡΔΕΛΙΟΥ-ΕΥΟΣΜΟΥ">ΚΟΡΔΕΛΙΟΥ-ΕΥΟΣΜΟΥ</option>
          <option value="ΚΟΡΙΝΘΙΩΝ">ΚΟΡΙΝΘΙΩΝ</option>
          <option value="ΚΟΡΥΔΑΛΛΟΥ">ΚΟΡΥΔΑΛΛΟΥ</option>
          <option value="ΚΡΩΠΙΑΣ">ΚΡΩΠΙΑΣ</option>
          <option value="ΚΥΘΗΡΩΝ">ΚΥΘΗΡΩΝ</option>
          <option value="ΚΥΘΝΟΥ">ΚΥΘΝΟΥ</option>
          <option value="ΚΥΜΗΣ-ΑΛΙΒΕΡΙΟΥ">ΚΥΜΗΣ-ΑΛΙΒΕΡΙΟΥ</option>
          <option value="ΚΩ">ΚΩ</option>
          <option value="ΛΑΓΚΑΔΑ">ΛΑΓΚΑΔΑ</option>
          <option value="ΛΑΜΙΕΩΝ">ΛΑΜΙΕΩΝ</option>
          <option value="ΛΑΡΙΣΑΙΩΝ">ΛΑΡΙΣΑΙΩΝ</option>
          <option value="ΛΑΥΡΕΩΤΙΚΗΣ">ΛΑΥΡΕΩΤΙΚΗΣ</option>
          <option value="ΛΕΒΑΔΕΩΝ">ΛΕΒΑΔΕΩΝ</option>
          <option value="ΛΕΙΨΩΝ">ΛΕΙΨΩΝ</option>
          <option value="ΛΕΡΟΥ">ΛΕΡΟΥ</option>
          <option value="ΛΕΥΚΑΔΑΣ">ΛΕΥΚΑΔΑΣ</option>
          <option value="ΛΗΜΝΟΥ">ΛΗΜΝΟΥ</option>
          <option value="ΛΗΞΟΥΡΙΟΥ">ΛΗΞΟΥΡΙΟΥ</option>
          <option value="ΛΙΜΝΗΣ ΠΛΑΣΤΗΡΑ">ΛΙΜΝΗΣ ΠΛΑΣΤΗΡΑ</option>
          <option value="ΛΟΚΡΩΝ">ΛΟΚΡΩΝ</option>
          <option value="ΛΟΥΤΡΑΚΙΟΥ-ΠΕΡΑΧΩΡΑΣ-ΑΓ.ΘΕΟΔΩΡΩΝ">ΛΟΥΤΡΑΚΙΟΥ-ΠΕΡΑΧΩΡΑΣ-ΑΓ.ΘΕΟΔΩΡΩΝ</option>
          <option value="ΛΥΚΟΒΡΥΣΗΣ-ΠΕΥΚΗΣ">ΛΥΚΟΒΡΥΣΗΣ-ΠΕΥΚΗΣ</option>
          <option value="ΜΑΚΡΑΚΩΜΗΣ">ΜΑΚΡΑΚΩΜΗΣ</option>
          <option value="ΜΑΛΕΒΙΖΙΟΥ">ΜΑΛΕΒΙΖΙΟΥ</option>
          <option value="ΜΑΝΔΡΑΣ-ΕΙΔΥΛΛΙΑΣ">ΜΑΝΔΡΑΣ-ΕΙΔΥΛΛΙΑΣ</option>
          <option value="ΜΑΝΤΟΥΔΙΟΥ-ΛΙΜΝΗΣ-ΑΓΙΑΣ ΑΝΝΑΣ">ΜΑΝΤΟΥΔΙΟΥ-ΛΙΜΝΗΣ-ΑΓΙΑΣ ΑΝΝΑΣ</option>
          <option value="ΜΑΡΑΘΩΝΟΣ">ΜΑΡΑΘΩΝΟΣ</option>
          <option value="ΜΑΡΚΟΠΟΥΛΟΥ ΜΕΣΟΓΑΙΑΣ">ΜΑΡΚΟΠΟΥΛΟΥ ΜΕΣΟΓΑΙΑΣ</option>
          <option value="ΜΑΡΩΝΕΙΑΣ-ΣΑΠΩΝ">ΜΑΡΩΝΕΙΑΣ-ΣΑΠΩΝ</option>
          <option value="ΜΕΓΑΛΟΠΟΛΗΣ">ΜΕΓΑΛΟΠΟΛΗΣ</option>
          <option value="ΜΕΓΑΝΗΣΙΟΥ">ΜΕΓΑΝΗΣΙΟΥ</option>
          <option value="ΜΕΓΑΡΕΩΝ">ΜΕΓΑΡΕΩΝ</option>
          <option value="ΜΕΓΙΣΤΗΣ">ΜΕΓΙΣΤΗΣ</option>
          <option value="ΜΕΣΣΗΝΗΣ">ΜΕΣΣΗΝΗΣ</option>
          <option value="ΜΕΤΑΜΟΡΦΩΣΕΩΝ">ΜΕΤΑΜΟΡΦΩΣΕΩΝ</option>
          <option value="ΜΕΤΕΩΡΩΝ">ΜΕΤΕΩΡΩΝ</option>
          <option value="ΜΕΤΣΟΒΟΥ">ΜΕΤΣΟΒΟΥ</option>
          <option value="ΜΗΛΟΥ">ΜΗΛΟΥ</option>
          <option value="ΜΙΝΩΑ ΠΕΔΙΑΔΑΣ">ΜΙΝΩΑ ΠΕΔΙΑΔΑΣ</option>
          <option value="ΜΟΝΕΜΒΑΣΙΑΣ">ΜΟΝΕΜΒΑΣΙΑΣ</option>
          <option value="ΜΟΣΧΑΤΟΥ-ΤΑΥΡΟΥ">ΜΟΣΧΑΤΟΥ-ΤΑΥΡΟΥ</option>
          <option value="ΜΟΥΖΑΚΙΟΥ">ΜΟΥΖΑΚΙΟΥ</option>
          <option value="ΜΥΚΗΣ">ΜΥΚΗΣ</option>
          <option value="ΜΥΚΟΝΟΥ">ΜΥΚΟΝΟΥ</option>
          <option value="ΜΥΛΟΠΟΤΑΜΟΥ">ΜΥΛΟΠΟΤΑΜΟΥ</option>
          <option value="ΜΥΤΙΛΗΝΗΣ">ΜΥΤΙΛΗΝΗΣ</option>
          <option value="ΝΑΞΟΥ & ΜΙΚΡΩΝ ΚΥΚΛΑΔΩΝ">ΝΑΞΟΥ & ΜΙΚΡΩΝ ΚΥΚΛΑΔΩΝ</option>
          <option value="ΝΑΥΠΑΚΤΙΑΣ">ΝΑΥΠΑΚΤΙΑΣ</option>
          <option value="ΝΑΥΠΛΙΕΩΝ">ΝΑΥΠΛΙΕΩΝ</option>
          <option value="ΝΕΑΠΟΛΗΣ-ΣΥΚΕΩΝ">ΝΕΑΠΟΛΗΣ-ΣΥΚΕΩΝ</option>
          <option value="ΝΕΑΣ ΖΙΧΝΗΣ">ΝΕΑΣ ΖΙΧΝΗΣ</option>
          <option value="ΝΕΑΣ ΙΩΝΙΑΣ">ΝΕΑΣ ΙΩΝΙΑΣ</option>
          <option value="ΝΕΑΣ ΠΡΟΠΟΝΤΙΔΑΣ">ΝΕΑΣ ΠΡΟΠΟΝΤΙΔΑΣ</option>
          <option value="ΝΕΑΣ ΣΜΥΡΝΗΣ">ΝΕΑΣ ΣΜΥΡΝΗΣ</option>
          <option value="ΝΕΑΣ ΦΙΛΑΔΕΛΦΕΙΑΣ-ΝΕΑΣ ΧΑΛΚΗΔΟΝΑΣ">ΝΕΑΣ ΦΙΛΑΔΕΛΦΕΙΑΣ-ΝΕΑΣ ΧΑΛΚΗΔΟΝΑΣ</option>
          <option value="ΝΕΜΕΑΣ">ΝΕΜΕΑΣ</option>
          <option value="ΝΕΣΤΟΡΙΟΥ">ΝΕΣΤΟΡΙΟΥ</option>
          <option value="ΝΕΣΤΟΥ">ΝΕΣΤΟΥ</option>
          <option value="ΝΙΚΑΙΑΣ-ΑΓΙΟΥ ΙΩΑΝΝΗ ΡΕΝΤΗ">ΝΙΚΑΙΑΣ-ΑΓΙΟΥ ΙΩΑΝΝΗ ΡΕΝΤΗ</option>
          <option value="ΝΙΚΟΛΑΟΥ ΣΚΟΥΦΑ">ΝΙΚΟΛΑΟΥ ΣΚΟΥΦΑ</option>
          <option value="ΝΙΣΥΡΟΥ">ΝΙΣΥΡΟΥ</option>
          <option value="ΝΟΤΙΑΣ ΚΕΡΚΥΡΑΣ">ΝΟΤΙΑΣ ΚΕΡΚΥΡΑΣ</option>
          <option value="ΝΟΤΙΑΣ ΚΥΝΟΥΡΙΑΣ">ΝΟΤΙΑΣ ΚΥΝΟΥΡΙΑΣ</option>
          <option value="ΝΟΤΙΟΥ ΠΗΛΙΟΥ">ΝΟΤΙΟΥ ΠΗΛΙΟΥ</option>
          <option value="ΞΑΝΘΗΣ">ΞΑΝΘΗΣ</option>
          <option value="ΞΗΡΟΜΕΡΟΥ">ΞΗΡΟΜΕΡΟΥ</option>
          <option value="ΞΥΛΟΚΑΣΤΡΟΥ-ΕΥΡΩΣΤΙΝΗΣ">ΞΥΛΟΚΑΣΤΡΟΥ-ΕΥΡΩΣΤΙΝΗΣ</option>
          <option value="ΟΙΝΟΥΣΣΩΝ">ΟΙΝΟΥΣΣΩΝ</option>
          <option value="ΟΙΧΑΛΙΑΣ">ΟΙΧΑΛΙΑΣ</option>
          <option value="ΟΡΕΣΤΙΑΔΑΣ">ΟΡΕΣΤΙΑΔΑΣ</option>
          <option value="ΟΡΟΠΕΔΙΟΥ ΛΑΣΙΘΙΟΥ">ΟΡΟΠΕΔΙΟΥ ΛΑΣΙΘΙΟΥ</option>
          <option value="ΟΡΧΟΜΕΝΟΥ">ΟΡΧΟΜΕΝΟΥ</option>
          <option value="ΠΑΓΓΑΙΟΥ">ΠΑΓΓΑΙΟΥ</option>
          <option value="ΠΑΙΑΝΙΑΣ">ΠΑΙΑΝΙΑΣ</option>
          <option value="ΠΑΙΟΝΙΑΣ">ΠΑΙΟΝΙΑΣ</option>
          <option value="ΠΑΛΑΙΟΥ ΦΑΛΗΡΟΥ">ΠΑΛΑΙΟΥ ΦΑΛΗΡΟΥ</option>
          <option value="ΠΑΛΑΜΑ">ΠΑΛΑΜΑ</option>
          <option value="ΠΑΛΛΗΝΗΣ">ΠΑΛΛΗΝΗΣ</option>
          <option value="ΠΑΞΩΝ">ΠΑΞΩΝ</option>
          <option value="ΠΑΠΑΓΟΥ-ΧΟΛΑΡΓΟΥ">ΠΑΠΑΓΟΥ-ΧΟΛΑΡΓΟΥ</option>
          <option value="ΠΑΡΑΝΕΣΤΙΟΥ">ΠΑΡΑΝΕΣΤΙΟΥ</option>
          <option value="ΠΑΡΓΑΣ">ΠΑΡΓΑΣ</option>
          <option value="ΠΑΡΟΥ">ΠΑΡΟΥ</option>
          <option value="ΠΑΤΜΟΥ">ΠΑΤΜΟΥ</option>
          <option value="ΠΑΤΡΕΩΝ">ΠΑΤΡΕΩΝ</option>
          <option value="ΠΑΥΛΟΥ ΜΕΛΑ">ΠΑΥΛΟΥ ΜΕΛΑ</option>
          <option value="ΠΕΙΡΑΙΩΣ">ΠΕΙΡΑΙΩΣ</option>
          <option value="ΠΕΛΛΑΣ">ΠΕΛΛΑΣ</option>
          <option value="ΠΕΝΤΕΛΗΣ">ΠΕΝΤΕΛΗΣ</option>
          <option value="ΠΕΡΑΜΑΤΟΣ">ΠΕΡΑΜΑΤΟΣ</option>
          <option value="ΠΕΡΙΣΤΕΡΙΟΥ">ΠΕΡΙΣΤΕΡΙΟΥ</option>
          <option value="ΠΕΤΡΟΥΠΟΛΕΩΣ">ΠΕΤΡΟΥΠΟΛΕΩΣ</option>
          <option value="ΠΗΝΕΙΟΥ">ΠΗΝΕΙΟΥ</option>
          <option value="ΠΛΑΤΑΝΙΑ">ΠΛΑΤΑΝΙΑ</option>
          <option value="ΠΟΛΥΓΥΡΟΥ">ΠΟΛΥΓΥΡΟΥ</option>
          <option value="ΠΟΡΟΥ">ΠΟΡΟΥ</option>
          <option value="ΠΡΕΒΕΖΑΣ">ΠΡΕΒΕΖΑΣ</option>
          <option value="ΠΡΕΣΠΩΝ">ΠΡΕΣΠΩΝ</option>
          <option value="ΠΡΟΣΟΤΣΑΝΗΣ">ΠΡΟΣΟΤΣΑΝΗΣ</option>
          <option value="ΠΥΔΝΑΣ-ΚΟΛΙΝΔΡΟΥ">ΠΥΔΝΑΣ-ΚΟΛΙΝΔΡΟΥ</option>
          <option value="ΠΥΛΑΙΑΣ-ΧΟΡΤΙΑΤΗ">ΠΥΛΑΙΑΣ-ΧΟΡΤΙΑΤΗ</option>
          <option value="ΠΥΛΗΣ">ΠΥΛΗΣ</option>
          <option value="ΠΥΛΟΥ-ΝΕΣΤΟΡΟΣ">ΠΥΛΟΥ-ΝΕΣΤΟΡΟΣ</option>
          <option value="ΠΥΡΓΟΥ">ΠΥΡΓΟΥ</option>
          <option value="ΠΩΓΩΝΙΟΥ">ΠΩΓΩΝΙΟΥ</option>
          <option value="ΡΑΦΗΝΑΣ-ΠΙΚΕΡΜΙΟΥ">ΡΑΦΗΝΑΣ-ΠΙΚΕΡΜΙΟΥ</option>
          <option value="ΡΕΘΥΜΝΗΣ">ΡΕΘΥΜΝΗΣ</option>
          <option value="ΡΗΓΑ ΦΕΡΑΙΟΥ">ΡΗΓΑ ΦΕΡΑΙΟΥ</option>
          <option value="ΡΟΔΟΥ">ΡΟΔΟΥ</option>
          <option value="ΣΑΛΑΜΙΝΑΣ">ΣΑΛΑΜΙΝΑΣ</option>
          <option value="ΣΑΜΗΣ">ΣΑΜΗΣ</option>
          <option value="ΣΑΜΟΘΡΑΚΗΣ">ΣΑΜΟΘΡΑΚΗΣ</option>
          <option value="ΣΑΡΩΝΙΚΟΥ">ΣΑΡΩΝΙΚΟΥ</option>
          <option value="ΣΕΡΒΙΩΝ">ΣΕΡΒΙΩΝ</option>
          <option value="ΣΕΡΙΦΟΥ">ΣΕΡΙΦΟΥ</option>
          <option value="ΣΕΡΡΩΝ">ΣΕΡΡΩΝ</option>
          <option value="ΣΗΤΕΙΑΣ">ΣΗΤΕΙΑΣ</option>
          <option value="ΣΙΘΩΝΙΑΣ">ΣΙΘΩΝΙΑΣ</option>
          <option value="ΣΙΚΙΝΟΥ">ΣΙΚΙΝΟΥ</option>
          <option value="ΣΙΚΥΩΝΙΩΝ">ΣΙΚΥΩΝΙΩΝ</option>
          <option value="ΣΙΝΤΙΚΗΣ">ΣΙΝΤΙΚΗΣ</option>
          <option value="ΣΙΦΝΟΥ">ΣΙΦΝΟΥ</option>
          <option value="ΣΚΙΑΘΟΥ">ΣΚΙΑΘΟΥ</option>
          <option value="ΣΚΟΠΕΛΟΥ">ΣΚΟΠΕΛΟΥ</option>
          <option value="ΣΚΥΔΡΑΣ">ΣΚΥΔΡΑΣ</option>
          <option value="ΣΚΥΡΟΥ">ΣΚΥΡΟΥ</option>
          <option value="ΣΟΥΛΙΟΥ">ΣΟΥΛΙΟΥ</option>
          <option value="ΣΟΥΦΛΙΟΥ">ΣΟΥΦΛΙΟΥ</option>
          <option value="ΣΟΦΑΔΩΝ">ΣΟΦΑΔΩΝ</option>
          <option value="ΣΠΑΡΤΗΣ">ΣΠΑΡΤΗΣ</option>
          <option value="ΣΠΑΤΩΝ-ΑΡΤΕΜΙΔΑΣ">ΣΠΑΤΩΝ-ΑΡΤΕΜΙΔΑΣ</option>
          <option value="ΣΠΕΤΣΩΝ">ΣΠΕΤΣΩΝ</option>
          <option value="ΣΤΥΛΙΔΑΣ">ΣΤΥΛΙΔΑΣ</option>
          <option value="ΣΥΜΗΣ">ΣΥΜΗΣ</option>
          <option value="ΣΥΡΟΥ-ΕΡΜΟΥΠΟΛΗΣ">ΣΥΡΟΥ-ΕΡΜΟΥΠΟΛΗΣ</option>
          <option value="ΣΦΑΚΙΩΝ">ΣΦΑΚΙΩΝ</option>
          <option value="ΤΑΝΑΓΡΑΣ">ΤΑΝΑΓΡΑΣ</option>
          <option value="ΤΕΜΠΩΝ">ΤΕΜΠΩΝ</option>
          <option value="ΤΗΛΟΥ">ΤΗΛΟΥ</option>
          <option value="ΤΗΝΟΥ">ΤΗΝΟΥ</option>
          <option value="ΤΟΠΕΙΡΟΥ">ΤΟΠΕΙΡΟΥ</option>
          <option value="ΤΡΙΚΚΑΙΩΝ">ΤΡΙΚΚΑΙΩΝ</option>
          <option value="ΤΡΙΠΟΛΗΣ">ΤΡΙΠΟΛΗΣ</option>
          <option value="ΤΡΙΦΥΛΙΑΣ">ΤΡΙΦΥΛΙΑΣ</option>
          <option value="ΤΡΟΙΖΗΝΙΑΣ-ΜΕΘΑΝΩΝ">ΤΡΟΙΖΗΝΙΑΣ-ΜΕΘΑΝΩΝ</option>
          <option value="ΤΥΡΝΑΒΟΥ">ΤΥΡΝΑΒΟΥ</option>
          <option value="ΥΔΡΑΣ">ΥΔΡΑΣ</option>
          <option value="ΦΑΙΣΤΟΥ">ΦΑΙΣΤΟΥ</option>
          <option value="ΦΑΡΚΑΔΟΝΑΣ">ΦΑΡΚΑΔΟΝΑΣ</option>
          <option value="ΦΑΡΣΑΛΩΝ">ΦΑΡΣΑΛΩΝ</option>
          <option value="ΦΙΛΙΑΤΩΝ">ΦΙΛΙΑΤΩΝ</option>
          <option value="ΦΙΛΟΘΕΗΣ-ΨΥΧΙΚΟΥ">ΦΙΛΟΘΕΗΣ-ΨΥΧΙΚΟΥ</option>
          <option value="ΦΛΩΡΙΝΑΣ">ΦΛΩΡΙΝΑΣ</option>
          <option value="ΦΟΛΕΓΑΝΔΡΟΥ">ΦΟΛΕΓΑΝΔΡΟΥ</option>
          <option value="ΦΟΥΡΝΩΝ ΚΟΡΣΕΩΝ">ΦΟΥΡΝΩΝ ΚΟΡΣΕΩΝ</option>
          <option value="ΦΥΛΗΣ">ΦΥΛΗΣ</option>
          <option value="ΧΑΪΔΑΡΙΟΥ">ΧΑΪΔΑΡΙΟΥ</option>
          <option value="ΧΑΛΑΝΔΡΙΟΥ">ΧΑΛΑΝΔΡΙΟΥ</option>
          <option value="ΧΑΛΚΗΔΟΝΟΣ">ΧΑΛΚΗΔΟΝΟΣ</option>
          <option value="ΧΑΛΚΗΣ">ΧΑΛΚΗΣ</option>
          <option value="ΧΑΛΚΙΔΕΩΝ">ΧΑΛΚΙΔΕΩΝ</option>
          <option value="ΧΑΝΙΩΝ">ΧΑΝΙΩΝ</option>
          <option value="ΧΕΡΣΟΝΗΣΟΥ">ΧΕΡΣΟΝΗΣΟΥ</option>
          <option value="ΧΙΟΥ">ΧΙΟΥ</option>
          <option value="ΩΡΑΙΟΚΑΣΤΡΟΥ">ΩΡΑΙΟΚΑΣΤΡΟΥ</option>
          <option value="ΩΡΩΠΟΥ">ΩΡΩΠΟΥ</option>

        </select>
        <div className = "selected-areas-ad-button-add">
          <button type="button" onClick={handleAddArea}>
            Προσθήκη Δήμου
          </button>
        </div>
        {/* Display selected areas */}

        {selectedAreas.length > 0 && (
          <div className="selected-areas-ad">
            
            <p>Επιλεγμένες Περιοχές:</p>
            <ul>
              {selectedAreas.map((area, index) => (
                <li key={index}>
                  {area}{" "}
                  <button
                    type="button"
                    onClick={() => handleRemoveArea(area)}
                    className="remove-area-button-ad"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* Υπάρχει Δυνατότητα Φιλοξενίας */}
      <div className="radio-group2">
        <label className="label-nanny-register-ad-creation">Υπάρχει Δυνατότητα Φιλοξενίας στην Οικία σας;</label>
        <div className="radio-group-inline">
          <label className="label-nanny">
            <input
              type="radio"
              name="accommodation"
              value = "Ναι"
              checked={accommodation === "Ναι"}
              onChange={handleAccommodationChange}
            />{" "}
            Ναι
          </label>
          <label className="label-nanny">
            <input
              type="radio"
              name="accommodation"
              value = "Όχι"
              checked={accommodation === "Όχι"}
              onChange={handleAccommodationChange}
            />{" "}
            Όχι
          </label>
        </div>
        {accommodation === "Ναι" && (
          <div className="dynamic-content">
            <div>
              <label className="label-nanny-register-ad-creation">Αριθμός Συνοικούντων:</label>
              <input
                type="number"
                name="cohabitants"
                min="0"
                value = {cohabitants}
                onChange={handleCohabitantsChange}
              />
            </div>
          </div>
        )}
      </div>


      {/* Χρόνια Προϋπηρεσίας */}
      <div className="years_of_service">
        <label className="label-nanny-register-ad-creation">Χρόνια Προϋπηρεσίας</label>
        <input type="number" min="0"
          value={yearsOfExperience}
          onChange={handleYearsChange} />
      </div>

      <label className="label-nanny-register-ad-creation">Ηλικία Παιδιού (Σε μήνες):<br/>{childageRange[0]} - {childageRange[1]}</label>
      <div className="experience-slider-ad">
          <div
          className="slider-track"
          style={{ background: "#ccc" }}
          ></div>
          <div
          className="slider-active-track"
          style={{
              left: `${((childageRange[0] -2)/ 28) * 100}%`,
              width: `${((childageRange[1] - childageRange[0]) / 28) * 100}%`,
              background: "#007bff"
          }}
          ></div>
          <input
          type="range"
          name="min"
          min="2"
          max="30"
          value={childageRange[0]}
          onChange={handleChildAgeChange}
          className="slider"
          />
          <input
          type="range"
          name="max"
          min="2"
          max="30"
          value={childageRange[1]}
          onChange={handleChildAgeChange}
          className="slider"
          />
      </div>

      

      {/* Γλώσσες που Γνωρίζετε */}
      <label className="label-nanny-register-ad-creation">Γλώσσες που Γνωρίζετε</label>
      <div className="section_ad">
        {["Αγγλικά", "Γαλλικά", "Ιταλικά", "Ισπανικά", "Αραβικά"].map((lang) => (
          <label className="label-nanny" key={lang}>
            <input
              type="checkbox"
              checked={checkboxLanguages[lang] || false}
              onChange={(e) =>
                handleLanguagesChange(lang, e.target.checked)
              }
            />{" "}
            {lang}
          </label>
        ))}
        <label className="label-nanny">
          <input
            type="checkbox"
            onChange={(e) => setOtherLanguage(e.target.checked)}
          />{" "}
          Άλλη Γλώσσα
        </label>
        {/* Conditionally render the input if "Άλλη Γλώσσα" is checked */}
        {otherLanguage && (
          <div>
            <label className="label-nanny"> Εισάγετε τις άλλες γλώσσες που γνωρίζετε:</label>
            <input
              type="text"
              placeholder="Πληκτρολογήστε γλώσσα"
              value={customLanguage}
              onChange={(e) => setCustomLanguage(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Επιπλέον Παροχές */}
      <label className="label-nanny-register-ad-creation">Επιπλέον Παροχές</label>
      <div className="section_ad">
        {["Δίπλωμα Οδήγησης", "Παιδιά με Ειδικές Ανάγκες", "Νοηματική Γλώσσα", "Κώδικας Μπράιγ"].map(
          (feature) => (
            <label className="label-nanny" key={feature}>
              <input
                type="checkbox"
                checked={additionalFeatures[feature] || false}
                onChange={(e) =>
                  handleAdditionalFeaturesChange(feature, e.target.checked)
                }
              />{" "}
              {feature}
            </label>
          )
        )}
      </div>

      <div className="button-group-nannies-ad-creation">
        <button type="button" className="ad-clear-form1" onClick={clearForm}>
          Εκκαθάριση
        </button>
        <button type="button" onClick={() => window.location.href = `${window.location.origin}/Ntantades/Prosorini_Apothikefsi`}>
          Προσωρινή Αποθήκευση
        </button>
        <button type="button" onClick={() => window.location.href = `${window.location.origin}/Ntantades/Oristiki_Ypovoli`}>
          Οριστική Υποβολή
        </button>
      </div>
    </div>
  );
};

export default AdForm;
