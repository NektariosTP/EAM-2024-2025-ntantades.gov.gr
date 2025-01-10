import "./NannyRegistration5.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyProgressBar5 from "./NannyProgressBar5";
import NannyForm5 from "./NannyForm5";

export default function NannyRegistration5() {
  return (
    <div className="NannyRegistration5">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyProgressBar5/>
      <NannyForm5/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}