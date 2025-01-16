import "./NannyEditAgreement1.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyEditAgreementForm1 from "./NannyEditAgreementForm1";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function NannyEditAgreement1() {
  return (
    <div className="NannyEditAgreement1">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyEditAgreementForm1/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}