import "./EditAgreement5.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import EditAgreementForm5 from "./EditAgreementForm5";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function EditAgreement5() {
  return (
    <div className="EditAgreement5">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <EditAgreementForm5/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}