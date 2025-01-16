import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NannyProfileSidebar.css";

export default function NannyProfileSidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 32, text: "Oι Συνεργασίες μου", basePath: "/Ntantades/Profil/Synergasies", subItems: []},
    { id: 33, text: "Προσεχώς Ραντεβού", basePath: "/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Prosexws", subItems: [] },
    { id: 34, text: "Αιτήσεις Ενδιαφέροντος Συνεργασίας", basePath: "/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Se_Ekkremothta", subItems: [] },
    { id: 35, text: "Ιδιωτικό Συμφωνητικό Συνεργασίας", basePath: "/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_ekkremothta", subItems: [] },
    { id: 36, text: "Πληρωμές", basePath: "/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws", subItems: [] },
    { id: 37, text: "Μηνύματα", basePath: "/Ntantades/Profil/Minimata", subItems: [] },
    { id: 38, text: "Αξιολογήσεις", basePath: "/Ntantades/Profil/Istoriko_Ntanta/Aksiologhseis", subItems: [] },
    { id: 39, text: "Ειδοποιήσεις", basePath: "/Ntantades/Profil/Istoriko_Ntanta/Eidopoihseis", subItems: [] },
    { id: 40, text: "Επεξεργασία Στοιχείων", basePath: "/Ntantades/Profil/Epeksergasia_Stoixeion", subItems: [] },
    { id: 41, text: "Ιστορικό Αιτήσεων", basePath: "/Ntantades/Profil/Istoriko_Ntanta", subItems: [
        { text: "Ραντεβού", path: "Rantevou_Oloklhrwmena" },
        { text: "Αιτήσεις Ενδιαφέροντος", path: "Aithseis_Endiaferontos_Oloklhrwmenes" },
        { text: "Ιδιωτικά Συμφωνητικά", path: "Idiwtika_Symfwnhtika_Oloklhrwmena" },
        { text: "Πληρωμές", path: "Plhrwmes_Oloklhrwmenes" },
        { text: "Αξιολογήσεις", path: "Aksiologhseis" },
        { text: "Ειδοποιήσεις", path: "Eidopoihseis" },
    ] },
    { id: 42, text: "Αποσύνδεση", basePath: "/", subItems: [] },
  ];

  const handleItemClick = (item) => {
    if (item.id === 42) {
      localStorage.setItem('isNannyLoggedIn', JSON.stringify(false)); // Update local storage
      navigate('/'); // Navigate to main
      window.location.reload();
    }
    if (item.subItems.length === 0) {
      window.location.pathname = item.basePath;
    } else {
      setActiveItem(item.text === activeItem ? null : item.text);
    }
  };

  const handleSubItemClick = (basePath, subPath) => {
    const newPath = `${basePath}/${subPath}`;
    window.location.pathname = newPath;
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <div
              className={`menu-item ${activeItem === item.text ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item.subItems.length > 0 && <span className="arrow-profile">▼</span>}
              <span>{item.text}</span>
            </div>
            {activeItem === item.text && item.subItems.length > 0 && (
              <ul className="submenu">
                {item.subItems.map((subItem, index) => (
                  <li key={index}>
                    <button
                      className="submenu-item"
                      onClick={() => handleSubItemClick(item.basePath, subItem.path)}
                    >
                      {subItem.text}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
