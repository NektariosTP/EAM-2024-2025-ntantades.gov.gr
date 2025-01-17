import React, { useState, useEffect } from "react";
import "./ParentForm3.css";
import { useNavigate } from "react-router-dom";

function ParentForm3() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    workStatus: "",
    workStatusCertification: [null],
    taxIncomeCertification: [null],
    familyStatusCertification: [null],
  });
  
  useEffect(() => {
    // Load saved form data from localStorage when the component mounts
    const savedData = localStorage.getItem("parentFormData3");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const [errors, setErrors] = useState({});

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
    localStorage.setItem("parentFormData3", JSON.stringify(updatedFormData));
  
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
      localStorage.setItem("parentFormData3", JSON.stringify(updatedFormData));
  
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
      localStorage.setItem("parentFormData3", JSON.stringify(updatedFormData));
  
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
    localStorage.setItem("parentFormData3", JSON.stringify(updatedFormData));
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  
  };

  const handleClearForm = () => {
    // Reset form data to initial state
    setFormData({
      workStatus: "",
      workStatusCertification: [null],
      taxIncomeCertification: [null],
      familyStatusCertification: [null],
    });
  
    setErrors({});
  
    const fileInputs = document.querySelectorAll("input[type='file']");
    fileInputs.forEach((input) => {
      input.value = "";
    });
  
    localStorage.removeItem("parentFormData3");
  };

  const validateField = (name, value) => {
    let error = "";
  
    
    if (Array.isArray(value)) {
      if (value.every((file) => file === null) && name !== "familyStatusCertification") {
        error = "Πρέπει να ανεβάσετε τουλάχιστον ένα αρχείο.";
      }
    }

    if (name === "workStatus" && !value){
      error = "Πρέπει να συμπληρώσετε το πεδίο.";
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
      window.location.href = `${window.location.origin}/Goneis/Eggrafi/4`;
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
        <label className="nanny-label">Υφιστάμενη Επαγγελματική Κατάσταση (*)</label>
        <select
          name="workStatus"
          value={formData.workStatus}
          onChange={handleChange}
          className={errors.workStatus ? "error" : ""}
        >
          <option value="">Επιλέξτε Υφιστάμενη Επαγγελματική Κατάσταση</option>
          <option value="unemployed">Άνεργος</option>
          <option value="fulltime">Σε καθεστώς Πλήρους Απασχόλησης</option>
          <option value="parttime">Σε καθεστώς Μερικούς Απασχόλησης</option>
          <option value="freeemployee">Ελεύθερος Επαγγελματίας</option>
          <option value="other">Άλλο</option>
        </select>
        {errors.workStatus && (
          <div className="error-message">{errors.workStatus}</div>
        )}
      </div>

      {/* Specialization field appears only when education level is selected */}

      {renderFileInput("Πιστοποιητικό Υφιστάμενης Επαγγελματική Κατάστασης (*)", "workStatusCertification")}
      {renderFileInput("Δήλωση Φορολογίας Εισοδήματος (*)", "taxIncomeCertification")}
      {renderFileInput2("Πιστοποιητικό Οικογενειακής Κατάστασης", "familyStatusCertification")}
      <div className="button-group3-nannies">
        <button type="button" className="back-button" onClick={() =>window.location.href = `${window.location.origin}/Goneis/Eggrafi/2`}>
          Πίσω
        </button>
        <button type="button" className="clear-button" onClick={handleClearForm}>
          Εκκαθάριση Φόρμας
        </button>
        <button type="submit" className="submit-button">
          Συνέχεια
        </button>
      </div>
    </form>
  );
}

export default ParentForm3;

