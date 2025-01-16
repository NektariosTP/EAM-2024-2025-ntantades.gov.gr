import "./EditAgreement1.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import EditAgreementForm1 from "./EditAgreementForm1";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function EditAgreement1() {
  return (
    <div className="EditAgreement1">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <EditAgreementForm1/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}