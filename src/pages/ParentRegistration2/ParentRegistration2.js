import "./ParentRegistration2.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentForm2 from "./ParentForm2";
import ParentProgressBar2 from "./ParentProgressBar2";

export default function ParentRegistration2() {
  return (
    <div className="ParentRegistration2">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentProgressBar2/>
      <ParentForm2 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}