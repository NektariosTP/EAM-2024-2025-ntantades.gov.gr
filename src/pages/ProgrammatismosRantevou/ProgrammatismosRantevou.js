import "./ProgrammatismosRantevou.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import RantevouForm from "./RantevouForm";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function ProgrammatismosRantevou() {
  return (
    <div className="ProgrammatismosRantevou">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <RantevouForm/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
