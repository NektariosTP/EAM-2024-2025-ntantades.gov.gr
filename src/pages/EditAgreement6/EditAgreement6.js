import "./EditAgreement6.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import EditAgreementForm6 from "./EditAgreementForm6";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function EditAgreement6() {
  return (
    <div className="EditAgreement6">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <EditAgreementForm6/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}