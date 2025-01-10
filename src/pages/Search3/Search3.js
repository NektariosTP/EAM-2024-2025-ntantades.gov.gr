import "./Search3.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ProfileTop from "./ProfileTop"
import ProfileBody from "./ProfileBody"
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Search3() {
  return (
    <div className="Search3">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ProfileTop/>
      <ProfileBody/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
