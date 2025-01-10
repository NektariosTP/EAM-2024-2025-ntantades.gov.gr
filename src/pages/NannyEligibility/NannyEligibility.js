import "./NannyEligibility.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import Criteria from "./Criteria"

export default function NannyEligibility() {
  return (
    <div className="NannyEligibility">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <Criteria />
      <NavMenu/>
      <Footer/>
    </div>
  );
}