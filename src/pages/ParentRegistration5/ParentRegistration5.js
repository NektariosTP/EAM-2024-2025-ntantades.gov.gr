import "./ParentRegistration5.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentProgressBar5 from "./ParentProgressBar5";
import ParentForm5 from "./ParentForm5";

export default function ParentRegistration5() {
  return (
    <div className="ParentRegistration5">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentProgressBar5/>
      <ParentForm5/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}