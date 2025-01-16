import "./AdCreation1.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import AdForm from "./AdForm";


export default function AdCreation1() {
  return (
    <div className="NannyEligibility">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <AdForm />
      <NavMenu/>
      <Footer/>
    </div>
  );
}