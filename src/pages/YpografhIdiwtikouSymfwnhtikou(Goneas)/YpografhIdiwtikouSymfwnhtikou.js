import React, { useState, useEffect } from "react";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ProgressBar from "./IdiwtikoSymfwnhtikoProgressBar";
import ButtonsAkyrwshYpovolh from "./Buttons_Akyrwsh_Ypovolh";
import Button_FD from "./Buttons_fullscreen_download";
import ButtonApodoxhs from "./Button_Apodoxhs";
import SignatureBox from "./SignatureBox";
import UploadPDF from "./UploadPdf";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import "./pdf.css";

export default function YpografhIdiwtikouSymfwnhtikou({ onSubmit }) {
    const [isAccepted, setIsAccepted] = useState(false);
    const [hasSigned, setHasSigned] = useState(false);
    const [hasUploadedPDF, setHasUploadedPDF] = useState(false);
    const [pdfUrl, setPdfUrl] = useState("/test.pdf"); // Προεπιλεγμένο URL
    const [signatureData, setSignatureData] = useState(null); // Δεδομένα υπογραφής

    // Φόρτωση κατάστασης από το localStorage κατά την αρχική φόρτωση
    useEffect(() => {
        const savedState = localStorage.getItem("agreementState");
        if (savedState) {
            const { isAccepted, hasSigned, hasUploadedPDF, signatureData, pdfFile } = JSON.parse(savedState);
            setIsAccepted(isAccepted);
            setHasSigned(hasSigned);
            setHasUploadedPDF(hasUploadedPDF);
            setSignatureData(signatureData); // Επαναφορά δεδομένων υπογραφής
            if (pdfFile) {
                setPdfUrl(pdfFile);
            }
        }
    }, []);

    const handleAkyrwsh = () => {
        // Διαγραφή μόνο των συγκεκριμένων τιμών από το localStorage
        localStorage.removeItem("agreementState"); // Για την υπογραφή και τα υπόλοιπα δεδομένα
        localStorage.removeItem("isChecked"); // Για την κατάσταση του κουμπιού αποδοχής
        localStorage.removeItem("uploadedPDF");
    };

    const handleSave = () => {
        const savedState = {
            isAccepted,
            hasSigned,
            hasUploadedPDF,
            signatureData, // Αποθήκευση δεδομένων υπογραφής
            pdfFile: pdfUrl, // Αποθήκευση του ανεβασμένου αρχείου PDF
        };
        localStorage.setItem("agreementState", JSON.stringify(savedState));
    };

    const handleAcceptance = (accepted) => {
        setIsAccepted(accepted);
    };

    const handleSignature = (signed, dataURL) => {
        setHasSigned(signed);
        setSignatureData(dataURL); // Αποθήκευση δεδομένων υπογραφής
    };

    const handleFileUpload = (uploaded, file) => {
        setHasUploadedPDF(uploaded);
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setPdfUrl(fileUrl); // Ενημερώνει το URL του PDF
        } else {
            setPdfUrl("/test.pdf");
        }
    };

    const isSubmitEnabled = isAccepted && (hasSigned || hasUploadedPDF);

    let tooltipMessage = "";
    if (!isAccepted && (!hasSigned || !hasUploadedPDF)) {
        tooltipMessage = `Παρακαλώ αποδεχτείτε τους όρους και υποβάλετε την υπογραφή 
    σας είτε μέσω σχεδίασης είτε με αποστολή αρχείου PDF.`;
    } else if (!isAccepted) {
        tooltipMessage = "Παρακαλώ αποδεχτείτε τους όρους και προϋποθέσεις.";
    } else if (!hasSigned && !hasUploadedPDF) {
        tooltipMessage = "Παρακαλώ υποβάλετε την υπογραφή σας.";
    }

    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <ProgressBar />

            <div className="content-frame">
                <h2>Υπογραφή Ιδιωτικού Συμφωνητικού Συνεργασίας</h2>
                <h3 className="confirmation-title">1. Επιβεβαίωση Όρων Συνεργασίας</h3>
                <div className="pdf-container">
                    <iframe
                        src={pdfUrl}
                        title="Agreement PDF"
                        className="pdf-frame"
                    ></iframe>
                </div>
                <Button_FD pdfUrl={pdfUrl} />
                <ButtonApodoxhs onAccept={handleAcceptance} isAccepted={isAccepted} />
                <h3 className="confirmation-title">2. Ολοκλήρωση Υπογραφής</h3>
                <h3 className="sign-title">
                    Παρακαλώ υπογράψτε μέσα στο πλαίσιο παρακάτω, χρησιμοποιώντας το <br />
                    ποντίκι ή την οθόνη αφής, για να ολοκληρωθεί η αποδοχή της συμφωνίας.
                </h3>
                <SignatureBox onSign={handleSignature} signatureData={signatureData} />
                <h3 className="sign-title">
                    Εναλλακτικά, έχετε τη δυνατότητα να ανεβάσετε <br />
                    την υπογραφή σας σε μορφή αρχείου PDF
                </h3>
                <UploadPDF onUpload={handleFileUpload} />
                <ButtonsAkyrwshYpovolh
                    onSubmit={isSubmitEnabled ? onSubmit : null}
                    isDisabled={!isSubmitEnabled}
                    tooltip={tooltipMessage}
                    onSave={handleSave}
                    onAkyrwsh={handleAkyrwsh}
                />
            </div>

            <NavMenu />
            <Footer />
        </div>
    );
}
