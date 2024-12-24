import React from "react";
import "./Announcements.css";

function Announcements() {
    return (
        <div className="container">
            <div className="section">
                <div className="section-title">Ανακοινώσεις</div>
                <div className="announcements">
                    <div className="announcement-block">
                        <img src="/greece_map.jpg" alt="Announcement 1" />
                        <div className="announcement-text">
                            <h3>Επέκταση της υπηρεσίας σε νέους δήμους.</h3>
                            <p>Το Υπουργείο Κοινωνικής Συνοχής και Οικογένειας ανακοινώνει την ένταξη νέων δήμων στο πρόγραμμα «Νταντάδες της γειτονιάς», προσφέροντας έτσι σε περισσότερους γονείς την ευκαιρία να επωφεληθούν από τις υπηρεσίες του προγράμματος.</p>
                        </div>
                    </div>
                    <div className="announcement-block">
                        <img src="/increase.jpg" alt="Announcement 2" />
                        <div className="announcement-text">
                            <h3>Αύξηση της αξίας τοποθέτησης (voucher).</h3>
                            <p>Σε διπλασιασμό του ποσού που θα λαμβάνουν οι δικαιούχοι οι οποίοι θα ενταχθούν στο πρόγραμμα «Νταντάδες της γειτονιάς», προχωρά το Υπουργείο Κοινωνικής Συνοχής και Οικογένειας ως ένα ακόμη μέτρο στήριξής.</p>
                        </div>
                    </div>
                    <div className="announcement-block">
                        <img src="/calendar.jpg" alt="Announcement 3" />
                        <div className="announcement-text">
                            <h3>Επέκταση της Περιόδου Εγγραφών</h3>
                            <p>Η περίοδος εγγραφών για το πρόγραμμα «Νταντάδες της γειτονιάς» επεκτείνεται, δίνοντας περισσότερη ευκαιρία σε γονείς και δικαιούχους να ενταχθούν στην υπηρεσία. Οι εγγραφές θα είναι ανοιχτές μέχρι τις 31/12/2024.</p>
                        </div>
                    </div>
                    <div className="announcement-block">
                        <img src="/dit.jpg" alt="Announcement 4" />
                        <div className="announcement-text">
                            <h3>Αναβάθμιση Ιστοσελίδας</h3>
                            <p>Η ιστοσελίδα του προγράμματος «Νταντάδες της γειτονιάς» αναβαθμίστηκε μέσω της συνεργασίας με φοιτητές τους τμήματος Πληροφορικής και Τηλεπικοινωνιών του ΕΚΠΑ. Τους ευχαριστούμε θερμά!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="section">
                <div className="section-title">Χρήσιμοι Σύνδεσμοι</div>
                <div className="useful-links">
                    <div className="link-block">
                        <a href="/link1">Useful Link 1</a>
                        <p>01/01/2024</p>
                    </div>
                    <div className="link-block">
                        <a href="/link2">Useful Link 2</a>
                        <p>02/01/2024</p>
                    </div>
                    <div className="link-block">
                        <a href="/link3">Useful Link 3</a>
                        <p>03/01/2024</p>
                    </div>
                    <div className="link-block">
                        <a href="/link4">Useful Link 4</a>
                        <p>04/01/2024</p>
                    </div>
                    <div className="link-block">
                        <a href="/link5">Useful Link 5</a>
                        <p>05/01/2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Announcements;
