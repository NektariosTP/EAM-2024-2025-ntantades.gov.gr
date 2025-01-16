import React, { useState, useEffect } from "react";
import "./NannyEditForm3.css";
import { useNavigate } from "react-router-dom";

function NannyEditForm3() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    educationLevel: "",
    specialization: "",
    educationCertification: [null],
    firstAidCertification: [null],
    healthCertificationPathology: [null],
    healthCertificationDermatology: [null],
    healthCertificationMentalHealth: [null],
    criminalRecord: [null],
    languageCertification: [null],
    interestedInFirstAidClasses: "no", 
    agreeToTakeFirstAidClasses: false, 
  });
  
  useEffect(() => {
    // Load saved form data from localStorage when the component mounts
    const savedData = localStorage.getItem("nannyFormData3");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const [errors, setErrors] = useState({});

  
  const specializationOptions = {
    bachelor: [
      "Πτυχίο ΑΕΙ Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία/ Τμήμα Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία/ Σχολή Διοικητικών, Οικονομικών και Κοινωνικών Επιστημών/ Πανεπιστήμιο Δυτικής Αττικής ή ισότιμος τίτλος",
      "Πτυχίο ΑΕΙ Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία/ Τμήμα Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία/ Σχολή Κοινωνικών Επιστημών/ Διεθνές Πανεπιστήμιο της Ελλάδας ή ισότιμος τίτλος",
      "Πτυχίο ΑΕΙ Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία/ Τμήμα Αγωγής και Φροντίδας στην Πρώιμη Παιδική Ηλικία/ Σχολή Κοινωνικών Επιστημών/ Πανεπιστήμιο Ιωαννίνων ή ισότιμος τίτλος",
      "Πτυχίο ΤΕΙ Προσχολικής Αγωγής/ Τμήμα Προσχολικής Αγωγής/ Σχολή Επαγγελμάτων Υγείας και Πρόνοιας/ ΤΕΙ Αθήνας ή ισότιμος τίτλος",
      "Πτυχίο ΤΕΙ Προσχολικής Αγωγής/ Τμήμα Προσχολικής Αγωγής/ Σχολή Επαγγελμάτων Υγείας και Πρόνοιας/ Αλεξάνδρειο Τεχνολογικό Εκπαιδευτικό Ίδρυμα Θεσσαλονίκης ή ισότιμος τίτλος",
      "Πτυχίο ΤΕΙ Προσχολικής Αγωγής/ Τμήμα Προσχολικής Αγωγής/ Σχολή Επαγγελμάτων Υγείας και Πρόνοιας/ ΤΕΙ Ηπείρου ή ισότιμος τίτλος",
      "Πτυχίο ΤΕΙ Βρεφονηπιοκομίας/ Τμήμα Βρεφονηπιοκομίας/ Σχολή Επαγγελμάτων Υγείας και Πρόνοιας/ ΤΕΙ Αθήνας ή ισότιμος τίτλος",
      "Πτυχίο ΤΕΙ Βρεφονηπιοκομίας/ Τμήμα Βρεφονηπιοκομίας/ Σχολή Επαγγελμάτων Υγείας και Πρόνοιας/ ΤΕΙ Θεσσαλονίκης ή ισότιμος τίτλος",
      "Πτυχίο ΤΕΙ Βρεφονηπιοκομίας/ Τμήμα Βρεφονηπιοκομίας/ Σχολή Επαγγελμάτων Υγείας και Πρόνοιας/ ΤΕΙ Ηπείρου ή ισότιμος τίτλος",
      "Πτυχίο Ανωτέρας Σχολής Νηπιοβρεφοκόμων του Κέντρου Βρεφών «Η ΜΗΤΕΡΑ»",
      "Πτυχίο Ανωτέρας Σχολής Νηπιοβρεφοκόμων του ΠΙΚΠΑ Ιωαννίνων"
    ],
    secondary: [
      "Πτυχίο ΕΠΑΛ της ειδικότητας «Βοηθός Βρεφονηπιοκόμων» επίπεδο 4 ΕΠΠ ή ισότιμος τίτλος",
      "Πτυχίο Τεχνικού Επαγγελματικού Λυκείου (ΤΕΛ) του τομέα Κοινωνικών Υπηρεσιών, Τμήματος Βοηθών Βρεφοκόμων Παιδοκόμων ή ισότιμος τίτλος",
      "Πτυχίο του Τμήματος Ειδίκευσης συναφούς ειδικότητας του Κλάδου Κοινωνικής Πρόνοιας Ενιαίου Πολυκλαδικού Λυκείου (ΕΠΛ) ή ισότιμος τίτλος",
      "Πτυχίο Τεχνικού Επαγγελματικού Εκπαιδευτηρίου (ΤΕΕ) Β΄ Κύκλου της ειδικότητας Βοηθός Βρεφονηπιοκόμων ή ισότιμος τίτλος",
      "Πτυχίο ΕΠΑΣ μαθητείας ΟΑΕΔ ειδικότητας «Βοηθός Γενικής Βρεφονηπιοκομίας» επίπεδο 4 ΕΠΠ ή ισότιμος τίτλος",
      "Πτυχίο Τεχνικού Επαγγελματικού Εκπαιδευτηρίου (ΤΕΕ) Α΄ Κύκλου της ειδικότητας",
      "Βοηθός Βρεφονηπιοκόμων ή ισότιμος τίτλος" 
    ],
    post_secondary: [
      "Δίπλωμα Επαγγελματικής Ειδικότητας, Εκπαίδευσης και Κατάρτισης Επιπέδου 5 ΙΕΚ -Ειδικότητα: Προσχολική Αγωγή Δραστηριοτήτων Δημιουργίας και Έκφρασης ή ισότιμος τίτλος",
      "Δίπλωμα Επαγγελματικής Ειδικότητας, Εκπαίδευσης και Κατάρτισης Επιπέδου 5 ΙΕΚ – Ειδικότητα: Προσχολική Αγωγή Ημερήσιας Φροντίδας παιδιών με ειδικές ανάγκες ή ισότιμος τίτλος", 
      "Δίπλωμα Επαγγελματικής Ειδικότητας, Εκπαίδευσης και Κατάρτισης Επιπέδου 5 ΙΕΚ -Ειδικότητα: Βοηθός Βρεφονηπιοκόμων ή ισότιμος τίτλος",
      "Δίπλωμα Επαγγελματικής Ειδικότητας, Εκπαίδευσης και Κατάρτισης Επιπέδου 5 Μεταλυκειακού έτους Μαθητείας ΕΠΑΛ -Ειδικότητα: Βοηθός Βρεφονηπιοκόμων ή ισότιμος τίτλος"
    ],
    other_education: [
      "Διαδικτυακή Εκπαίδευση",
      "Πτυχίο ΕΠΑΣ μαθητείας ΟΑΕΔ ειδικότητας «Βοηθός Γενικής Βρεφονηπιοκομίας» επίπεδο 3 ή ισότιμος τίτλος"],
  };

  const handleFileChange = (e, name, index) => {
    const files = [...formData[name]];
    files[index] = e.target.files[0];
  
    // Update the form data
    const updatedFormData = {
      ...formData,
      [name]: files,
    };
  
    setFormData(updatedFormData);
  
    // Save to local storage
    localStorage.setItem("nannyFormData3", JSON.stringify(updatedFormData));
  
    // Clear the error for this field when a file is selected
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };
  
  const handleDeleteFile = (name, index) => {
    setFormData((prev) => {
      const updatedFiles = prev[name].filter((_, i) => i !== index);
  
      const newFiles = updatedFiles.length > 0 ? updatedFiles : [null];
  
      const fileInput = document.querySelector(`input[name="${name}[${index}]"]`);
      if (fileInput) fileInput.value = ""; 
  
      const updatedFormData = {
        ...prev,
        [name]: newFiles,
      };
  
      // Save to local storage
      localStorage.setItem("nannyFormData3", JSON.stringify(updatedFormData));
  
      return updatedFormData;
    });
  };
  
  const handleViewFile = (file) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    }
  };
  
  const addFileField = (name) => {
    setFormData((prev) => {
      const updatedFormData = {
        ...prev,
        [name]: [...prev[name], null],
      };
  
      // Save to local storage
      localStorage.setItem("nannyFormData3", JSON.stringify(updatedFormData));
  
      return updatedFormData;
    });
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
  
    setFormData(updatedFormData);
  
    // Save to local storage
    localStorage.setItem("nannyFormData3", JSON.stringify(updatedFormData));
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  
  };

  const handleClearForm = () => {
    // Reset form data to initial state
    setFormData({
      educationLevel: "",
      specialization: "",
      educationCertification: [null],
      firstAidCertification: [null],
      healthCertificationPathology: [null],
      healthCertificationDermatology: [null],
      healthCertificationMentalHealth: [null],
      criminalRecord: [null],
      languageCertification: [null],
      interestedInFirstAidClasses: "no",
      agreeToTakeFirstAidClasses: false, 
    });
  
    setErrors({});
  
    const fileInputs = document.querySelectorAll("input[type='file']");
    fileInputs.forEach((input) => {
      input.value = "";
    });
  
    localStorage.removeItem("nannyFormData3");
  };

  const validateField = (name, value) => {
    let error = "";
  
    if (name === "educationLevel" && !value){
      error = "Πρέπει να συμπληρώσετε το πεδίο.";
    }
    if (Array.isArray(value)) {
      // Validate file fields for arrays
      if (value.every((file) => file === null) && name !== "healthCertificationPathology" && name !== "healthCertificationDermatology" && 
        name !== "healthCertificationMentalHealth" && name !== "languageCertification" && name !== "firstAidCertification") {
        error = "Πρέπει να ανεβάσετε τουλάχιστον ένα αρχείο.";
      }
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error; 
      }
      
    });
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
  
      console.log("Form Data Submitted: ", formData);
      navigate("/Ntantades/Profil");
    }
    else{
      console.log("Validation Errors: ", newErrors);
    }
  };
  

  const renderFileInput = (label, name) => (
    <div className="form-group">
      {/* Conditionally render the additional text for "criminal_record" */}
      {name === "criminalRecord" && (
        <div className="warning_criminal_record_text">Ποινικό μητρώο γενικής χρήσης που είναι σε ισχύ και έχει εκδοθεί
        εντός του τελευταίου τριμήνου</div>
      )}
      <label className="nanny-label">{label}</label>
      {formData[name].map((file, index) => (
        <div key={index} className="file-upload-row">
          <input
            type="file"
            accept=".pdf, .jpg, .jpeg, .png" // Restrict file types
            onChange={(e) => handleFileChange(e, name, index)}
            name={`${name}[${index}]`} 
            className={errors[name] ? "input-nanny" : ""}
          />
          {file && (
            <div className="file-actions" style={{ display: "flex", gap: "3px" }}>
              <button type="button" onClick={() => handleViewFile(file)}>
                <img src="/viewfile.png" alt="View" />
              </button>
              <button type="button" onClick={() => handleDeleteFile(name, index)}>
                <img src="/trashcan.png" alt="Delete" />
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="warning_for_file">
        Προσοχή! Μόνο αρχεία της μορφής .pdf, .png, .jpg και .jpeg γίνονται αποδεκτά
      </div>
      <div className="add-file-container">
        <button type="button" className="add-file-button" onClick={() => addFileField(name)}>
          +
        </button>
        <span className="add-file-text">Προσθηκη Δικαιολογητικου</span>
      </div>
      {/* Display error messages for file inputs */}
      {errors[name] && <div className="error-message">{errors[name]}</div>}
    </div>
  );

  const renderFileInput2 = (label, name) => (
    <div className="form-group">
      {/* Conditionally render the additional text for "criminal_record" */}
      {name === "criminalRecord" && (
        <div className="warning_criminal_record_text">Ποινικό μητρώο γενικής χρήσης που είναι σε ισχύ και έχει εκδοθεί
        εντός του τελευταίου τριμήνου</div>
      )}
      <label className="nanny-label">{label}</label>
      {formData[name].map((file, index) => (
        <div key={index} className="file-upload-row">
          <input
            type="file"
            accept=".pdf, .jpg, .jpeg, .png" // Restrict file types
            onChange={(e) => handleFileChange(e, name, index)}
            name={`${name}[${index}]`} 
            className={errors[name] ? "input-nanny" : ""}
          />
          {file && (
            <div className="file-actions" style={{ display: "flex", gap: "3px" }}>
              <button type="button" onClick={() => handleViewFile(file)}>
                <img src="/viewfile.png" alt="View" />
              </button>
              <button type="button" onClick={() => handleDeleteFile(name, index)}>
                <img src="/trashcan.png" alt="Delete" />
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="warning_for_file">
        Προσοχή! Μόνο αρχεία της μορφής .pdf, .png, .jpg και .jpeg γίνονται αποδεκτά
      </div>
      {/* Display error messages for file inputs */}
      {errors[name] && <div className="error-message">{errors[name]}</div>}
    </div>
  );
  

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>3. Συμπλήρωση Πιστοποιητικών</h1>
      <p>
        Συμπληρώστε τα παρακάτω στοιχεία επικοινωνίας. Στα πεδία όπου υπάρχει
        (*), σημαίνει ότι η συμπλήρωση στοιχείου είναι υποχρεωτική.
      </p>

      <div className="form-group">
        <label className="nanny-label">Επίπεδο Εκπαίδευσης (*)</label>
        <select
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          className={errors.educationLevel ? "error" : ""}
        >
          <option value="">Επιλέξτε Επίπεδο Εκπαίδευσης</option>
          <option value="bachelor">Ανώτατη Εκπαίδευση</option>
          <option value="secondary">Δευτεροβάθμια Επαγγελματική Εκπαίδευση</option>
          <option value="post_secondary">Μεταδευτεροβάθμια Επαγγελματική Εκπαίδευση/Κατάρτιση</option>
          <option value="other_education">Άλλο</option>
        </select>
        {errors.educationLevel && (
          <div className="error-message">{errors.educationLevel}</div>
        )}
      </div>

      {/* Specialization field appears only when education level is selected */}
      {formData.educationLevel && (
        <div className="form-group">
          <label className="nanny-label">Ειδικότητα (*)</label>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className={errors.specialization ? "error" : ""}
          >
            <option value="">Επιλέξτε Ειδικότητα</option>
            {specializationOptions[formData.educationLevel].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="text_for_web_specialty"> 
              Αν δεν ανήκετε στις παραπάνω ειδικότητες και επιθυμείτε την εγγραφή σας στο μητρώο επιμελητών, 
              μπορείτε να παρακολουθήσετε το διαδικτυακό μάθημα για την εκπαίδευση επιμελητών στο 
              https://howto.gov.gr/login/?wantsurl=/course/view.php?id=59  και αφού το ολοκληρώσετε με επιτυχία 
              να επιστρέψετε στην εφαρμογή και στην Ειδικότητα να επιλέξετε «Διαδικτυακή εκπαίδευση».
          </div>
          {errors.specialization && (
            <div className="error-message">{errors.specialization}</div>
          )}
        </div>
      )}

      {renderFileInput("Πιστοποιητικό Εκπαίδευσης(*)", "educationCertification")}

      <label className="nanny-label">Ενδιαφέρεστε για Πρώτες Βοήθειες;</label>
        <div className="radio-group3">
          <label className="nanny-label">
            <input className="input-nanny"
              type="radio"
              name="interestedInFirstAidClasses"
              value="yes"
              checked={formData.interestedInFirstAidClasses === "yes"}
              onChange={handleChange}
            />
            Ναι
          </label>
          <label className="nanny-label">
            <input className="input-nanny"
              type="radio"
              name="interestedInFirstAidClasses"
              value="no"
              checked={formData.interestedInFirstAidClasses === "no"}
              onChange={handleChange}
            />
            Όχι
          </label>
        </div>

      {formData.interestedInFirstAidClasses === "yes" ? (
        renderFileInput("Πιστοποιητικό Πρώτων Βοηθειών", "firstAidCertification")
        ) : (
        
        <div className="form-group">
          <div className="text_for_first_aid"> Σε περίπτωση που δεν διαθέτετε πιστοποιητικό ή βεβαίωση πρώτων βοηθειών 
              και επιθυμείτε να αποκτήσετε το πιστοποιητικό πρώτων βοηθειών του ΕΚΑΒ, 
              παρακαλώ επιλέξτε το παρακάτω πεδίο.
          </div>
          <label className="nanny-label">
            <input
              type="checkbox"
              name="agreeToTakeFirstAidClasses"
              checked={formData.agreeToTakeFirstAidClasses}
              onChange={handleChange}
              className={errors.agreeToTakeFirstAidClasses ? "input-nanny" : ""}
            />
            Ενδιαφέρομαι να παρακολουθήσω μαθήματα πρώτων βοηθειών
          </label>
          {errors.agreeToTakeFirstAidClasses && (
            <div className="error-message">{errors.agreeToTakeFirstAidClasses}</div>
          )}
        </div>
      )}
      {renderFileInput2("Πιστοποιητικό Υγείας - Παθολόγος/Γενικός Ιατρός", "healthCertificationPathology")}
      {renderFileInput2("Πιστοποιητικό Υγείας - Δερματολόγος", "healthCertificationDermatology")}
      {renderFileInput2("Πιστοποιητικό Υγείας - Ψυχικής Υγείας", "healthCertificationMentalHealth")}
      {renderFileInput2("Απόσπασμα Ποινικού Μητρώου(*)", "criminalRecord")}
      {renderFileInput2("Πιστοποιητικό Γλωσσομάθειας (για αλλοδαπούς)", "languageCertification")}

      <div className="button-group3-nannies">
        <button type="button" className="clear-button" onClick={handleClearForm}>
          Εκκαθάριση Φόρμας
        </button>
        <button type="submit" className="submit-button">
          Οριστικοποίηση
        </button>
      </div>
    </form>
  );
}

export default NannyEditForm3;

