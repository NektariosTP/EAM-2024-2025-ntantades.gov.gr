import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Filtered.css";

/*Εδω πρεπει να βαλω δημους*/
const suggestions = [
    "Αθήνα",
    "Θεσσαλονίκη",
    "Πάτρα",
    "Ηράκλειο",
    "Λάρισα",
    "Βόλος",
    "Καλαμάτα",
    "Χανιά",
    "Τρίκαλα",
    "Ρόδος",
    "Ιωάννινα",
    "Χαλάνδρι",
    "Αγία Παρασκευή"
];

function Filtered() {
    const navigate = useNavigate();
    const [locationRange, setSelectedArea] = useState(() => {
        const savedInput = localStorage.getItem("searchInput");
        return savedInput;
    });
    
    const [input, setInput] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [parentLocation, setParentLocation] = useState(false);
    const [nannyLocation, setNannyLocation] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [experienceRange, setExperienceRange] = useState([0, 30]);
    const [nannyageRange, setNannyAgeRange] = useState([18, 65]);
    const [childageRange, setChildAgeRange] = useState([2, 30]);
    const [rating, setRating] = useState(0);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedDegree, setSelectedDegree] = useState("");
    const [extraServices, setExtraServices] = useState([]);
    const [selectedEmployment, setSelectedEmployment] = useState("");
    const extraServicesOptions = ["Νοηματική γλώσσα", "Κώδικας μπράιγ", "Ειδικές ανάγκες", "Δίπλωμα οδήγησης", "Μαγειρική", "Εκπαίδευση", "Οικιακές Εργασίες"];
    const languageOptions = ["Αγγλικά", "Γαλλικά", "Γερμανικά", "Ισπανικά"];
    const degreeOptions = ["Μαιευτική", "Προσχολική Αγωγή", "Ασύγχρονο Πρόγραμμα Εκπαίδευσης"];

    const filtered_nannies = [
        { id: 3, name: "Αντώνης Γεωργακόπουλος", location: "Καλαμάτα", rating: 3.9, review_count: 1, img: "/nanny3.jpg", degree: "test", degreeshort: "test", age: 18, years_exp: 1, info: "test",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
        { id: 4, name: "Χριστίνα Οικονόμου", location: "Ηλιούπολη", rating: 4.2, review_count: 8, img: "/nanny4.jpg", degree: "Τμήμα Μαιευτικής - ΠΑΔΑ", degreeshort: "Μαιευτική", age: 28, years_exp: 4,
            info: "Είμαι η Χριστίνα Οικονόμου, απόφοιτη του Τμήματος Μαιευτικής του ΠΑΔΑ, και ζω στην Ηλιούπολη. Με εμπνέει η φροντίδα των παιδιών και πιστεύω ότι κάθε παιδί αξίζει ένα ζεστό και ασφαλές περιβάλλον για να αναπτυχθεί. Οι εξαιρετικές κριτικές από γονείς που με εμπιστεύτηκαν με ενθαρρύνουν να δίνω πάντα τον καλύτερό μου εαυτό. Αν χρειάζεστε μια υπεύθυνη και έμπειρη νταντά, θα χαρώ πολύ να συνεργαστούμε!",
            languages: ["Αγγλικά", "Γαλλικά"], extraServices: ["Νοηματική γλώσσα"], employmentType: "Πλήρης Απασχόληση", locationRange: []
        },
        { id: 1, name: "Ελένη Ανδρέου", location: "Χαλάνδρι", rating: 4.2, review_count: 2, img: "/nanny1.jpg", degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", degreeshort: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", age: 21, years_exp: 2,
            info: "Γεια σας! Είμαι η Ελένη, 21 ετών, και διαθέτω πιστοποιητικό από ασύγχρονο πρόγραμμα εκπαίδευσης για τη φροντίδα παιδιών. Είμαι υπεύθυνη, αξιόπιστη και με αγάπη για τα παιδιά, έτοιμη να προσφέρω τη φροντίδα που χρειάζονται με προσοχή και σεβασμό. Είμαι διαθέσιμη να φροντίσω τα παιδιά σας με επαγγελματισμό και ενθουσιασμό!",
            languages: ["Αγγλικά"], extraServices: ["Κώδικας μπράιγ", "Δίπλωμα οδήγησης"], employmentType: "Μερική Απασχόληση", locationRange: ["Χαλάνδρι", "Αγία Παρασκευή", "Βριλήσσια", "Μελίσσια", "Φιλοθέη", "Χολαργός"], parentLocation: true, nannyLocation: false, availabilityDays: ["Δευ", "Τρι", "Τετ"], availabilityTimes: ["Πρωί", "Νύχτα"]
        },
        { id: 2, name: "Νίκος Αθανασίου", location: "Καισαριανή", rating: 3.9, review_count: 1, img: "/nanny2.jpg", degree: "test", degreeshort: "test", age: 24, years_exp: 3,
            info: "Ονομάζομαι Νίκος Αθανασίου, είμαι 24 ετών και έχω 3 χρόνια εμπειρίας στη φροντίδα παιδιών. Παρά το νεαρό της ηλικίας μου, έχω αναπτύξει τη γνώση και την υπευθυνότητα που απαιτεί αυτή η δουλειά. Αν και οι κριτικές μου είναι λίγες προς το παρόν, είμαι αφοσιωμένος στο να προσφέρω την καλύτερη φροντίδα και να δημιουργώ ένα ασφαλές και ευχάριστο περιβάλλον για τα παιδιά. Με βασικό μου στόχο την ευημερία τους, θα χαρώ να συνεργαστούμε και να σας δείξω την αφοσίωσή μου στη δουλειά μου.",
            languages: [], extraServices: [], employmentType: "Μερική Απασχόληση", parentLocation: true, nannyLocation: true, locationRange: []
        },
        { id: 5, name: "Δημήτρης Σπυρόπουλος", location: "Αθήνα", rating: 4.8, review_count: 32, img: "/nanny5.jpg", degree: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", degreeshort: "Ασύγχρονο Πρόγραμμα Εκπαίδευσης", age: 58, years_exp: 20,
            info: "Είμαι ο Δημήτρης Σπυρόπουλος, 58 ετών, με περισσότερα από 20 χρόνια εμπειρίας στη φροντίδα παιδιών. Έχω ολοκληρώσει το Ασύγχρονο Πρόγραμμα Εκπαίδευσης και πιστεύω στην αξία της υπευθυνότητας και της συνέπειας στη δουλειά μου. Με βαθμολογία 4.8/5 από 32 αξιολογήσεις γονέων, νιώθω περήφανος που οι οικογένειες με εμπιστεύονται. Με αγάπη για τα παιδιά και στόχο τη δημιουργία ενός ασφαλούς και υποστηρικτικού περιβάλλοντος, θα χαρώ να σας βοηθήσω με τη φροντίδα των μικρών σας.",
            languages: [], extraServices: ["Ειδικές ανάγκες", "Δίπλωμα οδήγησης"], employmentType: "Πλήρης Απασχόληση", locationRange: ["Αθήνα"]
        },
        { id: 6, name: "Σοφία Χατζηγεωργίου", location: "Βόλος", rating: 4.6, review_count: 27, img: "/nanny6.jpg", degree: "Τμήμα Προσχολικής Αγωγής - ΠΑΔΑ", degreeshort: "Προσχολική Αγωγή", age: 35, years_exp: 7, info: "Υπεύθυνη και έμπειρη, προσφέρω ασφαλή και χαρούμενη απασχόληση για τα παιδιά σας.",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
        { id: 7, name: "Κατερίνα Λαμπροπούλου", location: "Κομοτηνή", rating: 4.2, review_count: 1, img: "/nanny7.jpg", degree: "test", degreeshort: "test", age: 18, years_exp: 1, info: "test",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
        { id: 8, name: "Παναγιώτης Μιχαηλίδης", location: "Τρίκαλα", rating: 4.2, review_count: 1, img: "/nanny8.jpg", degree: "test", degreeshort: "test", age: 18, years_exp: 1, info: "test",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
        { id: 9, name: "Παναγιώτης Μιχαηλίδης", location: "Τρίκαλα", rating: 4.2, review_count: 1, img: "/nanny8.jpg", degree: "test", degreeshort: "test", age: 18, years_exp: 1, info: "test",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
        { id: 10, name: "Παναγιώτης Μιχαηλίδης", location: "Τρίκαλα", rating: 4.2, review_count: 1, img: "/nanny8.jpg", degree: "test", degreeshort: "test", age: 18, years_exp: 1, info: "test",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
        { id: 11, name: "Παναγιώτης Μιχαηλίδης", location: "Τρίκαλα", rating: 4.2, review_count: 1, img: "/nanny8.jpg", degree: "test", degreeshort: "test", age: 18, years_exp: 1, info: "test",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
        { id: 12, name: "Παναγιώτης Μιχαηλίδης", location: "Τρίκαλα", rating: 4.2, review_count: 1, img: "/nanny8.jpg", degree: "test", degreeshort: "test", age: 18, years_exp: 1, info: "test",
            languages: [], extraServices: [], employmentType: "", locationRange: []
        },
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (value) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion);
        setSelectedArea(suggestion);
        setFilteredSuggestions([]);
    };

    const clearAllFilters = () => {
        setSelectedLanguages([]);
        setSelectedDegree("");
        setExtraServices([]);
        setRating(0);
        setSelectedEmployment("");
        setInput("");
        setSelectedArea("");
        setFilteredSuggestions([]);
        setParentLocation(false);
        setNannyLocation(false);
        setExperienceRange([0, 30]);
        setNannyAgeRange([18, 65]);
        setChildAgeRange([2, 30]);
        setSelectedDays([]);
        setSelectedTimes([]);
    };

    const handleParentLocationToggle = () => {
        setParentLocation(!parentLocation);
    };

    const handleNannyLocationToggle = () => {
        setNannyLocation(!nannyLocation);
    };

    const handleDayClick = (day) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    const handleTimeClick = (time) => {
        setSelectedTimes((prev) =>
            prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
        );
    };


    const handleExperienceChange = (e) => {
        const newRange = [...experienceRange];
        const { name, value } = e.target;
        
        // Update either min or max range based on which slider is moved
        if (name === "min") {
            newRange[0] = Math.min(parseInt(value), experienceRange[1]);
        } else {
            newRange[1] = Math.max(parseInt(value), experienceRange[0]);
        }

        setExperienceRange(newRange);
    };

    const handleNannyAgeChange = (e) => {
        const newRange = [...nannyageRange];
        const { name, value } = e.target;
        
        // Update either min or max range based on which slider is moved
        if (name === "min") {
            newRange[0] = Math.min(parseInt(value), nannyageRange[1]);
        } else {
            newRange[1] = Math.max(parseInt(value), nannyageRange[0]);
        }

        setNannyAgeRange(newRange);
    };

    const handleChildAgeChange = (e) => {
        const newRange = [...childageRange];
        const { name, value } = e.target;
        
        // Update either min or max range based on which slider is moved
        if (name === "min") {
            newRange[0] = Math.min(parseInt(value), childageRange[1]);
        } else {
            newRange[1] = Math.max(parseInt(value), childageRange[0]);
        }

        setChildAgeRange(newRange);
    };

    const handleRatingChange = (e) => {
        setRating(Number(e.target.value));
    };

    const handleLanguageChange = (e) => {
        const { value } = e.target;
        setSelectedLanguages((prev) =>
            Array.isArray(prev)
                ? prev.includes(value)
                    ? prev.filter((lang) => lang !== value)
                    : [...prev, value]
                : [value] // Fallback in case prev is not an array
        );
    };

    const handleDegreeChange = (e) => {
        setSelectedDegree(e.target.value);
    };

    const handleExtraServicesChange = (service) => {
        setExtraServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    };

    const removeFilter = (filterType, value) => {
        if (filterType === "language") {
            setSelectedLanguages((prev) => prev.filter((lang) => lang !== value));
        } else if (filterType === "degree") {
            setSelectedDegree("");
        } else if (filterType === "extraService") {
            setExtraServices((prev) => prev.filter((service) => service !== value));
        } else if (filterType === "rating") {
            setRating(0);
        } else if (filterType === "employment") {
            setSelectedEmployment("");
        } else if (filterType === "locationRange") {
            setInput("");
            setSelectedArea("");
            setFilteredSuggestions([]);
        } else if (filterType === "parentLocation") {
            setParentLocation(false);
        } else if (filterType === "nannyLocation") {
            setNannyLocation(false);
        } else if (filterType === "experience") {
            setExperienceRange([0,30]);
        } else if (filterType === "nannyAge") {
            setNannyAgeRange([18, 65]);
        } else if (filterType === "childAge") {
            setChildAgeRange([2, 30]);
        } else if (filterType === "day") {
            setSelectedDays((prev) => prev.filter((day) => day !== value));
        } else if (filterType === "time") {
            setSelectedTimes((prev) => prev.filter((time) => time !== value));
        } 
    };

    const appliedFilters = [
        ...(locationRange ? [{ type: "locationRange", value: locationRange }] : []),
        ...(parentLocation ? [{ type: "parentLocation", value: "Χώρος Γονέα" }] : []),
        ...(nannyLocation ? [{ type: "nannyLocation", value: "Χώρος Νταντάς" }] : []),
        ...selectedLanguages.map((lang) => ({ type: "language", value: lang })),
        ...(selectedDegree ? [{ type: "degree", value: selectedDegree }] : []),
        ...extraServices.map((service) => ({ type: "extraService", value: service })),
        ...(rating ? [{ type: "rating", value: `Rating: ${rating}+` }] : []),
        ...(selectedEmployment ? [{ type: "employment", value: selectedEmployment === "option1" ? "Πλήρης Απασχόληση" : "Μερική Απασχόληση" }] : []),
        ...(experienceRange[0] !== 0 || experienceRange[1] !== 30 ? [{ type: "experience", value: `${experienceRange[0]} - ${experienceRange[1]} χρόνια εμπειρίας` }] : []),
        ...(nannyageRange[0] !== 18 || nannyageRange[1] !== 65 ? [{ type: "nannyAge", value: `${nannyageRange[0]} - ${nannyageRange[1]} ηλικία νταντάς` }] : []),
        ...(childageRange[0] !== 2 || childageRange[1] !== 30 ? [{ type: "childAge", value: `${childageRange[0]} - ${childageRange[1]} ηλικία παιδιού` }] : []),
        ...selectedDays.map((day) => ({ type: "day", value: day })),
        ...selectedTimes.map((time) => ({ type: "time", value: time }))
    ];

    const filteredResults = filtered_nannies.filter(
        (nanny) =>
            (!parentLocation || nanny.parentLocation === true) &&
            (!nannyLocation || nanny.nannyLocation === true) &&
            (!locationRange || nanny.locationRange.includes(locationRange)) &&
            nanny.years_exp >= experienceRange[0] &&
            nanny.years_exp <= experienceRange[1] &&
            nanny.age >= nannyageRange[0] &&
            nanny.age <= nannyageRange[1] &&
            nanny.rating >= rating &&
            (selectedLanguages.length === 0 || 
             selectedLanguages.every((lang) => nanny.languages.includes(lang))) &&
            (selectedDegree ? nanny.degreeshort?.includes(selectedDegree) : true) &&
            extraServices.every((service) => nanny.extraServices?.includes(service)) &&
            (selectedEmployment ? nanny.employmentType === selectedEmployment : true) &&
            (selectedDays.length === 0 || selectedDays.some((day) => nanny.availabilityDays?.includes(day))) &&
            (selectedTimes.length === 0 || selectedTimes.some((time) => nanny.availabilityTimes?.includes(time)))
    );

    const handleNannyClick = (id) => {
        navigate(`/profile/${id}`); // Redirect to the nanny's profile page
    };





    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

    // Get the nannies to display on the current page
    const currentNannies = filteredResults.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="filtered-container">
            <div className="filters-section">
            <h3>Εφαρμοσμένα Φίλτρα</h3>
                <div className="applied-filters">
                    {appliedFilters.map((filter, index) => (
                        <span
                            key={index}
                            className="applied-filter-tag"
                            onClick={() => removeFilter(filter.type, filter.value)}
                        >
                            {filter.value} ✕
                        </span>
                    ))}
                    {appliedFilters.length > 0 && (
                        <button
                            className="remove-all-filters-button"
                            onClick={clearAllFilters}
                        >
                            Αφαίρεση Φίλτρων
                        </button>
                    )}
                </div>

                <h3>Φίλτρα</h3>

                {/*Filter 1*/}
                <div className="filter-group">
                    <label className="filter-group-label">Περιοχή</label>
                    <div className="input-container">
                        <input
                            type="text"
                            className="query-input-search"
                            placeholder="Περιοχή..."
                            value={input}
                            onChange={handleInputChange}
                        />
                    </div>

                    {filteredSuggestions.length > 0 && (
                        <ul className="query-suggestions-search">
                            {filteredSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="query-suggestion-item-search"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={parentLocation}
                            onChange={handleParentLocationToggle}
                        />
                        <label className="filter-group-label">Στο χώρο του Γονέα</label>
                    </div>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={nannyLocation}
                            onChange={handleNannyLocationToggle}
                        />
                        <label className="filter-group-label">Στο χώρο της Νταντάς</label>
                    </div>
                </div>

                {/* Filter 2: Availability */}
                <div className="filter-group">
                    <label className="filter-group-label">Διαθεσιμότητα:</label>
                    <div className="availability-container">
                        {/* Days of the week */}
                        <div className="availability-days">
                            {["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"].map((day, index) => (
                                <div
                                    key={index}
                                    className={`day selectable ${selectedDays.includes(day) ? "selected" : ""}`}
                                    onClick={() => handleDayClick(day)}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Time of day */}
                        <div className="availability-times">
                            {[
                                { label: "Πρωί", icon: "/morning.png" },
                                { label: "Μεσημέρι", icon: "/day.png" },
                                { label: "Απόγευμα", icon: "/afternoon.png" },
                                { label: "Νύχτα", icon: "/night.png" },
                            ].map((time, index) => (
                                <div
                                    key={index}
                                    className={`time selectable ${selectedTimes.includes(time.label) ? "selected" : ""}`}
                                    onClick={() => handleTimeClick(time.label)}
                                >
                                    <img src={time.icon} alt={time.label} className="time-icon" />
                                    <span>{time.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*Filter 3: Radio Buttons Filter*/}
                <div className="filter-group">
                    <label className="filter-group-label">Τύπος Απασχόλησης Νταντάς:</label>
                    <div>
                        <input
                            type="radio"
                            id="Πλήρης Απασχόληση"
                            name="featureOption"
                            value="Πλήρης Απασχόληση"
                            checked={selectedEmployment === "Πλήρης Απασχόληση"}
                            onChange={(e) => setSelectedEmployment(e.target.value)}
                        />
                        <label  className="filter-group-label" htmlFor="Πλήρης Απασχόληση">Πλήρης Απασχόληση</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="Μερική Απασχόληση"
                            name="featureOption"
                            value="Μερική Απασχόληση"
                            checked={selectedEmployment === "Μερική Απασχόληση"}
                            onChange={(e) => setSelectedEmployment(e.target.value)}
                        />
                        <label  className="filter-group-label" htmlFor="Μερική Απασχόληση">Μερική Απασχόληση</label>
                    </div>
                </div>

                {/*Filter 4*/}
                <div className="filter-group">
                    <label className="filter-group-label" >Χρόνια Εμπειρίας:<br/>{experienceRange[0]} - {experienceRange[1]}</label>
                    <div className="experience-slider">
                        <div
                        className="slider-track"
                        style={{ background: "#ccc" }}
                        ></div>
                        <div
                        className="slider-active-track"
                        style={{
                            left: `${(experienceRange[0] / 30) * 100}%`,
                            right: `${100 - (experienceRange[1] / 30) * 100}%`,
                        }}
                        ></div>
                        <input
                        type="range"
                        name="min"
                        min="0"
                        max="30"
                        value={experienceRange[0]}
                        onChange={handleExperienceChange}
                        className="slider"
                        />
                        <input
                        type="range"
                        name="max"
                        min="0"
                        max="30"
                        value={experienceRange[1]}
                        onChange={handleExperienceChange}
                        className="slider"
                        />
                    </div>
                </div>

                {/*Filter 5*/}
                <div className="filter-group">
                    <label className="filter-group-label">Ηλικία Νταντάς:<br/>{nannyageRange[0]} - {nannyageRange[1]}</label>
                    <div className="experience-slider">
                        <div
                        className="slider-track"
                        style={{ background: "#ccc" }}
                        ></div>
                        <div
                        className="slider-active-track"
                        style={{
                            left: `${((nannyageRange[0] - 18) / (65 - 18)) * 100}%`,
                            width: `${((nannyageRange[1] - nannyageRange[0]) / (65 - 18)) * 100}%`
                        }}
                        ></div>
                        <input
                        type="range"
                        name="min"
                        min="18"
                        max="65"
                        value={nannyageRange[0]}
                        onChange={handleNannyAgeChange}
                        className="slider"
                        />
                        <input
                        type="range"
                        name="max"
                        min="18"
                        max="65"
                        value={nannyageRange[1]}
                        onChange={handleNannyAgeChange}
                        className="slider"
                        />
                    </div>
                </div>

                {/*Filter 6*/}
                {/*ΔΕ ΛΕΙΤΟΥΡΓΕΙ ΘΕΛΕΙ ΚΑΙ ΑΛΛΑ 2 ΣΤΟΙΧΕΙΑ ΑΠΟ ΤΗΝ ΝΤΑΝΤΑ, min & max child age*/}
                <div className="filter-group">
                    <label className="filter-group-label">Ηλικία Παιδιού (Σε μήνες):<br/>{childageRange[0]} - {childageRange[1]}</label>
                    <div className="experience-slider">
                        <div
                        className="slider-track"
                        style={{ background: "#ccc" }}
                        ></div>
                        <div
                        className="slider-active-track"
                        style={{
                            left: `${(childageRange[0] / 30) * 100}%`,
                            width: `${((childageRange[1] - childageRange[0]) / 30) * 100}%`,
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
                </div>

                {/*Filter 7*/}
                <div className="filter-group">
                    <label className="filter-group-label">Αξιολόγηση Νταντάς:<br/>{rating}+</label>
                    <div className="experience-slider">
                        <div
                        className="slider-track"
                        style={{ background: "#ccc" }}
                        ></div>
                        <div
                        className="slider-active-track"
                        style={{
                            left: `0%`,
                            width: `${(rating / 5) * 100}%`,
                            background: "#007bff"
                        }}
                        ></div>
                        <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={rating}
                        onChange={handleRatingChange}
                        className="slider"
                        />
                    </div>
                </div>

                {/*Filter 8*/}
                <div className="filter-group">
                    <label className="filter-group-label">Τίτλος Σπουδών:</label>
                    <select value={selectedDegree} onChange={handleDegreeChange} className="degree">
                        <option value="">Όλα</option>
                        {degreeOptions.map((deg) => (
                            <option key={deg} value={deg}>
                                {deg}
                            </option>
                        ))}
                    </select>
                </div>

                {/*Filter 9*/}
                <div className="filter-group">
                    <label className="filter-group-label">Επιπλέον Γλώσσες:</label>
                    <select value={selectedLanguages} onChange={handleLanguageChange} className="languages">
                        <option value="">Όλες</option>
                        {languageOptions.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>

                {/*Filter 10*/}
                <div className="filter-group">
                    <label className="filter-group-label">Επιπλέον Παροχές:</label>
                    {extraServicesOptions.map((service) => (
                        <div key={service}>
                            <input
                                type="checkbox"
                                checked={extraServices.includes(service)}
                                onChange={() => handleExtraServicesChange(service)}
                                className="extraServices"
                            />
                            <label className="filter-group-label">{service}</label>
                        </div>
                    ))}
                </div>

            </div>

            {/* Profiles */}
            <div className="profiles-section">
                <div className="filtered-grid">
                    {currentNannies.map((nanny) => (
                        <div key={nanny.id} className="filtered-card" onClick={() => handleNannyClick(nanny.id)}>
                            <img className="avatar" src={nanny.img} alt={nanny.name} />
                            <div className="card-content">
                                <h3>{nanny.name}</h3>
                                <div className="rating">
                                    <span>⭐ {nanny.rating.toFixed(1)}</span>
                                    <span className="stars">({nanny.review_count})</span>
                                </div>
                                <p className="degree">🎓 {nanny.degree}</p>
                                <p className="info">{nanny.info}</p>
                                <div className="details">
                                    <span>{nanny.location}</span>
                                    <span>{nanny.age} ετών</span>
                                    <span>{nanny.years_exp} χρόνια εμπειρίας</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button
                        className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    >
                        &laquo;
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>

                    <button
                        className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        &raquo;
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Filtered;
