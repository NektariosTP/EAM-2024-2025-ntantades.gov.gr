import React, { useState, useEffect } from "react";
import "./ParentForm2.css";
import { useNavigate } from "react-router-dom";

function ParentForm2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomos: "",
    city: "",
    address: "",
    tk: "",
    mobilephone: "",
    homephone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const greekRegex = /^[\u0370-\u03FF\s]+$/;
  const tkRegex = /^\d{5}$/;
  const mobilephoneRegex = /^\d{10}$/;
  const homephoneRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    // Load saved form data from localStorage when the component mounts
    const savedData = localStorage.getItem("parentFormData2");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []); 

  const validateField = (name, value) => {
    let error = "";

    if (!value && name === "homephone"){
      return error;
    }
    if (["city"].includes(name)) {
      if (!greekRegex.test(value)) {
        error = "Μόνο ελληνικοί χαρακτήρες επιτρέπονται";
      }
    } else if (name === "tk" && !tkRegex.test(value)) {
      error = "Μη έγκυρος Ταχυδρομικός Κώδικας. 5 ψηφία απαιτούνται.";
    } else if (name === "mobilephone" && !mobilephoneRegex.test(value)) {
      error = "Μη έγκυρος αριθμός κινητού τηλεφώνου. 10 ψηφία απαιτούνται.";
    } else if (name === "homephone" && !homephoneRegex.test(value)) {
      error = "Μη έγκυρος αριθμός σταθερού τηλεφώνου. 10 ψηφία απαιτούνται.";
    } 
    else if (name === "email" && !emailRegex.test(value)) {
      error = "Μη έγκυρο e-mail";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    const updatedFormData2 = {
      ...formData,
      [name]: value,
    };
  
    setFormData(updatedFormData2);
  
    localStorage.setItem("parentFormData2", JSON.stringify(updatedFormData2));
  
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

  const handleClearForm = () => {
    setFormData({
      nomos: "",
      city: "",
      address: "",
      tk: "",
      mobilephone: "",
      homephone: "",
      email: "",
    });
    setErrors({});
    setTouched({});
    localStorage.removeItem("parentFormData2");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      const error = validateField(field, value);
  
      // If the field is empty and required, or if it fails validation, add to newErrors
      if (!value && field !== "homephone") {
        newErrors[field] = "Απαιτείται η συμπλήρωση του πεδίου";
      } else if (error) {
        newErrors[field] = error;
      }
    });
  
    // Update the state for errors
    setErrors(newErrors);
  
    // If there are any errors, do NOT navigate
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data Submitted: ", formData);
      navigate("/Goneis/Eggrafi/3");
    } else {
      console.log("Validation Errors: ", newErrors);
    }
  };
  

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>2. Συμπλήρωση Στοιχείων Επικοινωνίας</h1>
      <p> Συμπληρώστε τα παρακάτω στοιχεία επικοινωνίας. Στα πεδία όπου υπάρχει (*), 
        σημαίνει ότι η συμπλήρωση στοιχείου είναι υποχρεωτική.</p>
      <label className="label-nanny">Νομός (*)</label>
      <select
        name="nomos"
        value={formData.nomos}
        onChange={handleChange}
        className={errors.nomos ? "error" : ""}
      >
        <option value="">Επιλέξτε Νομό</option>
        <option value="ΑΘΗΝΩΝ">ΑΘΗΝΩΝ</option>
        <option value="ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ">ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ</option>
        <option value="ΑΝΑΤΟΛΙΚΗΣ ΑΤΤΙΚΗΣ">ΑΝΑΤΟΛΙΚΗΣ ΑΤΤΙΚΗΣ</option>
        <option value="ΑΡΓΟΛΙΔΑΣ">ΑΡΓΟΛΙΔΑΣ</option>
        <option value="ΑΡΚΑΔΙΑΣ">ΑΡΚΑΔΙΑΣ</option>
        <option value="ΑΡΤΑΣ">ΑΡΤΑΣ</option>
        <option value="ΑΧΑΪΑΣ">ΑΧΑΪΑΣ</option>
        <option value="ΒΟΙΩΤΙΑΣ">ΒΟΙΩΤΙΑΣ</option>
        <option value="ΓΡΕΒΕΝΩΝ">ΓΡΕΒΕΝΩΝ</option>
        <option value="ΔΡΑΜΑΣ">ΔΡΑΜΑΣ</option>
        <option value="ΔΥΤΙΚΗΣ ΑΤΤΙΚΗΣ">ΔΥΤΙΚΗΣ ΑΤΤΙΚΗΣ</option>
        <option value="ΔΩΔΕΚΑΝΗΣΟΥ">ΔΩΔΕΚΑΝΗΣΟΥ</option>
        <option value="ΕΒΡΟΥ">ΕΒΡΟΥ</option>
        <option value="ΕΥΒΟΙΑΣ">ΕΥΒΟΙΑΣ</option>
        <option value="ΕΥΡΥΤΑΝΙΑΣ">ΕΥΡΥΤΑΝΙΑΣ</option>
        <option value="ΖΑΚΥΝΘΟΥ">ΖΑΚΥΝΘΟΥ</option>
        <option value="ΗΛΕΙΑΣ">ΗΛΕΙΑΣ</option>
        <option value="ΗΜΑΘΙΑΣ">ΗΜΑΘΙΑΣ</option>
        <option value="ΗΡΑΚΛΕΙΟΥ">ΗΡΑΚΛΕΙΟΥ</option>
        <option value="ΘΕΣΠΡΩΤΙΑΣ">ΘΕΣΠΡΩΤΙΑΣ</option>
        <option value="ΘΕΣΣΑΛΟΝΙΚΗΣ">ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="ΙΩΑΝΝΙΝΩΝ">ΙΩΑΝΝΙΝΩΝ</option>
        <option value="ΚΑΒΑΛΑΣ">ΚΑΒΑΛΑΣ</option>
        <option value="ΚΑΡΔΙΤΣΑΣ">ΚΑΡΔΙΤΣΑΣ</option>
        <option value="ΚΑΣΤΟΡΙΑΣ">ΚΑΣΤΟΡΙΑΣ</option>
        <option value="ΚΕΡΚΥΡΑΣ">ΚΕΡΚΥΡΑΣ</option>
        <option value="ΚΕΦΑΛΛΗΝΙΑΣ">ΚΕΦΑΛΛΗΝΙΑΣ</option>
        <option value="ΚΙΛΚΙΣ">ΚΙΛΚΙΣ</option>
        <option value="ΚΟΖΑΝΗΣ">ΚΟΖΑΝΗΣ</option>
        <option value="ΚΟΡΙΝΘΙΑΣ">ΚΟΡΙΝΘΙΑΣ</option>
        <option value="ΚΥΚΛΑΔΩΝ">ΚΥΚΛΑΔΩΝ</option>
        <option value="ΛΑΚΩΝΙΑΣ">ΛΑΚΩΝΙΑΣ</option>
        <option value="ΛΑΡΙΣΑΣ">ΛΑΡΙΣΑΣ</option>
        <option value="ΛΑΣΙΘΙΟΥ">ΛΑΣΙΘΙΟΥ</option>
        <option value="ΛΕΣΒΟΥ">ΛΕΣΒΟΥ</option>
        <option value="ΛΕΥΚΑΔΑΣ">ΛΕΥΚΑΔΑΣ</option>
        <option value="ΜΑΓΝΗΣΙΑΣ">ΜΑΓΝΗΣΙΑΣ</option>
        <option value="ΜΕΣΣΗΝΙΑΣ">ΜΕΣΣΗΝΙΑΣ</option>
        <option value="ΞΑΝΘΗΣ">ΞΑΝΘΗΣ</option>
        <option value="ΠΕΙΡΑΙΑ">ΠΕΙΡΑΙΑ</option>
        <option value="ΠΕΛΛΑΣ">ΠΕΛΛΑΣ</option>
        <option value="ΠΙΕΡΙΑΣ">ΠΙΕΡΙΑΣ</option>
        <option value="ΠΡΕΒΕΖΑΣ">ΠΡΕΒΕΖΑΣ</option>
        <option value="ΡΕΘΥΜΝΗΣ">ΡΕΘΥΜΝΗΣ</option>
        <option value="ΡΟΔΟΠΗΣ">ΡΟΔΟΠΗΣ</option>
        <option value="ΣΑΜΟΥ">ΣΑΜΟΥ</option>
        <option value="ΣΕΡΡΩΝ">ΣΕΡΡΩΝ</option>
        <option value="ΤΡΙΚΑΛΩΝ">ΤΡΙΚΑΛΩΝ</option>
        <option value="ΦΘΙΩΤΙΔΑΣ">ΦΘΙΩΤΙΔΑΣ</option>
        <option value="ΦΛΩΡΙΝΑΣ">ΦΛΩΡΙΝΑΣ</option>
        <option value="ΦΩΚΙΔΑΣ">ΦΩΚΙΔΑΣ</option>
        <option value="ΧΑΛΚΙΔΙΚΗΣ">ΦΑΛΚΙΔΙΚΗΣ</option>
        <option value="ΧΑΝΙΩΝ">ΧΑΝΙΩΝ</option>
        <option value="ΧΙΟΥ">ΧΙΟΥ</option>
      </select>
      {errors.nomos && <div className="error-message">{errors.nomos}</div>}
      

      <label className="label-nanny">Πόλη (*)</label>
      <div className="hint">Μόνο ελληνικοί χαρακτήρες</div>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        onBlur={handleBlur}
        className={touched.city ? "input-nanny" : ""}
      />
      {errors.city && <div className="error-message">{errors.city}</div>}
      

      <label className="label-nanny">Διεύθυνση (*)</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        onBlur={handleBlur}
        className={touched.address ? "input-nanny" : ""}
      />
      {errors.address && <div className="error-message">{errors.address}</div>}
      

      <label className="label-nanny">Ταχυδρομικός Κώδικας (*)</label>
      <input
        type="text"
        name="tk"
        value={formData.tk}
        onChange={handleChange}
        onBlur={handleBlur}
        className={touched.tk ? "input-nanny" : ""}
      />
      {errors.tk && <div className="error-message">{errors.tk}</div>}

      <label className="label-nanny">Κινητό Τηλέφωνο(*)</label>
      <input
        type="text"
        name="mobilephone"
        value={formData.mobilephone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={touched.mobilephone ? "input-nanny" : ""}
      />
      {errors.mobilephone && <div className="error-message">{errors.mobilephone}</div>}

      <label className="label-nanny">Σταθερό Τηλέφωνο </label>
      <input
        type="text"
        name="homephone"
        value={formData.homephone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={touched.homephone ? "input-nanny" : ""}
      />
      {errors.homephone && <div className="error-message">{errors.homephone}</div>}

      <label className="label-nanny">E-mail (*)</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email ? "input-nanny" : ""}
      />
      {errors.email && <div className="error-message">{errors.email}</div>}

      <div className="button-group2-nannies">
        <button type="button" className="back-button" onClick={() => navigate("/Goneis/Eggrafi")}>
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

export default ParentForm2;
