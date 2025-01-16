import "./AdCreation3.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import AdForm3 from "./AdForm3";


export default function AdCreation3() {
  return (
    <div className="AdCreation3">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <AdForm3 />
      <NavMenu/>
      <Footer/>
    </div>
  );
}