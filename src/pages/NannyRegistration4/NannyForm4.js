import React, { useState, useEffect } from "react";
import "./NannyForm4.css";
import { useNavigate } from "react-router-dom";

function NannyForm4() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    photography: [null],
    biographyNote: [null],
    recommendationLetters: [null],
    message_bio: "",
  });
  
  useEffect(() => {
    // Load saved form data from localStorage when the component mounts
    const savedData = localStorage.getItem("nannyFormData4");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      setMessage(parsedData.message_bio || "");
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
    localStorage.setItem("nannyFormData4", JSON.stringify(updatedFormData));
  
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
      localStorage.setItem("nannyFormData4", JSON.stringify(updatedFormData));
  
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
      localStorage.setItem("nannyFormData4", JSON.stringify(updatedFormData));
  
      return updatedFormData;
    });
  };
  

  const handleClearForm = () => {
    // Reset form data to initial state
    setFormData({
      photography: [null],
      biographyNote: [null],
      recommendationLetters: [null],
      message_bio: "",
    });

    setMessage("");
  
    setErrors({});
  
    const fileInputs = document.querySelectorAll("input[type='file']");
    fileInputs.forEach((input) => {
      input.value = "";
    });
  
    localStorage.removeItem("nannyFormData4");
  };

  const validateField = (name, value) => {
    let error = "";
    
    if (Array.isArray(value)) {
      if (value.every((file) => file === null) && name !== "recommendationLetters") {
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
  
      // Submit data or navigate to the next page
      console.log("Form Data Submitted: ", formData);
      window.location.href = `${window.location.origin}/Ntantades/Eggrafi/5`;
    }
    else{
      console.log("Validation Errors: ", newErrors);
    }
  };

  const renderFileInput3 = (label, name) => (
    <div className="form-group">
      {/* Conditionally render the additional text for "criminal_record" */}
      <label className="label-nanny">{label}</label>
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
      <label className="label-nanny">{label}</label>
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

  const renderFileInput1 = (label, name) => (
    <div className="form-group">
      {/* Conditionally render the additional text for "criminal_record" */}
      <label className="label-nanny">{label}</label>
      {formData[name].map((file, index) => (
        <div key={index} className="file-upload-row">
          <input
            type="file"
            accept=".jpg, .jpeg, .png" // Restrict file types
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
        Προσοχή! Μόνο αρχεία της μορφής .png, .jpg και .jpeg γίνονται αποδεκτά
      </div>
      {errors[name] && <div className="error-message">{errors[name]}</div>}
    </div>
  );

  const [message, setMessage] = useState("");
  const maxMessageLength = 300;
  
  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    
    if (newMessage.length <= maxMessageLength) {
      setMessage(newMessage);
      
      const updatedFormData = {
        ...formData,
        message_bio: newMessage,
      };
      setFormData(updatedFormData);
      
      // Save to local storage
      localStorage.setItem("nannyFormData4", JSON.stringify(updatedFormData));
    }
  };
  

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>4.Δημιουργία Βιογραφικού</h1>
      <p> Συμπληρώστε τα παρακάτω στοιχεία σχετικά με το βιογραφικόυ σας. Στα πεδία όπου υπάρχει (*), 
        σημαίνει ότι η συμπλήρωση στοιχείου είναι υποχρεωτική.</p>
      
      {renderFileInput1("Προσθέστε μια Φωτογραφία σας (*)", "photography")}
      {renderFileInput2("Βιογραφικό Σημείωμα (*)", "biographyNote")}
      {renderFileInput3("Συστατικές Επιστολές", "recommendationLetters")}

      <p>
          <strong>Λίγα Λόγια για Εσάς</strong>
          <br />
          <div className="text_for_biographical_input">  Δεν είστε σίγουροι για τί να γράψετε; Μην ανησυχείτε,
          μπορείτε να αλλάξετε τα στοιχεία σας ανά πάσα στιγμή
          </div>
          <textarea
            name="message_bio"
            value={message}
            onChange={handleMessageChange}
            maxLength={maxMessageLength}
          />
          <div className="char-counter">
            {maxMessageLength - message.length} χαρακτήρες απομένουν
          </div>
        </p>

      <div className="button-group4-nannies">
        <button type="button" className="back-button" onClick={() => window.location.href = `${window.location.origin}/Ntantades/Eggrafi/3`}>
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

export default NannyForm4;

