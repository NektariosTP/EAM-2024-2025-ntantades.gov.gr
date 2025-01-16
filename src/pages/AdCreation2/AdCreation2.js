import "./AdCreation2.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import AdForm2 from "./AdForm2";


export default function AdCreation2() {
  return (
    <div className="AdCreation2">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <AdForm2 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}