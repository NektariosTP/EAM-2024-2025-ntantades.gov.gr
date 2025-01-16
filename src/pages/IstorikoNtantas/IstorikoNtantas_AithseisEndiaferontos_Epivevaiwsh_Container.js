import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import "../YpografhIdiwtikouSymfwnhtikou(Goneas)/YpografhIdiwtikouSymfwnhtikou2.css";

export default function IstorikoNtantas_AithseisEndiaferontos_Epivevaiwsh_Container() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/aithsh_endiaferontos.pdf"; // Διαδρομή του αρχείου
    link.download = "aithsh_endiaferontos.pdf"; // Όνομα αρχείου λήψης
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  

  const handleProfile = () => {
    window.location.href = `/Ntantades/Profil`;
  };

  const handleMain = () => {
    window.location.href = `/`;
};
  
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Breadcrumb />

      <div className="container-symf">
        {/* Τίτλος */}
        <h1 className="title-symf">
        Η Αίτηση Ενδιαφέροντος Επιβεβαιώθηκε Επιτυχώς
          <span className="success-icon">✔</span>
        </h1>

        {/* Περιγραφή */}
        <p className="description-symf">
          Θα λάβετε στο email σας το σχετικό έγγραφο σε μορφή PDF, <br/>
          συμπεριλαμβανομένου όλων των σχετικών πληροφοριών. 
        </p>

        {/* Λήψη PDF */}
        <a href="#" className="download-link" onClick={handleDownload}>
          <img src="/download.jpg" alt="Download Icon" className="download-icon" />
          aithsh_endiaferontos.pdf
        </a>

        {/* Αναμονή */}
        <h2 className="sub-title-symf">
          Αναμονή για την υπογραφή του γονέα
          <img src="/wait.png" alt="Wait Icon" className="wait-icon" />
        </h2>

        {/* Επιπλέον πληροφορίες */}
        <div className="sub-content-symf">
          <p className="sub-description-symf">
          Θα χρειαστεί να αναμένετε για την υπογραφή του γονέα, ώστε να ξεκινήσει η συνεργασία. <br/>
          Μόλις ολοκληρωθεί αυτή η διαδικασία θα λάβετε ειδοποίηση μέσω email και θα <br/>
          προχωρήσει η συνεργασία σας άμεσα!
          </p>
        </div>

        {/* Κουμπιά */}
        <div className="button-section-symf">
          <button className="button-return-button-symf" onClick={handleMain}>Επιστροφή στην αρχική</button>
          <button className="button-return-button-symf" onClick={handleProfile}>Μετάβαση στο Προφίλ μου</button>
        </div>
      </div>

      <NavMenu />
      <Footer />
    </div>
  );
}
