import "./NannyProfile.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyProfileContainer from "./NannyProfileContainer";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function NannyProfile() {
  return (
    <div className="NannyProfile">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyProfileContainer/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}