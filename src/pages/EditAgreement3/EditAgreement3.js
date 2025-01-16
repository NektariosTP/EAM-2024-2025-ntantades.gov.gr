import "./EditAgreement3.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import EditAgreementForm3 from "./EditAgreementForm3";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function EditAgreement3() {
  return (
    <div className="EditAgreement3">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <EditAgreementForm3/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
