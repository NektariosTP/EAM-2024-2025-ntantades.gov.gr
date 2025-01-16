import "./ParentRegistration6.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentProgressBar6 from "./ParentProgressBar6";
import ParentForm6 from "./ParentForm6";

export default function ParentRegistration6() {
  localStorage.setItem("isParentLoggedIn", true);
  
  return (
    <div className="ParentRegistration6">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentProgressBar6/>
      <ParentForm6/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}