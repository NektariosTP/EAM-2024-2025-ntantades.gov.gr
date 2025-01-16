import "./ParentProfile.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentProfileContainer from "./ParentProfileContainer";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function ParentProfile() {
  return (
    <div className="ParentProfile">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentProfileContainer/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}