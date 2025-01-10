import React from "react";
import "./NavMenu.css";

function NavMenu() {
    return (
        <div className="nav-menu">
            <div className="menu-column">
                <h3>Γονείς</h3>
                <ul>
                    <li onClick={() => window.location.href = "/Goneis"}>Προϋποθέσεις Συμμετοχής</li>
                    <li onClick={() => window.location.href = "/Goneis/Αggelies"}>Αναζήτηση Νταντάδων</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Πληρωμή Νταντάς</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Επεξεργασία Συνεργασίας</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Ιστορικό Αιτήσεων</li>
                </ul>
            </div>
            <div className="menu-column">
                <h3>Νταντάδες</h3>
                <ul>
                    <li onClick={() => window.location.href = "/Ntantades"}>Προϋποθέσεις Συμμετοχής</li>
                    <li onClick={() => window.location.href = "/Ntantades/Eggrafi"}>Εγγραφή στο Μητρώο</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Δημιουργία Αγγελίας</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Ραντεβού με Γονείς</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Αποδοχή Πληρωμής</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Ιστορικό Αιτήσεων</li>
                    <li onClick={() => window.location.href = "/Goneis"}>Αξιολόγηση Προφίλ</li>
                </ul>
            </div>
            <div className="menu-column">
                <h3>Βοήθεια</h3>
                <ul>
                    <li onClick={() => window.location.href = "/Plirofories"}>Τι είναι το πρόγραμμα;</li>
                    <li>Οδηγίες</li>
                    <li>FAQ Γονέων</li>
                    <li>FAQ Νταντάδων</li>
                </ul>
            </div>
            <div className="menu-column">
                <h3>Επικοινωνία</h3>
                <ul>
                    <li onClick={() => window.location.href = "/Epikoinonia"}>Τηλέφωνο: 210 325 8080/8090</li>
                    <li onClick={() => window.location.href = "/Epikoinonia"}>Email: ntantades@yeka.gr</li>
                    <li onClick={() => window.location.href = "/Epikoinonia"}>Σταδίου 29, Αθήνα 105 59</li>
                    <li>
                        <div className="interactive-map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.34330998899446!2d23.730901538685835!3d37.98042790176907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3bad145a41%3A0x6db1fc0cbb58a00a!2sMinistry%20of%20Labor%20and%20Social%20Security!5e0!3m2!1sen!2sgr!4v1735140018054!5m2!1sen!2sgr" 
                                style={{ border: 0 }}
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade" 
                                title="Map showing the Ministry of Labor and Social Security location"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavMenu;
