import "./ProgrammatismosRantevou2.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import DateSuccess from "./DateSuccess";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function ProgrammatismosRantevou2() {
  return (
    <div className="ProgrammatismosRantevou2">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <DateSuccess/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
