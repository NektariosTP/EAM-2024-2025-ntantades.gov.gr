import "./NannyRegistration6.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyProgressBar6 from "./NannyProgressBar6";
import NannyForm6 from "./NannyForm6";

export default function NannyRegistration6() {
  localStorage.setItem("isNannyLoggedIn", true);
  
  return (
    <div className="NannyRegistration6">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyProgressBar6/>
      <NannyForm6/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}