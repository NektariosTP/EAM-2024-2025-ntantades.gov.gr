import "./NannyRegistration3.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyForm3 from "./NannyForm3";
import NannyProgressBar3 from "./NannyProgressBar3";

export default function NannyRegistration3() {
  return (
    <div className="NannyRegistration5">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyProgressBar3/>
      <NannyForm3 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}