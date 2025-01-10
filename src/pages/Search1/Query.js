import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Query.css";

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
    "Ιωάννινα"
];

function Query() {
    const [input, setInput] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const navigate = useNavigate();

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
        setFilteredSuggestions([]);
    };

    const handleSearch = () => {
        localStorage.setItem("searchInput", input);
        navigate(`/Goneis/Aggelies`);
    };

    return (
        <div className="query-container" style={{ backgroundImage: 'url(./mummy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="query-input-wrapper">
                <input
                    type="text"
                    className="query-input"
                    placeholder="Περιοχή..."
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="query-button" onClick={handleSearch}>
                    Αναζήτηση
                </button>
            </div>
            {filteredSuggestions.length > 0 && (
                <ul className="query-suggestions">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="query-suggestion-item"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            <div className="query-stats">
                <span>3260 Νταντάδες</span>
                <span className="divider">|</span>
                <span>370 Περιοχές</span>
            </div>
        </div>
    );
}

export default Query;
