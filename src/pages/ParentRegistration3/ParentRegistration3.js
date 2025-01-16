import "./ParentRegistration3.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentForm3 from "./ParentForm3";
import ParentProgressBar3 from "./ParentProgressBar3";

export default function ParentRegistration3() {
  return (
    <div className="ParentRegistration3">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentProgressBar3/>
      <ParentForm3 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}