import "./NannyRegistration1.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyForm1 from "./NannyForm1";
import NannyProgressBar1 from "./NannyProgressBar1";

export default function NannyRegistration1() {
  return (
    <div className="NannyRegistration1">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyProgressBar1/>
      <NannyForm1/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}