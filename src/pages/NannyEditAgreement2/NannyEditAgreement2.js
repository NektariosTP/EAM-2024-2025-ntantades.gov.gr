import "./NannyEditAgreement2.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyEditAgreementForm2 from "./NannyEditAgreementForm2";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function NannyEditAgreement2() {
  return (
    <div className="NannyEditAgreement2">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyEditAgreementForm2/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}