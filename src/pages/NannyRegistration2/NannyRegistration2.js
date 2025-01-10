import "./NannyRegistration2.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyForm2 from "./NannyForm2";
import NannyProgressBar2 from "./NannyProgressBar2";

export default function NannyRegistration2() {
  return (
    <div className="NannyRegistration2">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyProgressBar2/>
      <NannyForm2 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}