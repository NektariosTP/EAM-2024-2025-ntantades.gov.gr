import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./ParentProfileSidebar.css";

export default function ParentProfileSidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 32, text: "Oι Συνεργασίες μου", basePath: "/Goneis/Profil/Synergasies", subItems: []},
    { id: 33, text: "Προσεχώς Ραντεβού", basePath: "/Goneis/Profil/Istoriko_Gonea/Rantevou_Prosexws", subItems: [] },
    { id: 34, text: "Αιτήσεις Ενδιαφέροντος Συνεργασίας", basePath: "/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Se_Ekkremothta", subItems: [] },
    { id: 35, text: "Ιδιωτικό Συμφωνητικό Συνεργασίας", basePath: "/Goneis/Profil/Istoriko_Gonea/Idiwtika_Symfwnhtika_Se_ekkremothta", subItems: [] },
    { id: 36, text: "Πληρωμές", basePath: "/Goneis/Profil/Istoriko_Gonea/Plhrwmes", subItems: [] },
    { id: 37, text: "Μηνύματα", basePath: "/Goneis/Profil/Minimata", subItems: [] },
    { id: 38, text: "Αξιολογήσεις", basePath: "/Goneis/Profil/Istoriko_Gonea/Aksiologhseis", subItems: [] },
    { id: 39, text: "Ειδοποιήσεις", basePath: "/Goneis/Profil/Istoriko_Gonea/Eidopoihseis", subItems: [] },
    { id: 40, text: "Επεξεργασία Στοιχείων", basePath: "/Goneis/Profil/Epeksergasia_Stoixeion", subItems: [] },
    { id: 41, text: "Ιστορικό Αιτήσεων", basePath: "/Goneis/Profil/Istoriko_Gonea", subItems: [
        { text: "Ραντεβού", path: "Rantevou_Oloklhrwmena" },
        { text: "Αιτήσεις Ενδιαφέροντος Συνεργασίας", path: "Aithseis_Endiaferontos_Oloklhrwmenes" },
        { text: "Ιδιωτικά Συμφωνητικά Συνεργασίας", path: "Idiwtika_Symfwnhtika_Oloklhrwmena" },
        { text: "Πληρωμές", path: "Plhrwmes/Oloklhrwmenes" },
        { text: "Αξιολογήσεις", path: "Aksiologhseis" },
        { text: "Ειδοποιήσεις", path: "Eidopoihseis" },
    ] },
    { id: 42, text: "Αποσύνδεση", basePath: "/", subItems: [] },
  ];

  const handleItemClick = (item) => {
    if (item.id === 42) {
      localStorage.setItem('isParentLoggedIn', JSON.stringify(false)); // Update local storage
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
