import "./ParentRegistration4.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentForm4 from "./ParentForm4";
import ParentProgressBar4 from "./ParentProgressBar4";

export default function ParentRegistration4() {
  return (
    <div className="ParentRegistration4">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentProgressBar4/>
      <ParentForm4 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}