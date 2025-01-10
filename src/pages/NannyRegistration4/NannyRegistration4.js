import "./NannyRegistration4.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyForm4 from "./NannyForm4";
import NannyProgressBar4 from "./NannyProgressBar4";

export default function NannyRegistration4() {
  return (
    <div className="NannyRegistration5">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyProgressBar4/>
      <NannyForm4 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}