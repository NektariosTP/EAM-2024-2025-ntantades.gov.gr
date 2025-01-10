import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb() {
    const location = useLocation();

    // Example breadcrumb items
    const breadcrumbItems = [
        { label: "Αρχική", path: "/" },
        { label: "Γονείς", path: "/Goneis" },
        { label: "Αγγελίες", path: "/Goneis/Aggelies" },
        { label: "Προφίλ", path: "/Goneis/Aggelies/Profile" },
        { label: "Νταντάδες", path: "/Ntantades"},
        { label: "Eγγραφή", path: "/Ntantades/Eggrafi"},
        { label: "Πληροφορίες", path: "/Plirofories" },
        { label: "Επικοινωνία", path: "/Epikoinonia" }
        
        /* Add every site and its path */
    ];

    // Find breadcrumb items that match the current path hierarchy
    const currentBreadcrumbs = breadcrumbItems.filter(item =>
        location.pathname.startsWith(item.path)
    );

    return (
        <nav className="breadcrumb-container">
            <div className="breadcrumb">
                {currentBreadcrumbs.map((item, index) => (
                    <span key={index} className="breadcrumb-item">
                        <Link to={item.path}>{item.label}</Link>
                        {index < currentBreadcrumbs.length - 1 && (
                            <span className="breadcrumb-separator">/</span>
                        )}
                    </span>
                ))}
            </div>
        </nav>
    );
}

export default Breadcrumb;
