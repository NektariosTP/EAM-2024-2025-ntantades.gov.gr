import "./EditAgreement4.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import EditAgreementForm4 from "./EditAgreementForm4";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function EditAgreement4() {
  return (
    <div className="EditAgreement4">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <EditAgreementForm4/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
