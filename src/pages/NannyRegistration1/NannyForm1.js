import React, { useState, useEffect } from "react";
import "./NannyForm1.css";
import { useNavigate } from "react-router-dom";

function NannyForm1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    patronymic: "",
    motherName: "",
    gender: "",
    birthYear: "",
    idNumber: "",
    taxNumber: "",
    amka: "",
    dou: "",
    maritalStatus: "",
    isParent: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const greekRegex = /^[\u0370-\u03FF\s]+$/;
  const amkaRegex = /^\d{11}$/;
  const taxNumberRegex = /^\d{9}$/;

  useEffect(() => {
    // Load saved form data from localStorage when the component mounts
    const savedData = localStorage.getItem("nannyFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []); // Empty dependency array means it only runs once when the component mounts

  const validateField = (name, value) => {
    let error = "";
    if (["firstName", "lastName", "patronymic", "motherName"].includes(name)) {
      if (!greekRegex.test(value)) {
        error = "Μόνο ελληνικοί χαρακτήρες επιτρέπονται";
      }
    } else if (name === "amka" && !amkaRegex.test(value)) {
      error = "Μη έγκυρο AMKA. 11 ψηφία απαιτούνται.";
    } else if (name === "taxNumber" && !taxNumberRegex.test(value)) {
      error = "Μη έγκυρο ΑΦΜ. 9 ψηφία απαιτούνται.";
    } else if (name === "birthYear") {
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(value, 10);
      if (isNaN(age) || age < 18) {
        error = "Πρέπει να είστε τουλάχιστον 18 ετών.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update form data
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
  
    setFormData(updatedFormData);
  
    // Store updated form data in localStorage
    localStorage.setItem("nannyFormData", JSON.stringify(updatedFormData));
  
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
      firstName: "",
      lastName: "",
      patronymic: "",
      motherName: "",
      gender: "",
      birthYear: "",
      idNumber: "",
      taxNumber: "",
      amka: "",
      dou: "",
      maritalStatus: "",
      isParent: "",
    });
    setErrors({});
    setTouched({});
    localStorage.removeItem("nannyFormData");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      const error = validateField(field, value);
      if (!value) {
        newErrors[field] = "Απαιτείται η συμπλήρωση του πεδίου";
      } else if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data Submitted: ", formData);
      //localStorage.removeItem("nannyFormData");
      navigate("/Ntantades/Eggrafi/2");
    } else {
      console.log("Validation Errors: ", newErrors);
    }
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
      <h1>1.Συμπλήρωση Προσωπικών Στοιχείων</h1>
      <p> Συμπληρώστε τα παρακάτω προσωπικά στοιχεία. Στα πεδία όπου υπάρχει (*), 
        σημαίνει ότι η συμπλήρωση στοιχείου είναι υποχρεωτική.</p>
      <label className="label-nanny">Όνομα (*)</label>
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
      

      <label className="label-nanny">Επώνυμο (*)</label>
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
      

      <label className="label-nanny">Πατρώνυμο (*)</label>
      <div className="hint">Μόνο ελληνικοί χαρακτήρες</div>
      <input
        type="text"
        name="patronymic"
        value={formData.patronymic}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={touched.patronymic ? "input-nanny" : ""}
      />
      {errors.patronymic && <div className="error-message">{errors.patronymic}</div>}
      

      <label className="label-nanny">Μητρώνυμο (*)</label>
      <div className="hint">Μόνο ελληνικοί χαρακτήρες</div>
      <input
        type="text"
        name="motherName"
        value={formData.motherName}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={touched.motherName ? "input-nanny" : ""}
      />
      {errors.motherName && <div className="error-message">{errors.motherName}</div>}

      <label className="label-nanny">Φύλο (*)</label>
      <div className="radio-group">
        <label className="label-nanny">
          <input className="input-nanny"
            type="radio"
            name="gender"
            value="Άνδρας"
            checked={formData.gender === "Άνδρας"}
            onChange={handleChange}
          />
          Άνδρας
        </label>
        <label className="label-nanny">
          <input className="input-nanny"
            type="radio"
            name="gender"
            value="Γυναίκα"
            checked={formData.gender === "Γυναίκα"}
            onChange={handleChange}
          />
          Γυναίκα
        </label>
      </div>
      {errors.gender && <span className="error-message">{errors.gender}</span>}

      <label className="label-nanny">Έτος Γέννησης (*)</label>
      <input
        type="number"
        name="birthYear"
        value={formData.birthYear}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={touched.birthYear ? "input-nanny" : ""}
      />
      {errors.birthYear && <div className="error-message">{errors.birthYear}</div>}

      <label className="label-nanny">Αριθμός Ταυτότητας (*)</label>
      <input
        type="text"
        name="idNumber"
        value={formData.idNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.idNumber ? "input-nanny" : ""}
      />
      {errors.idNumber && <div className="error-message">{errors.idNumber}</div>}

      <label className="label-nanny">Αριθμός Φορολογικού Μητρώου (ΑΦΜ) (*)</label>
      <input
        type="text"
        name="taxNumber"
        value={formData.taxNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.taxNumber ? "input-nanny" : ""}
      />
      {errors.taxNumber && <div className="error-message">{errors.taxNumber}</div>}

      <label className="label-nanny">AMKA (*)</label>
      <input
        type="text"
        name="amka"
        value={formData.amka}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.amka ? "input-nanny" : ""}
      />
      {errors.amka && <div className="error-message">{errors.amka}</div>}

      <label className="label-nanny">ΔΟΥ (*)</label>
      <select
        name="dou"
        value={formData.dou}
        onChange={handleChange}
        className={errors.dou ? "input-nanny" : ""}
      >
        <option value="">Επιλέξτε ΔΟΥ</option>
        <option value="Α ΑΘΗΝΩΝ">Α ΑΘΗΝΩΝ</option>
        <option value="Α' ΘΕΣΣΑΛΟΝΙΚΗΣ">Α' ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="Α' ΛΑΡΙΣΑΣ">Α' ΛΑΡΙΣΑΣ</option>
        <option value="Α' ΠΑΤΡΩΝ">Α' ΠΑΤΡΩΝ</option>
        <option value="Α' ΠΕΙΡΑΙΑ">Α' ΠΕΙΡΑΙΑ</option>
        <option value="Α' ΠΕΡΙΣΤΕΡΙΟΥ">Α' ΠΕΡΙΣΤΕΡΙΟΥ</option>
        <option value="ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ">ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ</option>
        <option value="ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ">ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ</option>
        <option value="ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ">ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ</option>
        <option value="ΑΙΓΑΛΕΩ">ΑΙΓΑΛΕΩ</option>
        <option value="ΑΙΓΙΟΥ">ΑΙΓΙΟΥ</option>
        <option value="ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ">ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ</option>
        <option value="ΑΜΑΛΙΑΔΑΣ">ΑΜΑΛΙΑΔΑΣ</option>
        <option value="ΑΜΑΡΟΥΣΙΟΥ">ΑΜΑΡΟΥΣΙΟΥ</option>
        <option value="ΑΜΦΙΣΣΑΣ">ΑΜΦΙΣΣΑΣ</option>
        <option value="ΑΡΓΟΣ">ΑΡΓΟΣ</option>
        <option value="ΑΡΓΟΣΤΟΛΙΟΥ">ΑΡΓΟΣΤΟΛΙΟΥ</option>
        <option value="ΑΡΤΑΣ">ΑΡΤΑΣ</option>
        <option value="ΑΡΧΑΡΝΩΝ">ΑΡΧΑΡΝΩΝ</option>
        <option value="Β' ΠΕΙΡΑΙΑ">Β' ΠΕΙΡΑΙΑ</option>
        <option value="Β' ΠΕΡΙΣΤΕΡΙΟΥ">Β' ΠΕΡΙΣΤΕΡΙΟΥ</option>
        <option value="Β'-Γ' ΛΑΡΙΣΑΣ">Β'-Γ' ΛΑΡΙΣΑΣ</option>
        <option value="ΒΕΡΟΙΑΣ">ΒΕΡΟΙΑΣ</option>
        <option value="ΒΟΛΟΥ">ΒΟΛΟΥ</option>
        <option value="ΒΥΡΩΝΟΣ">ΒΥΡΩΝΟΣ</option>
        <option value="Γ' ΘΕΣΣΑΛΟΝΙΚΗΣ">Γ' ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="Γ' ΠΑΤΡΩΝ">Γ' ΠΑΤΡΩΝ</option>
        <option value="ΓΑΛΑΤΣΙΟΥ">ΓΑΛΑΤΣΙΟΥ</option>
        <option value="ΓΙΑΝΝΙΤΣΩΝ">ΓΙΑΝΝΙΤΣΩΝ</option>
        <option value="ΓΛΥΦΑΔΑΣ">ΓΛΥΦΑΔΑΣ</option>
        <option value="ΓΡΕΒΕΝΩΝ">ΓΡΕΒΕΝΩΝ</option>
        <option value="Δ ΑΘΗΝΩΝ">Δ ΑΘΗΝΩΝ</option>
        <option value="Δ' ΘΕΣΣΑΛΟΝΙΚΗΣ">Δ' ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="Δ' ΠΕΙΡΑΙΑ">Δ' ΠΕΙΡΑΙΑ</option>
        <option value="ΔΡΑΜΑΣ">ΔΡΑΜΑΣ</option>
        <option value="Ε' ΘΕΣΣΑΛΟΝΙΚΗΣ">Ε' ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="Ε' ΠΕΙΡΑΙΑ">Ε' ΠΕΙΡΑΙΑ</option>
        <option value="ΕΔΕΣΣΑΣ">ΕΔΕΣΣΑΣ</option>
        <option value="ΕΛΕΥΣΙΝΑΣ">ΕΛΕΥΣΙΝΑΣ</option>
        <option value="Ζ' ΘΕΣΣΑΛΟΝΙΚΗΣ">Ζ' ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="ΖΑΚΥΝΘΟΥ">ΖΑΚΥΝΘΟΥ</option>
        <option value="Η' ΘΕΣΣΑΛΟΝΙΚΗΣ">Η' ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="ΗΓΟΥΜΕΝΙΤΣΑΣ">ΗΓΟΥΜΕΝΙΤΣΑΣ</option>
        <option value="ΗΛΙΟΥΠΟΛΗΣ">ΗΛΙΟΥΠΟΛΗΣ</option>
        <option value="ΗΡΑΚΛΕΙΟΥ">ΗΡΑΚΛΕΙΟΥ</option>
        <option value="ΘΗΒΩΝ">ΘΗΒΩΝ</option>
        <option value="ΘΗΡΑΣ">ΘΗΡΑΣ</option>
        <option value="ΙΒ ΑΘΗΝΩΝ">ΙΒ ΑΘΗΝΩΝ</option>
        <option value="ΙΓ ΑΘΗΝΩΝ">ΙΓ ΑΘΗΝΩΝ</option>
        <option value="ΙΔ ΑΘΗΝΩΝ">ΙΔ ΑΘΗΝΩΝ</option>
        <option value="ΙΖ ΑΘΗΝΩΝ">ΙΖ ΑΘΗΝΩΝ</option>
        <option value="ΙΩΑΝΝΙΝΩΝ">ΙΩΑΝΝΙΝΩΝ</option>
        <option value="ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ">ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="ΚΑΒΑΛΑΣ">ΚΑΒΑΛΑΣ</option>
        <option value="ΚΑΛΑΜΑΡΙΑΣ">ΚΑΛΑΜΑΡΙΑΣ</option>
        <option value="ΚΑΛΑΜΑΤΑΣ">ΚΑΛΑΜΑΤΑΣ</option>
        <option value="ΚΑΛΛΙΘΕΑΣ">ΚΑΛΛΙΘΕΑΣ</option>
        <option value="ΚΑΡΔΙΤΣΑΣ">ΚΑΡΔΙΤΣΑΣ</option>
        <option value="ΚΑΡΠΕΝΗΣΙΟΥ">ΚΑΡΠΕΝΗΣΙΟΥ</option>
        <option value="ΚΑΣΤΟΡΙΑΣ">ΚΑΣΤΟΡΙΑΣ</option>
        <option value="ΚΑΤΕΡΙΝΗΣ">ΚΑΤΕΡΙΝΗΣ</option>
        <option value="ΚΑΤΟΙΚΩΝ ΕΞΩΤΕΡΙΚΟΥ">ΚΑΤΟΙΚΩΝ ΕΞΩΤΕΡΙΚΟΥ</option>
        <option value="ΚΕΡΚΥΡΑΣ">ΚΕΡΚΥΡΑΣ</option>
        <option value="ΚΗΦΙΣΙΑΣ">ΚΗΦΙΣΙΑΣ</option>
        <option value="ΚΙΛΚΙΣ">ΚΙΛΚΙΣ</option>
        <option value="ΚΟΖΑΝΗΣ">ΚΟΖΑΝΗΣ</option>
        <option value="ΚΟΜΟΤΗΝΗΣ">ΚΟΜΟΤΗΝΗΣ</option>
        <option value="ΚΟΡΙΝΘΟΥ">ΚΟΡΙΝΘΟΥ</option>
        <option value="ΚΟΡΩΠΙΟΥ">ΚΟΡΩΠΙΟΥ</option>
        <option value="ΚΥΜΗΣ">ΚΥΜΗΣ</option>
        <option value="ΚΩ">ΚΩ</option>
        <option value="ΛΑΓΚΑΔΑ">ΛΑΓΚΑΔΑ</option>
        <option value="ΛΑΜΙΑΣ">ΛΑΜΙΑΣ</option>
        <option value="ΛΕΥΚΑΔΑΣ">ΛΕΥΚΑΔΑΣ</option>
        <option value="ΛΙΒΑΔΕΙΑΣ">ΛΙΒΑΔΕΙΑΣ</option>
        <option value="ΜΕΣΟΛΟΓΓΙΟΥ">ΜΕΣΟΛΟΓΓΙΟΥ</option>
        <option value="ΜΟΣΧΑΤΟΥ">ΜΟΣΧΑΤΟΥ</option>
        <option value="ΜΥΚΟΝΟΥ">ΜΥΚΟΝΟΥ</option>
        <option value="ΜΥΤΙΛΗΝΗΣ">ΜΥΤΙΛΗΝΗΣ</option>
        <option value="Ν. ΗΡΑΚΛΕΙΟΥ">Ν. ΗΡΑΚΛΕΙΟΥ</option>
        <option value="Ν. ΙΩΝΙΑΣ ΒΟΛΟΥ">Ν. ΙΩΝΙΑΣ ΒΟΛΟΥ</option>
        <option value="ΝΑΞΟΥ">ΝΑΞΟΥ</option>
        <option value="ΝΑΥΠΛΙΟΥ">ΝΑΥΠΛΙΟΥ</option>
        <option value="ΝΕΑΣ ΙΩΝΙΑΣ">ΝΕΑΣ ΙΩΝΙΑΣ</option>
        <option value="ΝΕΑΣ ΣΜΥΡΝΗΣ">ΝΕΑΣ ΣΜΥΡΝΗΣ</option>
        <option value="ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ">ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ</option>
        <option value="ΝΙΚΑΙΑΣ">ΝΙΚΑΙΑΣ</option>
        <option value="ΞΑΝΘΗΣ">ΞΑΝΘΗΣ</option>
        <option value="ΟΡΕΣΤΙΑΔΑΣ">ΟΡΕΣΤΙΑΔΑΣ</option>
        <option value="ΠΑΛΑΙΟΥ ΦΑΛΗΡΟΥ">ΠΑΛΑΙΟΥ ΦΑΛΗΡΟΥ</option>
        <option value="ΠΑΛΛΗΝΗΣ">ΠΑΛΛΗΝΗΣ</option>
        <option value="ΠΑΡΟΥ">ΠΑΡΟΥ</option>
        <option value="ΠΛΟΙΩΝ ΠΕΙΡΑΙΑ">ΠΛΟΙΩΝ ΠΕΙΡΑΙΑ</option>
        <option value="ΠΟΛΥΓΥΡΟΥ">ΠΟΛΥΓΥΡΟΥ</option>
        <option value="ΠΡΕΒΕΖΑΣ">ΠΡΕΒΕΖΑΣ</option>
        <option value="ΠΤΟΛΕΜΑΙΔΑΣ">ΠΤΟΛΕΜΑΙΔΑΣ</option>
        <option value="ΠΥΡΓΟΥ">ΠΥΡΓΟΥ</option>
        <option value="ΡΕΘΥΜΝΟΥ">ΡΕΘΥΜΝΟΥ</option>
        <option value="ΡΟΔΟΥ">ΡΟΔΟΥ</option>
        <option value="ΣΑΜΟΥ">ΣΑΜΟΥ</option>
        <option value="ΣΕΡΡΩΝ">ΣΕΡΡΩΝ</option>
        <option value="ΣΠΑΡΤΗΣ">ΣΠΑΡΤΗΣ</option>
        <option value="ΣΤ ΑΘΗΝΩΝ">ΣΤ ΑΘΗΝΩΝ</option>
        <option value="ΣΤ' ΘΕΣΣΑΛΟΝΙΚΗΣ">ΣΤ' ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="ΣΥΡΟΥ">ΣΥΡΟΥ</option>
        <option value="ΤΡΙΚΑΛΩΝ">ΤΡΙΚΑΛΩΝ</option>
        <option value="ΤΡΙΠΟΛΗΣ">ΤΡΙΠΟΛΗΣ</option>
        <option value="Φ.Α.Ε. ΑΘΗΝΩΝ">Φ.Α.Ε. ΑΘΗΝΩΝ</option>
        <option value="Φ.Α.Ε. ΘΕΣΣΑΛΟΝΙΚΗΣ">Φ.Α.Ε. ΘΕΣΣΑΛΟΝΙΚΗΣ</option>
        <option value="Φ.Α.Ε. ΠΕΙΡΑΙΑ">Φ.Α.Ε. ΠΕΙΡΑΙΑ</option>
        <option value="ΦΛΩΡΙΝΑΣ">ΦΛΩΡΙΝΑΣ</option>
        <option value="ΧΑΛΑΝΔΡΙΟΥ">ΧΑΛΑΝΔΡΙΟΥ</option>
        <option value="ΧΑΛΚΙΔΑΣ">ΧΑΛΚΙΔΑΣ</option>
        <option value="ΧΑΝΙΩΝ">ΧΑΝΙΩΝ</option>
        <option value="ΧΟΛΑΡΓΟΥ">ΧΟΛΑΡΓΟΥ</option>
        <option value="ΧΙΟΥ">ΧΙΟΥ</option>
        <option value="ΨΥΧΙΚΟΥ">ΨΥΧΙΚΟΥ</option>

      </select>
      {errors.dou && <div className="error-message">{errors.dou}</div>}

      <label className="label-nanny">Οικογενειακή Κατάσταση (*)</label>
      <select
        name="maritalStatus"
        value={formData.maritalStatus}
        onChange={handleChange}
        className={errors.maritalStatus ? "input-nanny" : ""}
      >
        <option value="">Επιλέξτε</option>
        <option value="Ελεύθερος">Ελεύθερος</option>
        <option value="Παντρεμένος">Παντρεμένος</option>
        <option value="Διαζευγμένος">Διαζευγμένος</option>
        <option value="Χήρος">Χήρος</option>
      </select>
      {errors.maritalStatus && (
        <div className="error-message">{errors.maritalStatus}</div>
      )}

    <label className="label-nanny">Είστε γονέας; (*)</label>
      <div className="radio-group">
        <label className="label-nanny">
          <input className="input-nanny"
            type="radio"
            name="isParent"
            value="Ναι"
            checked={formData.isParent === "Ναι"}
            onChange={handleChange}
          />
          Ναι
        </label>
        <label className="label-nanny">
          <input className="input-nanny"
            type="radio"
            name="isParent"
            value="Όχι"
            checked={formData.isParent === "Όχι"}
            onChange={handleChange}
          />
          Όχι
        </label>
      </div>
      {errors.isParent && <div className="error-message">{errors.isParent}</div>}

      <div className="button-group1-nannies">
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

export default NannyForm1;

