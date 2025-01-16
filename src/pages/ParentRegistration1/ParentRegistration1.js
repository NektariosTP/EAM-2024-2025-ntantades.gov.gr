import "./ParentRegistration1.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentForm1 from "./ParentForm1";
import ParentProgressBar1 from "./ParentProgressBar1";

export default function ParentRegistration1() {
  return (
    <div className="ParentRegistration1">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentProgressBar1/>
      <ParentForm1/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}