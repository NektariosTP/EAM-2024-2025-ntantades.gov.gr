import "./EditAgreement2.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import EditAgreementForm2 from "./EditAgreementForm2";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function EditAgreement2() {
  return (
    <div className="EditAgreement2">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <EditAgreementForm2/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
