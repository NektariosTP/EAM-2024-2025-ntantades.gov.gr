import "./ParentEditProfile.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentEditProfileForm from "./ParentEditProfileForm";

export default function ParentEditProfile() {
  return (
    <div className="ParentEditProfile">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentEditProfileForm/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}