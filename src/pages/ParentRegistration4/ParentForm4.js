import React, { useState, useEffect } from "react";
import "./ParentForm4.css";
import { useNavigate } from "react-router-dom";

function ParentForm4() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    provideArea: "",
    healthDocuments: [null],
    dateOfBirth: "",
  });

  const [touched, setTouched] = useState({});
  const greekRegex = /^[\u0370-\u03FF\s]+$/;
  
  useEffect(() => {
    // Load saved form data from localStorage when the component mounts
    const savedData = localStorage.getItem("parentFormData4");
    if (savedData) {
      setFormData(JSON.parse(savedData));

    }
  }, []); 

  const [errors, setErrors] = useState({});


  const handleFileChange = (e, name, index) => {
    const files = [...formData[name]];
    files[index] = e.target.files[0];
  
    const updatedFormData = {
      ...formData,
      [name]: files,
    };
  
    setFormData(updatedFormData);
  
    // Save to local storage
    localStorage.setItem("parentFormData4", JSON.stringify(updatedFormData));
  
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
      localStorage.setItem("parentFormData4", JSON.stringify(updatedFormData));
  
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
      localStorage.setItem("parentFormData4", JSON.stringify(updatedFormData));
  
      return updatedFormData;
    });
  };
  

  const handleClearForm = () => {
    // Reset form data to initial state
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      provideArea: "",
      healthDocuments: [null],
      dateOfBirth: "",
    });
  
    setErrors({});
  
    const fileInputs = document.querySelectorAll("input[type='file']");
    fileInputs.forEach((input) => {
      input.value = "";
    });
  
    localStorage.removeItem("parentFormData4");
  };

  const validateField = (name, value) => {
    let error = "";
    if (["firstName", "lastName"].includes(name)) {
      if (!greekRegex.test(value)) {
        error = "Μόνο ελληνικοί χαρακτήρες επιτρέπονται";
      }
    }else if (name === "dateOfBirth") {
      if (!value) {
        error = "Η ημερομηνία γέννησης είναι υποχρεωτική";
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
      if (!value && field !== "provideArea") {
        newErrors[field] = "Απαιτείται η συμπλήρωση του πεδίου";
      } else if (error) {
        newErrors[field] = error;
      }
    });
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
  
      // Submit data or navigate to the next page
      console.log("Form Data Submitted: ", formData);
      navigate("/Goneis/Eggrafi/5");
    }
    else{
      console.log("Validation Errors: ", newErrors);
    }
  };

  const renderFileInput = (label, name) => (
    <div className="form-group">
      <label className="label-nanny">{label}</label>
      <div className="warning_criminal_record_text">Εάν απαιτούνται περαιτέρω ιατρικές πληροφορίες, θα χρειαστεί να υποβάλετε 
          έγκυρα και ενημερωμένα έγγραφα, όπως ιατρική βεβαίωση ή ειδικές γνωματεύσεις που σχετίζονται με τις ανάγκες του παιδιού</div>
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

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update form data
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
  
    setFormData(updatedFormData);
  
    // Store updated form data in localStorage
    localStorage.setItem("parentFormData4", JSON.stringify(updatedFormData));
  
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (updatedErrors[name] === "Απαιτείται η συμπλήρωση του πεδίου") {
        delete updatedErrors[name];
      }
      return updatedErrors;
    });
  
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors, [name]: error };
        if (!error) delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>4.Συμπλήρωση Στοιχείων Παιδιού</h1>
      <p> Συμπληρώστε τα παρακάτω στοιχεία σχετικά με το παιδί σας. Στα πεδία όπου υπάρχει (*), 
        σημαίνει ότι η συμπλήρωση στοιχείου είναι υποχρεωτική.</p>
        <label className="label-nanny-register">Όνομα Παιδιού(*)</label>
      <div className="hint">Μόνο ελληνικοί χαρακτήρες</div>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={touched.firstName ? "input-nanny" : ""}
      />
      {errors.firstName && <div className="error-message">{errors.firstName}</div>}
      

      <label className="label-nanny-register">Επώνυμο Παιδιού(*)</label>
      <div className="hint">Μόνο ελληνικοί χαρακτήρες</div>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={touched.lastName ? "input-nanny" : ""}
      />
      {errors.lastName && <div className="error-message">{errors.lastName}</div>}
      
      <label className="label-nanny-register">Φύλο (*)</label>
      <div className="radio-group1">
        <label className="label-nanny-register">
          <input className="input-nanny"
            type="radio"
            name="gender"
            value="Αγόρι"
            checked={formData.gender === "Αγόρι"}
            onChange={handleChange}
          />
          Αγόρι
        </label>
        <label className="label-nanny-register">
          <input className="input-nanny"
            type="radio"
            name="gender"
            value="Κορίτσι"
            checked={formData.gender === "Κορίτσι"}
            onChange={handleChange}
          />
          Κορίτσι
        </label>
      </div>
      {errors.gender && <span className="error-message">{errors.gender}</span>}

      <label className="label-nanny-register">Ημερομηνία Γέννησης(*)</label>
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={touched.dateOfBirth ? "input-nanny" : ""}
      />
      {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}

      <label className="label-nanny-register">Χώρος Παροχής Φροντίδας</label>
      <div className="radio-group1">
        <label className="label-nanny-register">
          <input className="input-nanny"
            type="radio"
            name="provideArea"
            value="Στον_χώρο_του_γονέα"
            checked={formData.provideArea === "Στον_χώρο_του_γονέα"}
            onChange={handleChange}
          />
          Στον χώρο του Γονέα
        </label>
        <label className="label-nanny-register">
          <input className="input-nanny"
            type="radio"
            name="provideArea"
            value="Στον_χώρο_της_νταντάς"
            checked={formData.provideArea === "Στον_χώρο_της_νταντάς"}
            onChange={handleChange}
          />
          Στον χώρο της Νταντάς
        </label>
      </div>
      {errors.provideArea && <span className="error-message">{errors.provideArea}</span>}
      {renderFileInput("Ιατρικές Πληροφορίες και Γνωματεύσεις", "healthDocuments")}


      <div className="button-group4-nannies">
        <button type="button" className="back-button" onClick={() => navigate("/Goneis/Eggrafi/3")}>
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

export default ParentForm4;

