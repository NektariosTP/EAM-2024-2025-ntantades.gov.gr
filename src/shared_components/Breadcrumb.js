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
        { label: "Eγγραφή", path: "/Goneis/Eggrafi" },
        { label: "Επιτυχημένη Eγγραφή", path: "/Goneis/Epitixia_Eggrafis" },
        { label: "Προγραμματισμός Ραντεβού Γνωριμίας", path: "/Goneis/Aggelies/Profile/Rantevou" },
        { label: "Επιτυχημένη Αίτηση Ραντεβού Γνωριμίας", path: "/Goneis/Aggelies/Profile/Epitixia_aitisis_rantevou" },
        { label: "Αίτηση Ενδιαφέροντος Συνεργασίας", path: "/Goneis/Aggelies/Profile/Aitisi_endiaferontos" },
        { label: "Επιτυχημένη Αίτηση Ενδιαφέροντος Συνεργασίας", path: "/Goneis/Aggelies/Profile/Epitixia_aitisis_endiaferontos" },
        { label: "Προσωρινή Αποθήκευση Ενδιαφέροντος Συνεργασίας", path: "/Goneis/Aggelies/Profile/Prosorini_Aitisi_endiaferontos" },
        { label: "Νταντάδες", path: "/Ntantades"},
        { label: "Eγγραφή", path: "/Ntantades/Eggrafi"},
        { label: "Επιτυχημένη Eγγραφή", path: "/Ntantades/Epitixia_Eggrafis"},
        { label: "Δημιουργία Αγγελίας", path: "/Ntantades/Dimiourgia_Aggelias"},
        { label: "Επιτυχημένη Δημιουργία Αγγελίας", path: "/Ntantades/Oristiki_Ypovoli"},
        { label: "Προσωρινή Αποθήκευση Αγγελίας", path: "/Ntantades/Prosorini_Apothikefsi"},
        { label: "Πληροφορίες", path: "/Plirofories" },
        { label: "Επικοινωνία", path: "/Epikoinonia" },

        /*Profile History Parent*/
        { label: "Το προφίλ μου", path: "/Goneis/Profil"},
        { label: "Ιστορικό", path: "/Goneis/Profil/Istoriko_Gonea"},
        { label: "Οι Συνεργασίες μου", path: "/Goneis/Profil/Synergasies"},
        { label: "Ενεργή Συνεργασία", path: "/Goneis/Profil/Synergasies/Leptomereies_Active"},
        { label: "Επεξεργασία Ενεργής Συνεργασίας", path: "/Goneis/Profil/Synergasies/Leptomereies_Active/Epeksergasia"},
        { label: "Ολοκληρωμένη Συνεργασία", path: "/Goneis/Profil/Synergasies/Leptomereies_Complete"},
        { label: "Επιβεβαίωση Ολοκλήρωσης Συνεργασίας", path: "/Goneis/Profil/Synergasies/Leptomereies_Complete/Oloklirosi"},
        { label: "Λήξη Ενεργής Συνεργασίας", path: "/Goneis/Profil/Synergasies/Leptomereies_Active/Liksi"},
        { label: "Προσεχώς Ραντεβού", path: "/Goneis/Profil/Istoriko_Gonea/Rantevou_Prosexws"},
        { label: "Ολοκληρωμένα Ραντεβού", path: "/Goneis/Profil/Istoriko_Gonea/Rantevou_Oloklhrwmena"},
        { label: "Ακυρωμένα Ραντεβού", path: "/Goneis/Profil/Istoriko_Gonea/Rantevou_Akyrwmena"},
        { label: "Αιτήσεις Ενδιαφέροντος σε Εκκρεμότητα", path: "/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Se_Ekkremothta"},
        { label: "Ολοκληρωμένες Αιτήσεις Ενδιαφέροντος", path: "/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes"},
        { label: "Ιδιωτικά Συμφωνητικά σε Εκκρεμότητα", path: "/Goneis/Profil/Istoriko_Gonea/Idiwtika_Symfwnhtika_Se_ekkremothta"},
        { label: "Υπογραφή Ιδιωτικού Συμφωνητικού", path: "/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes/ypografh_idiwtikou_symfwnhtikou"},
        { label: "Επιβεβαίωση", path: "/Goneis/Profil/Istoriko_Gonea/Aithseis_Endiaferontos_Oloklhrwmenes/ypografh_idiwtikou_symfwnhtikou/epivevaiwsh"},
        { label: "Πληρωμές", path: "/Goneis/Profil/Istoriko_Gonea/Plhrwmes"},
        { label: "Ολοκληρωμένες Πληρωμές", path: "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Oloklhrwmenes"},
        { label: "Προσεχώς Πληρωμές", path: "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws"},
        { label: "Ενεργοποίηση Voucher", path: "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws_Voucher"},
        { label: "Επιβεβαίωση", path: "/Goneis/Profil/Istoriko_Gonea/Plhrwmes/Prosexws_Voucher/Epivevaiwsh"},
        { label: "Επαναπρογραμματισμός Ραντεβού", path: "/Goneis/Profil/Istoriko_Gonea/Rantevou_Prosexws/Epeksergasia"},
        { label: "Μηνύματα", path: "/Goneis/Profil/Minimata"},
        { label: "Αξιολογήσεις", path: "/Goneis/Profil/Istoriko_Gonea/Aksiologhseis"},
        { label: "Ειδοποιήσεις", path: "/Goneis/Profil/Istoriko_Gonea/Eidopoihseis"},
        { label: "Επεξεργασία Στοιχείων", path: "/Goneis/Profil/Epeksergasia_Stoixeion"},

        /*Profile History Nanny*/
        { label: "Το προφίλ μου", path: "/Ntantades/Profil"},
        { label: "Ιστορικό", path: "/Ntantades/Profil/Istoriko_Ntanta"},
        { label: "Οι Συνεργασίες μου", path: "/Ntantades/Profil/Synergasies"},
        { label: "Ενεργή Συνεργασία", path: "/Ntantades/Profil/Synergasies/Leptomereies_Active"},
        { label: "Προσεχώς Ραντεβού", path: "/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Prosexws"},
        { label: "Επιβεβαίωση Ραντεβού", path: "/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Prosexws/Epivevaiwsh"},
        { label: "Ολοκληρωμένα Ραντεβού", path: "/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Oloklhrwmena"},
        { label: "Ακυρωμένα Ραντεβού", path: "/Ntantades/Profil/Istoriko_Ntanta/Rantevou_Akyrwmena"},
        { label: "Αιτήσεις Ενδιαφέροντος σε Εκκρεμότητα", path: "/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Se_Ekkremothta"},
        { label: "Επιβεβαίωση Αίτησης Ενδιαφέροντος", path: "/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Se_Ekkremothta/Epivevaiwsh"},
        { label: "Ολοκληρωμένες Αιτήσεις Ενδιαφέροντος", path: "/Ntantades/Profil/Istoriko_Ntanta/Aithseis_Endiaferontos_Oloklhrwmenes"},
        { label: "Ιδιωτικά Συμφωνητικά σε Εκκρεμότητα", path: "/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_Ekkremothta"},
        { label: "Ολοκληρωμένα Ιδιωτικά Συμφωνητικά", path: "/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Oloklhrwmena"},
        { label: "Υπογραφή Ιδιωτικού Συμφωνητικού", path: "/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_Ekkremothta/ypografh_idiwtikou_symfwnhtikouu"},
        { label: "Επιβεβαίωση", path: "/Ntantades/Profil/Istoriko_Ntanta/Idiwtika_Symfwnhtika_Se_ekkremothta/ypografh_idiwtikou_symfwnhtikouu/epivevaiwsh"},
        { label: "Ολοκληρωμένες Πληρωμές", path: "/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Oloklhrwmenes"},
        { label: "Προσεχώς Πληρωμές", path: "/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws"},
        { label: "Αποδοχή Πληρωμής", path: "/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs"},
        { label: "Επιβεβαίωση", path: "/Ntantades/Profil/Istoriko_Ntanta/Plhrwmes_Prosexws/Apodoxh_Plhrwmhs/Epivevaiwsh"},
        { label: "Μηνύματα", path: "/Ntantades/Profil/Minimata"},
        { label: "Αξιολογήσεις", path: "/Ntantades/Profil/Istoriko_Ntanta/Aksiologhseis"},
        { label: "Ειδοποιήσεις", path: "/Ntantades/Profil/Istoriko_Ntanta/Eidopoihseis"},
        { label: "Επεξεργασία Στοιχείων", path: "/Ntantades/Profil/Epeksergasia_Stoixeion"},

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
