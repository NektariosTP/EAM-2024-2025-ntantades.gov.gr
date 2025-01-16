import "./NannyEditProfile.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyEditProfileForm from "./NannyEditProfileForm";

export default function NannyEditProfile() {
  return (
    <div className="NannyEditProfile">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyEditProfileForm/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}