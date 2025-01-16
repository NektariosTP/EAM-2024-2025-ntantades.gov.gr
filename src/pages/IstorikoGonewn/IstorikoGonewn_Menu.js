import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SidebarMenu() {
  const [activeItem, setActiveItem] = useState(null); // Ενεργή κατηγορία
  const location = useLocation(); // Για να πάρουμε το τρέχον URL

  const menuItems = [
    {
      id: 32,
      text: "Ραντεβού με Επαγγελματίες",
      basePath: "/Goneis/Profil/Istoriko_Gonea",
      subItems: [
        { text: "Προσεχώς", path: "Rantevou_Prosexws" },
        { text: "Ολοκληρωμένα", path: "Rantevou_Oloklhrwmena" },
        { text: "Ακυρωμένα", path: "Rantevou_Akyrwmena" },
      ],
    },
    {
      id: 33,
      text: "Αιτήσεις Ενδιαφέροντος",
      basePath: "/Goneis/Profil/Istoriko_Gonea",
      subItems: [
        { text: "Σε εκκρεμότητα", path: "Aithseis_Endiaferontos_Se_Ekkremothta" },
        { text: "Ολοκληρωμένες", path: "Aithseis_Endiaferontos_Oloklhrwmenes" },
      ],
    },
    {
      id: 34,
      text: "Ιδιωτικά Συμφωνητικά",
      basePath: "/Goneis/Profil/Istoriko_Gonea",
      subItems: [
        { text: "Σε εκκρεμότητα", path: "Idiwtika_Symfwnhtika_Se_ekkremothta" },
        { text: "Ολοκληρωμένα", path: "Idiwtika_Symfwnhtika_Oloklhrwmena" },
      ],
    },
    {
      id: 35,
      text: "Πληρωμές",
      basePath: "/Goneis/Profil/Istoriko_Gonea/Plhrwmes",
      subItems: [
        { text: "Προσεχώς", path: "Prosexws" },
        { text: "Ολοκληρωμένες", path: "Oloklhrwmenes" },
      ],
    },
    {
      id: 36,
      text: "Αξιολογήσεις",
      basePath: "/Goneis/Profil/Istoriko_Gonea/Aksiologhseis",
      subItems: [],
    },
    {
      id: 37,
      text: "Ειδοποιήσεις",
      basePath: "/Goneis/Profil/Istoriko_Gonea/Eidopoihseis",
      subItems: [],
    },
  ];

  const handleItemClick = (item) => {
    if (item.subItems.length === 0) {
      // Αν δεν υπάρχουν subItems, πλοήγησε στο basePath
      window.location.pathname = item.basePath;
    } else {
      setActiveItem(item.text === activeItem ? null : item.text); // Εναλλαγή ενεργού στοιχείου
    }
  };

  const handleSubItemClick = (basePath, subPath) => {
    const newPath = `${basePath}/${subPath}`;
    window.location.pathname = newPath; // Αλλαγή του URL
  };

  const sidebarStyle = {
    width: "20%",
    padding: "15px",
    borderRight: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
  };

  const menuItemStyle = {
    padding: "10px 15px",
    cursor: "pointer",
    marginBottom: "5px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    transition: "background-color 0.3s",
  };

  const activeItemStyle = {
    ...menuItemStyle,
    backgroundColor: "#add8e6",
    fontWeight: "bold",
  };

  const arrowStyle = {
    marginRight: "10px",
  };

  const subMenuStyle = {
    listStyleType: "none",
    paddingLeft: "25px",
    marginTop: "5px",
  };

  const subMenuItemStyle = {
    padding: "5px 15px",
    cursor: "pointer",
    marginBottom: "5px",
    borderRadius: "5px",
    backgroundColor: "#e8f4f8",
    transition: "background-color 0.3s",
    border: "none",
    textAlign: "center",
    fontSize: "1rem",
    width: "100%",
  };

  const subMenuButtonStyle = {
    ...subMenuItemStyle,
    display: "block",
  };

  return (
    <div style={sidebarStyle}>
      <h3 style={{ textAlign: "center" }}>Ιστορικό Αιτήσεων</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <div
              style={activeItem === item.text ? activeItemStyle : menuItemStyle}
              onClick={() => handleItemClick(item)}
            >
              <span style={arrowStyle}>▼</span>
              <span>{item.text}</span>
            </div>
            {activeItem === item.text && item.subItems.length > 0 && (
              <ul style={subMenuStyle}>
                {item.subItems.map((subItem, index) => (
                  <li key={index}>
                    <button
                      style={subMenuButtonStyle}
                      onClick={() =>
                        handleSubItemClick(item.basePath, subItem.path)
                      }
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#cce7f0")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#e8f4f8")
                      }
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
